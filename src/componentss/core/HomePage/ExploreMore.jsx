import React, { useState } from 'react'
import {HomePageExplore} from "../../../data/homepage-explore";
import CourseCard from './CourseCard';
import HighlightText from './HighlightText';
const tabsName=[
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Carrer paths",
]
const ExploreMore = () => {
    const [currentTab,setCurrentTab]=useState(tabsName[0]);
    const [courses,setCourses]=useState(HomePageExplore[0].courses);
    const [currentcard,setcurrentcard]=useState(HomePageExplore[0].courses[0].heading);

    const setMyCards=(value)=>{
        setCurrentTab(value);
        const result=HomePageExplore.filter((course)=>
                course.tag===value
        )
        setCourses(result[0].courses);
        setcurrentcard(result[0].courses[0].heading)
    }

  return (
    <div>
        <div className=' text-4xl font-semibold text-center'>
            Unlock The <HighlightText text={"Power of Code"}/>
        </div>
        <p className=' text-center text-richblack-300 text-[16px] mt-3'>
            Learn to build  anything you can imagine
        </p>
        <div className='  flex flex-row items-center bg-richblack-800 border border-richblack-700 rounded-full mt-5 px-1 py-1'>
            {
                tabsName.map((element,index)=>{
                    return(
                        <div className={`text-[16px] flex flex-row items-center gap-2 ${currentTab===element 
                                        ? " bg-richblack-900 text-richblack-5 font-medium":" text-richblack-200"} 
                                        rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5 px-5 mx-2  py-2`}
                                         key={index} onClick={()=> setMyCards(element)}>
                            {element}
                        </div>
                    )
                })
            }
        </div>

        <div className=' lg:h-80'></div>

        <div className=' flex absolute -right-5 -bottom-16  flex-row gap-10  w-full'>
            {
                courses.map((element,index)=>{
                    return(
                        <div key={index}>
                            
                        <CourseCard key={index} cardData={element} currentcard={currentcard} setCurrentcard={setcurrentcard}/>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ExploreMore