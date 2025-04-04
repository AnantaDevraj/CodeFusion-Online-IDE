import React, { useState } from "react";
import Navbar from "../components/Navbar";
import GridCard from "../components/GridCard";
import Listcard from "../components/Listcard";
import { api_base_url } from "./helper";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [isGridLayout, setisGridLayout] = useState(false);
  const [isCreateModelShow, setIsCreateModelShow] = useState(false);
  const navigate = useNavigate();
  const [projectTitle, setProjectTitle] = useState("");

  const createproject = (e) => {
    if (projectTitle === "") {
      alert("Please enter project title");
    } else {
      fetch(api_base_url + "/createProject", {
        mode : "cors",
        method : "POST",
        headers :{
          "Content-type" : "application/json"
        },
        body : JSON.stringify({
          title : projectTitle,
          userId : localStorage.getItem("userId")
        })
      }).then(res => res.json()).then((data) => {
        if (data.success){
          setIsCreateModelShow(false)
          setProjectTitle("")
          alert("Project created successfully")
          navigate(`/editor/${data.projectId}`)
        }else{
          alert("Something went wrong")
        }
      })
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-between px-[100px] my-[40px]">
        <h2 className="text-2xl">Hi , Ananta </h2>
        <div className="flex items-center gap-1">
          <div className="inputBox !w-[350px]">
            <input type="text" placeholder="Search Here...!" />
          </div>
          <button
            onClick={() => {
              setIsCreateModelShow(true);
            }}
            className="btnBlue rounded-lg mb-4 text-[20px] !p-[5px] !px-[10px]"
          >
            +
          </button>
        </div>
      </div>

      <div className="cards">
        {isGridLayout ? (
          <div className=" grid px-[100px]">
            <GridCard />
            <GridCard />
            <GridCard />
            <GridCard />
          </div>
        ) : (
          <div className="list px-[100px]">
            <Listcard />
            <Listcard />
            <Listcard />
          </div>
        )}
      </div>

      {isCreateModelShow ? (
        <div className="createModelCon fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.1)] flex items-center justify-center ">
          <div className="createModel w-[25vw] h-[27vh] shadow-lg shadow-black/50 rounded-[10px] p-[20px]">
            <h3 className="text-[2xl] ">Create new project</h3>

            <div className="inputbox bg-[#202020] mt-4 rounded-md px-4 py-2">
              <input
                onChange={(e) => setProjectTitle(e.target.value)}
                value={projectTitle}
                type="text"
                placeholder="Project Title"
                className="w-full bg-[#202020] text-gray-400 placeholder-gray-500 focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-[10px] w-[full] mt-2">
              <button onClick={createproject} className="btnBlue rounded-[5px] w-[49%] mb-4 !p-[5px] !px-[10px] !py-[10px]">
                Create
              </button>
              <button
                onClick={() => {
                  setIsCreateModelShow(false);
                }}
                className="btnBlue !bg-[#1A1919] rounded-[5px] mb-4 w-[49%] !p-[5px] !px-[10px] !py-[10px]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
