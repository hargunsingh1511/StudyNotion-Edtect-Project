import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactStars from 'react-stars'
import {AiFillStar} from "react-icons/ai"
import {AiOutlineStar} from "react-icons/ai"
import {RiDeleteBin6Line} from "react-icons/ri"
import { removeFromCart } from '../../../../Slices/cartSlice'

const RenderCartCourses = () => {
    const {cart}=useSelector((state)=>state.cart)
    const dispatch=useDispatch();
  return (
    <div>
    {
        cart.map((course,index)=>{
            return(
                <div>
                    <div>
                        <img src={course?.thumbnail}/>
                    </div>
                    <div>
                        <p>{course?.couseName}</p>
                        <p>{course?.category?.name}</p>
                    
                        <div>
                        <span>4.8</span>
                        <ReactStars count={5}
                            size={20}
                            edit={false}
                            color1={'#ffd700'}
                            color2={"#e6e6e6"}
                            emptyIcon={AiOutlineStar}
                            fullIcon={AiFillStar}
                        />
                        <span>{course?.ratingAndReviews?.length} Ratings</span>
                        </div>
                    </div>
                    <div onClick={()=>dispatch(removeFromCart(course._id))}>
                        <button><RiDeleteBin6Line/>
                        <span>Remove</span></button>
                        <p>Rs.{course?.price}</p>
                    </div>
                </div>
            )
        })    
    }
    </div>
  )
}

export default RenderCartCourses