import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import GridCard from '../components/GridCard';
import Listcard from '../components/Listcard';
const Home = () => {

  const [isGridLayout , setisGridLayout] = useState(false);
  const [isCreateModelShow, setIsCreateModelShow] = useState(false);

  return (
    <div>
      <Navbar/>
      <div className='flex items-center justify-between px-[100px] my-[40px]'>
        <h2 className='text-2xl'>Hi , Ananta </h2>
        <div className='flex items-center gap-1'>
          <div className="inputBox !w-[350px]">
            <input type="text" placeholder='Search Here...!' />
          </div>
          <button onClick={() => { setIsCreateModelShow(true) }} className='btnBlue rounded-lg mb-4 text-[20px] !p-[5px] !px-[10px]'>+</button>
        </div>
      </div>

      <div className='cards'>
        {
          isGridLayout ?
          <div className=" grid px-[100px]">
            <GridCard/>
            <GridCard/>
            <GridCard/>
            <GridCard/>
          </div>
          :
          <div className='list px-[100px]'>
            <Listcard/>
            <Listcard/>
            <Listcard/>
          </div>
        }
      </div>

        {
          isCreateModelShow ?<div className="createModelCon fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.1)] flex items-center justify-center ">
        <div className="createModel w-[25vw] h-[27vh] shadow-lg shadow-black/50 rounded-[10px] p-[20px]">
          <h3 className='text-[2xl] '>Create new project</h3>

          <div className="inputbox bg-[#202020] mt-4 rounded-md px-4 py-2">
            <input
              type="text"
              placeholder="Project Title"
              className="w-full bg-[#202020] text-gray-400 placeholder-gray-500 focus:outline-none"
            />
          </div>

          <div className='flex items-center gap-[10px] w-[full] mt-2'>
            <button className='btnBlue rounded-[5px] w-[49%] mb-4 !p-[5px] !px-[10px] !py-[10px]'>Create</button>
            <button onClick={() => { setIsCreateModelShow(false) }}  className='btnBlue !bg-[#1A1919] rounded-[5px] mb-4 w-[49%] !p-[5px] !px-[10px] !py-[10px]'>Cancel</button>
          </div>
        </div>
      </div> : ""
        }
    </div>
  )
}

export default Home