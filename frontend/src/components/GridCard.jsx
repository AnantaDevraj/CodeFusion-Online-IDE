import React, { useState } from 'react'
import PropTypes from 'prop-types'
import delImage from "../images/delete.png"
import img from "../images/code.png"

const GridCard = ({ item }) => {
  const [isDeleteModelShow, setIsDeleteModelShow] = useState(false)

  return (
    <>
      <div className="gridCard w-[270px] p-[10px] h-[180px] bg-[#141414] cursor-pointer hover:bg-[#202020] rounded-lg shadow-lg shadow-black/50">
        <img className="w-[90px]" src={img} alt="project icon" />
        <h3 className="text-[20px] w-[90%] line-clamp-1">{item.title}</h3>
        <div className="flex items-center justify-between">
          <p className="text-[14px] text-[gray]">
            Created on {new Date(item.date).toDateString()}
          </p>
          <img
            onClick={() => setIsDeleteModelShow(true)}
            className="w-[30px] cursor-pointer"
            src={delImage}
            alt="delete"
          />
        </div>
      </div>

      {isDeleteModelShow && (
        <div className="model fixed inset-0 bg-[rgba(0,0,0,0.1)] flex items-center justify-center">
          <div className="mainModel w-[25vw] h-[25vh] bg-[#141414] rounded-lg p-[20px]">
            <h3 className="text-3xl">
              Do you want to delete<br />
              this project?
            </h3>
            <div className="flex items-center w-full mt-5 gap-[10px]">
              <button className="p-[10px] rounded-lg bg-[#ff4343] text-white cursor-pointer w-1/2">
                Delete
              </button>
              <button
                onClick={() => setIsDeleteModelShow(false)}
                className="p-[10px] rounded-lg bg-[#1A1919] text-white cursor-pointer w-1/2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

GridCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(Date)
    ]).isRequired,
    // add more fields here if your item has them, e.g.:
    // id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
}

export default GridCard
