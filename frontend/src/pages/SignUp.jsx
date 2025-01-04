import React from 'react'
import { useState } from 'react';
import logo from "../images/logo.png"
import { Link } from 'react-router-dom';
import image from "../images/authPageSide.png";

const SignUp = () => {
    const [username , setUsername]  = useState("");
    const [name , setName]  = useState("");
    const [email , setEmail]  = useState("");
    const [pwd , setPwd]  = useState("");

    const submitForm = (e) =>{
        e.preventDefault();
    }

  return (
    <>
    <div className="container w-screen min-h-screen flex items-center justify-between pl-[100px]">
        <div className="left w-[35%]">
            <img className='w-[200px]' src={logo} alt="logo" />
                <form onSubmit={submitForm} className ="w-full mt-[60px]" action="">
                    <div className='inputBox'>
                        <input required onChange={(e) =>{setUsername(e.target.value)}} value={username} type="text" placeholder='UserName' />
                    </div>

                    <div className='inputBox'>
                        <input required onChange={(e) =>{setName(e.target.value)}} value={name} type="text" placeholder='Name' />
                    </div>

                    <div className='inputBox'>
                        <input required onChange={(e) =>{setEmail(e.target.value)}} value={email} type="email" placeholder='Email' />
                    </div>

                    <div className='inputBox'>
                        <input required onChange={(e) =>{setPwd(e.target.value)}} value={pwd} type="password" placeholder='Password' />
                    </div>

                    <p className='text-[gray]'>Already have an account <Link to="/login" className='text-[#00AEEF]'>login</Link></p>
                    <button className='btnBlue w-full mt-[20px]'>SignUp</button>
                </form>
                
        </div>
        <div className="right w-[55%]">
            <img className='h-[100vh] w-[100%] object-cover ' src={image} alt="" />
        </div>
    </div>
    </>
  )
}

export default SignUp