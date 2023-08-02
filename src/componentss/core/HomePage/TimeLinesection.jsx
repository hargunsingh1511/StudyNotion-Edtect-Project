import React from 'react'
import logo1 from '../../../assets/TimeLineLogo/Logo1.svg'
import logo2 from '../../../assets/TimeLineLogo/Logo2.svg'
import logo3 from '../../../assets/TimeLineLogo/Logo3.svg'
import logo4 from '../../../assets/TimeLineLogo/Logo4.svg'
import timelineimage from "../../../assets/Images/TimelineImage.png"
const timeline=[
    {
        logo:logo1,
        heading:"Leadership",
        description:"Fully Commited to the success of company"

    },
    {
        logo:logo2,
        heading:"Responsibility",
        description:"Students will always be our top priority"

    },
    {
        logo:logo3,
        heading:"Flexibility",
        description:"The ability to switch is an important skills"

    },
    {
        logo:logo4,
        heading:"Solve the problem",
        description:"Code your way to a solution"
    }
]
const TimeLinesection = () => {
  return (
    <div>
       <div className=' flex gap-15 items-center '>
            <div className=' w-[45%] flex flex-col gap-5'>
                {
                    timeline.map((element,index)=>{
                        return(
                            <div className=' flex flex-row gap-6 'key={index}>
                                <div className=' w-[50px] h-[50px] bg-white flex items-center'>
                                    <img src={element.logo}></img>
                                </div>
                                <div>
                                    <h2 className=' font-semibold text-[18px]'>{element.heading}</h2>
                                    <p className=' text-base'>{element.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className=' relative shadow-blue-200'>
           <img src={timelineimage} className=' shadow-white object-cover h-fit'/>

           <div className=' absolute  bg-caribbeangreen-700 flex flex-row text-white uppercase py-10 left-[20%] translate-y-[-50%] '>
                <div className=' flex gap-5  items-center border-r border-caribbeangreen-300 px-7'>
                    <div className=' text-3xl font-bold'>
                        10
                    </div>
                    <div className=' text-sm text-caribbeangreen-300'>Years of 
                    <div>Experience</div></div>
                </div>
                <div className=' flex gap-5 items-center px-7'>
                <div className=' flex text-3xl font-bold'>
                        250
                    </div>
                    <div className=' text-sm text-caribbeangreen-300'>Types of <p>Courses</p></div>
                </div>

           </div>

       </div>
       </div> 
       
    </div>
  )
}

export default TimeLinesection