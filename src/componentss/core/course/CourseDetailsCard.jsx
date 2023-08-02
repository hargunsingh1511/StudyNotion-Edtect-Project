import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import copy from 'copy-to-clipboard'
import {ACCOUNT_TYPE} from "../../../utils/constants"
import { addToCart } from '../../../Slices/cartSlice'
const CourseDetailsCard = ({course,setConfirmationModal,handleBuyCourse}) => {
    const {user}=useSelector((state)=>state.profile)
    const {token}=useSelector((state)=>state.auth)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const handleAddToCart=()=>{
        if(user&& user?.accountType===ACCOUNT_TYPE.INSTRUCTOR){
            toast.error("You are an Insructor,you can not buy a course")
            return
        }
        if(token){
            console.log("dispatching add to cart")
            dispatch(addToCart(course));
            return;
        }
        setConfirmationModal({
            text1:"you are not logged in",
            text2:"Please login to add to cart",
            btn1Text:"login",
            btn2Text:"cancel",
            btn1Handler:()=>navigate("/login"),
            btn2Handler: ()=> setConfirmationModal(null),
        })
    }

    const handleShare=()=>{
        copy(window.location.href)
        toast.success("Link Copied To Clickboard")
    }
  return (
    <div>
        <img src={course?.thumbnail} alt='thumbnail' className='max-h-[300px] min-h-[180px] w-[400px] rounded-xl'/>
        <div>Rs. {course?.price}</div>
        <div>
            <button onClick={ user && course?.studentsEnrolled.includes(user?._id)? ()=>{navigate("/dashboard/enrolled-courses")}:handleBuyCourse }>
                {
                    user && course?.studentsEnrolled.includes(user?._id)? "Go To Course":"Buy Now"
                }
            </button>
            {
                (!course?.studentsEnrolled.includes(user?._id)) &&(
                    <button onClick={handleAddToCart}>
                        Add To Cart
                    </button>
                )
            }
        </div>
        <div>
            <p> 30-day Money-Back Gurantee</p>
            <p>This course Includes: </p>
            <div className=' flex flex-col gap-y-3'>
                {
                    course?.instructions.map((item,index)=>(
                        <p key={index} className=' flex gap-2'>
                            <span>{item}</span>
                        </p>
                    ))
                }
            </div>
            <div>
                <button
                className='mx-auto flex items-center gap-2 p-6 text-yellow-50'
                onClick={handleShare}
                >
                    Share
                </button>
            </div>
        </div>

    </div>
  )
}

export default CourseDetailsCard