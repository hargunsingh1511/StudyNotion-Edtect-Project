import React from 'react'
import CtaButton from './Button'

import {FaArrowRight} from "react-icons/fa"
import { TypeAnimation } from 'react-type-animation'

const CodeBlocks = ({position,heading,subHeading,ctabtn1,ctabtn2,codeblock,backgroundGradient,codecolor}) => {
  return (
    <div className={`flex ${position ?"flex-row":" flex-row-reverse"} my-20 justify-between gap-[98px]`}>
        <div className=' w-[50%] flex-flex-col gap-8'>
        {heading}
            <div className=' text-richblack-300 font-bold'>
                {subHeading}
            </div>
        <div className=' flex gap-7 mt-7'>
            <CtaButton active={ctabtn1.active} linkto={ctabtn1.linkto} shad={true}>
                <div className=' flex gap-2 items-center'>
                    {ctabtn1.btnText}
                    {<FaArrowRight />}
                </div>
            </CtaButton>
            
            <CtaButton active={ctabtn2.active} linkto={ctabtn2.linkto} shad={true}>
                <div className=' flex gap-2 items-center'>
                    {ctabtn2.btnText}
                </div>
            </CtaButton>
        </div>
        </div>

        {/* Section 2 */}
        <div className='flex w-[50%] text-[10px] border border-richblack-400  text-lg'>
            <div className=' text-[14px]'>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
                <p>10</p>
                <p>11</p>
            </div>
            
        <div className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codecolor} pr-2 text-[14px]`}>
        <TypeAnimation
         sequence={[codeblock,10000,""] }
         repeat={Infinity}
         omitDeletionAnimation={false}
         style={{
            whiteSpace:"pre-line",
            display:"block"
         }}
         /> 
            </div>
        </div>
    </div>
  )
}

export default CodeBlocks