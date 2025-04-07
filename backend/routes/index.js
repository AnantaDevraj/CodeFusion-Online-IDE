import express from "express";
import bcrypt from "bcryptjs";
import userModel from "../models/userModel.js";
import mongoose from "mongoose";
import connectDB from "../models/db.js";
import jwt from "jsonwebtoken"
import projectModel from "../models/projectModel.js"

const router = express.Router();

// Connect to MongoDB
connectDB();

/* GET home page. */
router.get("/", (req, res) => {
  res.render("index.js", { title: "Express" });
});

const secret = "secret";
// signUp API
router.post("/signUp", async (req, res) => {
  let { username, name, email, password } = req.body;
  let emailCon = await userModel.findOne({ email: email });

  if (emailCon) {
    return res.json({ success: false, message: "Email already exist" });
  } else {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, function (err, hash) {
        let user = userModel.create({
          username: username,
          name: name,
          email: email,
          password: hash,
        });
        return res.json({ success: true, message: "User created Successfully" });
      });
    });
  }
});

//Login API
router.post("/login", async (req, res) => {
  let { email, password } = req.body;
  let user = await userModel.findOne({ email: email });

  if (user) {
    // Rename the second `res` to avoid conflict
    bcrypt.compare(password, user.password, function (err, isMatch) {
      if (err) {
        return res.json({ success: false, message: "An error occurred", error: err });
      }
      if (isMatch) {
        let token = jwt.sign({ email: user.email, userId: user._id }, secret);
        return res.json({ success: true, message: "User logged in successfully", token: token, userId: user._id });
      } else {
        return res.json({ success: false, message: "Invalid email or password" });
      }
    });
  } else {
    return res.json({ success: false, message: "User not found!" });
  }
});

//get UserDetails API
router.post("/getUserDetails" , async(req , res) =>{
  let {userId} = req.body;
  let user = await userModel.findOne({_id: userId});
  if(user){
    return res.json({success: true, message: "User details fetched successfully", user: user});
  }else{
    return res.json({success: false, message: "User not found !"});
  }
})

//project API
router.post("/createProject" , async(req , res) =>{
  let {userId , title} = req.body;
  let user = await userModel.findOne({_id : userId});
  if (user){
    let project = await projectModel.create({
      title:title,
      createdBy : userId
    });

    return res.json({success : true , message : "Project created successfully" , projectId: project._id});
  }else{
    return res.json({success : false, message : "User not found"});
  }
})

//fetch Projeccts:
router.post("/getProjets" , async(req , res) =>{
  let {userId} = req.body;
  let user = await userModel.findOne({_id : userId});
  if (user){
    let projects = await projectModel.findOne({createdBy : userId});
    return res.json({success : true , message : "Projects fetched successfully" , projects : projects});
  }else{
    return res.json({success : false , message : "User not found !"});
  }
})

export default router;
