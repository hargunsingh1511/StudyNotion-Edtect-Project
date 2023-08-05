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
import { AiOutlineMenu } from "react-icons/ai"
import { BsChevronDown } from "react-icons/bs"


const Navbar = () => {
  const{token}=useSelector((state)=>state.auth);
  const {user}=useSelector((state)=>state.profile);
  const {totalItems}=useSelector((state)=>state.cart)
  const location=useLocation()
  const [loading, setLoading] = useState(false)
  const [ssublinks,setSublinks]=useState([]);

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      try {
        const res = await apiConnector("GET", categories.CATEGORIES_API)
        setSublinks(res.data.data)
      } catch (error) {
        console.log("Could not fetch Categories.", error)
      }
      setLoading(false)
    })()
  }, [])
  const matchRoute=(route)=>{
    
    return( 
      matchPath({ path:route},location.pathname)
    )
  }
  return (
    // <div className=' h-14 flex items-center border-b-[1px] border-richblack-700 bg-richblack-900'>
    //     <div className=' w-11/12 flex mx-auto items-center justify-between max-w-maxContent'>
    //         <Link to="/">
    //             <img src={logo} alt='logo'/>
    //         </Link>
    //         {/* home links */}


    //         <nav>
    //       <ul className=' flex gap-x-6 text-richblack-200'>
    //           {
    //             NavbarLinks.map((ele,i)=>{
    //               return(
    //                 <li key={i}>
    //                 {
    //                  ele.title==="Catalog"?(

    //                     <div className=' group flex items-center gap-1 cursor-pointer relative'>
    //                       <p>{ele.title}</p>
    //                       <AiFillDownCircle/>
    //                       <div className=' invisible absolute -left-[80%] top-[150%] flex flex-col rounded-md bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-200 group-hover:visible z-10  group-hover:opacity-100 lg:w-[300px] '>
    //                       <div className=' absolute     left-[35%] -top-[5%] bg-richblack-5 rotate-45 rounded-md transition-all duration-200 h-6 w-6 '></div>
    //                       {
                            
    //                         ssublinks.length?(
    //                           ssublinks.map((sublink,i)=>{
    //                            return(
    //                             <Link to={`catalog/${sublink.name.split(" ").join("-").toLowerCase()}`} key={i}>
    //                               <p  className=' w-full hover:bg-richblack-100 z-100 my-1 py-1 pl-2 rounded-md'>{sublink.name}</p>
    //                             </Link>
    //                            )
    //                           })
    //                         ):(<div></div>)
    //                       }
    //                       </div>
    //                     </div>
    //                  ):
    //                  (<Link to={ele?.path}>
    //                   <p className={`${matchRoute(ele?.path)?" text-yellow-25":" text-richblack-100"}`}>{ele.title} </p>
    //                  </Link>)
    //               }
    //               </li>
    //               )
    //             })
    //           }
    //       </ul>
    //         </nav>

    //         {/* login/signup/dashboard */}
    //           <div className=' flex gap-x-3 items-center text-richblack-200 '>
              
    //             {
    //               user&& user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR&&(
    //                 <Link to="/dashboard/cart" className=' relative text-2xl'>
    //                   <AiOutlineShoppingCart/>
    //                   {
    //                     totalItems>0 &&(
    //                       <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
    //               {totalItems}
    //             </span>
    //                     )
    //                   }
    //                 </Link>
                    
    //               )
    //             }
    //             {
    //               token!==null && <ProfileDropDown/>
    //             }
    //             {
    //               token=== null &&(
    //                 <Link to="/login">
    //                   <button className=' border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-200 rounded-md'>
    //                     Log in
    //                   </button>
    //                 </Link>
    //               )
    //             }
    //             {
    //               token=== null &&(
    //                 <Link to="/signup">
    //                   <button className=' border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md'>
    //                     Sign Up
    //                   </button>
    //                 </Link>
    //               )
    //             }
                
    //           </div>

    //     </div>

       
    // </div>
    <div
      className={`flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700 ${
        location.pathname !== "/" ? "bg-richblack-800" : ""
      } transition-all duration-200`}
    >
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
        </Link>
        {/* Navigation links */}
        <nav className="hidden md:block">
          <ul className="flex gap-x-6 text-richblack-25">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  <>
                    <div
                      className={`group relative flex cursor-pointer items-center gap-1 ${
                        matchRoute("/catalog/:catalogName")
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      }`}
                    >
                      <p>{link.title}</p>
                      <BsChevronDown />
                      <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                        <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
                        {loading ? (
                          <p className="text-center">Loading...</p>
                        ) : ssublinks.length ? (
                          <>
                            {ssublinks
                              
                              ?.map((subLink, i) => (
                                <Link
                                  to={`/catalog/${subLink.name
                                    .split(" ")
                                    .join("-")
                                    .toLowerCase()}`}
                                  className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                                  key={i}
                                >
                                  <p>{subLink.name}</p>
                                </Link>
                              ))}
                          </>
                        ) : (
                          <p className="text-center">No Courses Found</p>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link to={link?.path}>
                    <p
                      className={`${
                        matchRoute(link?.path)
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      }`}
                    >
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        {/* Login / Signup / Dashboard */}
        <div className="hidden items-center gap-x-4 md:flex">
          {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
            <Link to="/dashboard/cart" className="relative">
              <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
              {totalItems > 0 && (
                <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
                  {totalItems}
                </span>
              )}
            </Link>
          )}
          {token === null && (
            <Link to="/login">
              <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                Log in
              </button>
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
              <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                Sign up
              </button>
            </Link>
          )}
          {token !== null && <ProfileDropDown />}
        </div>
        <button className="mr-4 md:hidden">
          <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
        </button>
      </div>
    </div>
  )
}

export default Navbar