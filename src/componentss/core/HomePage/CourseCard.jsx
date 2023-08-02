import React from 'react'
import { HiUsers } from "react-icons/hi";
import { ImTree } from "react-icons/im";

const CourseCard = ({cardData,currentcard,setCurrentcard}) => {
  return (
    
        
        <div className={`${currentcard===cardData.heading ?" bg-white shadow-[10px_10px_0px_0_rgba(255,214,10,1)]":" bg-richblack-800"} cursor-pointer`} onClick={()=>{
          setCurrentcard(cardData.heading)
        }}>
        <div className='  flex flex-col px-6 pt-8  w-full   '>
          <div className={` text-xl font-semibold ${currentcard===cardData.heading ?" text-richblack-800":" text-richblack-5"} `}>{cardData?.heading}</div>
          <div className=' font-inter text-richblack-500 mt-3'>{cardData.description}</div>
            
        </div>
        <div className={`flex justify-between border-t-2 border-dashed p-4 mt-16 ${currentcard===cardData.heading?" border-richblack-50  text-blue-500":" border-richblack-600 text-richblack-300"}`}>
            <div className='flex items-center gap-1'><HiUsers/> {cardData.level}</div>
            <div className='flex items-center gap-1'><ImTree/> {cardData.lessionNumber}</div>
          </div>
          </div>
        
  
  )
}

export default CourseCard