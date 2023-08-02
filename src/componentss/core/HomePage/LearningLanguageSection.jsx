import React from 'react'
import HighlightText from './HighlightText'
import knowYourProgress from "../../../assets/Images/Know_your_progress.png"
import compareWithOthers from "../../../assets/Images/Compare_with_others.png"
import  PlanYourLessons from "../../../assets/Images/Plan_your_lessons.png"
import CtaButton from './Button'

const LearningLanguageSection = () => {
  return (
    <div className=' mt-[100px]'>
        <div className=' flex flex-col  gap-5 items-center'>
            <div className=' text-4xl font-semibold text-center'>
                your Swiss knife for
                <HighlightText text={" learning any language"}/>
            </div>

            <div className=' text-center text-richblack-600 mx-auto text-base font-medium width-[70%]'>
            Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, <p>progress tracking, custom schedule and more.</p>
            </div>

            <div className=' flex  items-center justify-center mt-5 '>
                <img src={knowYourProgress} alt='Know Your Progress' className=' object-contain -mr-32 '/>
                <img src={compareWithOthers} alt='Know Your Progress' className=' object-contain '/>
                <img src={PlanYourLessons} alt='Know Your Progress' className=' object-contain -ml-36'/>
            </div>

            <div  className=" w-fit mb-[90px] ">
                <CtaButton active={true} linkto={"/signup"} shad={false}>
                    <div>Learn More</div>
                </CtaButton>
            </div>

        </div>
    </div>
  )
}

export default LearningLanguageSection