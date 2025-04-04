import mongoose from "mongoose";

let userSchema = new mongoose.Schema({
    name : String ,
    username : String,
    email : String,
    password : String,
    Date:{
        type : Date,
        default : Date.now
    },
    isblocked:{
        type : Boolean,
        default : false
    },
    isAdmin:{
        type : Boolean,
        default : false
    }
});
const User = mongoose.model("User" , userSchema); // User : name of collection

export default User;