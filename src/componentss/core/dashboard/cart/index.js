import React from 'react'
import { useSelector } from 'react-redux'
import RenderCartCourses from './RenderCartCourses';
import RenderTotalAmount from './RenderTotalAmount';
const Cart = () => {
  const{total,totalItems}=useSelector((state)=>state.cart);

  return (
    <div className=' text-richblack-5'>
        <h1>Your Cart</h1>
        <p>{totalItems} Courses in Cart</p>
        {
          total>0?(<div>
            <RenderCartCourses/>
            <RenderTotalAmount/>
          </div>):
          (<div>Your Cart is Empty</div>)
        }
    </div>
  )
}

export default Cart