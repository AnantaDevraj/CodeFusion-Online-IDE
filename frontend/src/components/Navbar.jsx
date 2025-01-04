import React from 'react'
import logo from "../images/logo.png";
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';
import { MdLightMode } from "react-icons/md";
import { BsFillGridFill } from "react-icons/bs";
import { toggleClass } from '../pages/helper';

const Navbar = () => {
  return (
    <div>
      <div className="navbar flex items-center justify-between px-[100px] h-[80px] bg-[#141414]">
        <div className="logo">
          <img className='w-[150px] cursor-pointer' src={logo} alt="" />
        </div>
        <div className="links flex items-center gap-2">
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Contact</Link>
          <Link>Services</Link>
          <Avatar onClick={()=>{toggleClass(".dropDownNavbar" , "hidden")}} name="Wim Mostmans" size="40" round="50%" className='cursor-pointer ml-2'/>
        </div>

        <div className="dropDownNavbar hidden absolute right-[60px] top-[80px] shadow-lg rounded-lg shadow-black/50 p-[10px] bg-[#1A1919] w-[150px] h-[150px]">
          <div className='py-[10px] border-b-[1px] border-b-[#fff]'>
            <h3 className='text-[17px]' style={{lineHeight:1}}>Ananta Devraj</h3>
          </div>
          <i className='flex items-center gap-2 mt-3 mb-2 cursor-pointer' style={{fontStyle: "normal"}}><MdLightMode className='text-[20px]'/>Light mode</i>
          <i className='flex items-center gap-2 mt-3 mb-2 cursor-pointer' style={{fontStyle: "normal"}}><BsFillGridFill className='text-[20px]'/>Grid layout</i>
        </div>
      </div>
    </div>
  )
}

export default Navbar