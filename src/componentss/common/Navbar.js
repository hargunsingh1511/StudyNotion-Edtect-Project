import React, { useEffect, useState } from 'react'
import logo from '../../assets/Logo/Logo-Full-Light.png';
import { Link,  matchPath } from 'react-router-dom'
import {NavbarLinks} from "../../data/navbar-links"
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ACCOUNT_TYPE } from '../../utils/constants';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import ProfileDropDown from '../core/auth/ProfileDropDown';
import {categories} from "../../services/apis"
import { apiConnector } from '../../services/apiConnector';
import {AiFillDownCircle} from "react-icons/ai"


const Navbar = () => {
  const{token}=useSelector((state)=>state.auth);
  const {user}=useSelector((state)=>state.profile);
  const {totalItems}=useSelector((state)=>state.cart)
  const location=useLocation()
  const [ssublinks,setSublinks]=useState([]);

const fetchSubLinks=async()=>{
  try {
    const result= await apiConnector("GET",categories.CATEGORIES_API);
  
    setSublinks(result.data?.data) 

        
    
  } catch (error) {
    console.log(error.message);
  }
}

  useEffect(()=>{
    fetchSubLinks();
  },[])

  const matchRoute=(route)=>{
    
    return( 
      matchPath({ path:route},location.pathname)
    )
  }
  return (
    <div className=' h-14 flex items-center border-b-[1px] border-richblack-700 bg-richblack-900'>
        <div className=' w-11/12 flex mx-auto items-center justify-between max-w-maxContent'>
            <Link to="/">
                <img src={logo} alt='logo'/>
            </Link>
            {/* home links */}


            <nav>
          <ul className=' flex gap-x-6 text-richblack-200'>
              {
                NavbarLinks.map((ele,i)=>{
                  return(
                    <li key={i}>
                    {
                     ele.title==="Catalog"?(

                        <div className=' group flex items-center gap-1 cursor-pointer relative'>
                          <p>{ele.title}</p>
                          <AiFillDownCircle/>
                          <div className=' invisible absolute -left-[80%] top-[150%] flex flex-col rounded-md bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-200 group-hover:visible z-10  group-hover:opacity-100 lg:w-[300px] '>
                          <div className=' absolute     left-[35%] -top-[5%] bg-richblack-5 rotate-45 rounded-md transition-all duration-200 h-6 w-6 '></div>
                          {
                            
                            ssublinks.length?(
                              ssublinks.map((sublink,i)=>{
                               return(
                                <Link to={`catalog/${sublink.name.split(" ").join("-").toLowerCase()}`} key={i}>
                                  <p  className=' w-full hover:bg-richblack-100 z-100 my-1 py-1 pl-2 rounded-md'>{sublink.name}</p>
                                </Link>
                               )
                              })
                            ):(<div></div>)
                          }
                          </div>
                        </div>
                     ):
                     (<Link to={ele?.path}>
                      <p className={`${matchRoute(ele?.path)?" text-yellow-25":" text-richblack-100"}`}>{ele.title} </p>
                     </Link>)
                  }
                  </li>
                  )
                })
              }
          </ul>
            </nav>

            {/* login/signup/dashboard */}
              <div className=' flex gap-x-3 items-center text-richblack-200 '>
              
                {
                  user&& user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR&&(
                    <Link to="/dashboard/cart" className=' relative text-xl'>
                      <AiOutlineShoppingCart/>
                      {
                        totalItems>0 &&(
                          <span>
                            {totalItems}
                          </span>
                        )
                      }
                    </Link>
                    
                  )
                }
                {
                  token!==null && <ProfileDropDown/>
                }
                {
                  token=== null &&(
                    <Link to="/login">
                      <button className=' border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-200 rounded-md'>
                        Log in
                      </button>
                    </Link>
                  )
                }
                {
                  token=== null &&(
                    <Link to="/signup">
                      <button className=' border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md'>
                        Sign Up
                      </button>
                    </Link>
                  )
                }
                
              </div>

        </div>

       
    </div>
  )
}

export default Navbar