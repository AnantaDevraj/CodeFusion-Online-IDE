import React, { useState } from 'react'
import img from "../images/code.png"
import delimage from "../images/delete.png"
const Listcard = () => {

  const [isDeleteModelShow , setIsDeleteModelShow] = useState(false);
  return (
  <>
    <div className="ListCard mb-2 flex items-center justify-between w-[full] p-[10px] bg-[#141414] cursor-pointer rounded-lg hover:bg-[#202020]">
        <div className='flex items-center garp-2'>
            <img className='w-[80px]' src={img} alt="" />
            <div>
                <h3 className='text-[20px]'>My first project</h3>
                <p className='text-[14px] text-[gray]'>Created in 20 may 2024</p>
            </div>
        </div>
        <div>
            <img onClick={()=>{setIsDeleteModelShow(true)}} className='w-[30px] cursor-pointer mr-4' src={delimage} alt="" />
        </div>
    </div>
    {
      isDeleteModelShow ?<div className="model fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.1)] flex items-center justify-center flex-col">
      <div className="mainModel w-[25vw] h-[25vh] bg-[#141414] rounded-lg p-[20px]">
        <h3 className='text-3xl'>Do you want to delete <br/>
          this project
        </h3>
        <div className='flex items-center w-[full] mt-5 gap-[10px]'>
          <button className='p-[10px] rounded-lg bg-[#ff4343] text-white cursor-pointer min-w-[49%]'>Delete</button>
          <button onClick={()=>{setIsDeleteModelShow(false)}} className='p-[10px] rounded-lg bg-[#1A1919] text-white cursor-pointer min-w-[49%]'>Cancel</button>
        </div>
      </div>
    </div> : ""
    }
  </>
  )
}

export default Listcard