import React from 'react'
import logo from "../images/logo.png";
import { FiDownload } from "react-icons/fi";

const Editornavbar = () => {
  return (
    <div>
      <div className="Editornavbar flex items-center justify-between px-[100px] h-[80px] bg-[#141414]">
        <div className="logo">
          <img className='w-[150px] cursor-pointer' src={logo} alt="" />
        </div>
        <p>File / <span className='text-[gray]'>My first project</span></p>
        <i className='p-[8px] bg-[black] btn rounded-[5px] text-[20px] cursor-pointer'><FiDownload /></i>
      </div>
    </div>
  )
}

export default Editornavbar