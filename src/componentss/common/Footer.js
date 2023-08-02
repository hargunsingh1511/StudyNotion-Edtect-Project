import React from 'react';
import { FooterLink2 } from '../../data/footer-links';
import { Link } from 'react-router-dom';
// Images
import Logo from "../../assets/Logo/Logo-Full-Light.png";

// Icons
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";

const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];
const Resources = [
  "Articles",
  "Blog",
  "Chart Sheet",
  "Code challenges",
  "Docs",
  "Projects",
  "Videos",
  "Workspaces",
];
const Plans = ["Paid memberships", "For students", "Business solutions"];
const Community = ["Forums", "Chapters", "Events"];

const Footer = () => {
  return (
    <div className='  bg-richblack-800'>
        <div className=' w-11/12 mx-auto py-14 border-b border-richblack-700'>
            <div className=' flex'>
                    {/* Section 1 */}
            <div className=' border-r border-richblack-700 w-[50%]'>
                <div className=' flex gap-16 items-start'>
                <div className=' flex flex-col'>
                    <img src={Logo}/>
                    <p className=' text-richblack-100 text-[16px] mt-2'>Company</p>
                    <div className=' flex flex-col pt-1 text-richblack-400 hover:text-richblack-100 transition-all duration-200'>
                        <Link to={"/about"}>About</Link>
                        <Link to={"/carrers"}>Carrers</Link>
                        <Link to={"/affliates"}>Affliates</Link>
                        <div className=' flex gap-3 text-lg mt-3'>
                            <a href="https://www.facebook.com/"><FaFacebook/></a>
                            <a href="https://twitter.com/?lang=en"><FaTwitter /></a>
                            <a href="https://www.google.com/"><FaGoogle/></a>
                            <a href="https://www.youtube.com/"><FaYoutube/></a>

                        </div>
                    </div>
                </div>


                <div className=' flex flex-col '>
                <p className='text-lg text-richblack-100 pb-1'>Resources</p>
                {
                    Resources.map((element,index)=>{
                        return(
                            <div className=' text-richblack-400 hover:text-richblack-100 transition-all duration-200' key={index}>
                            <Link to={`/${element.toLowerCase()}`}>{element}</Link>
                            </div>
                        )
                    })
                }

                <div className=' flex flex-col mt-7'>
                    <p className=' text-richblack-100 text-lg pb-1'>Support</p>
                    <div className=' text-richblack-400 hover:text-richblack-100 transition-all duration-200'> <Link to={"/helpcenter"}>Help Center</Link></div>
                </div>
                </div>


                <div className=' flex flex-col  gap-7'>
                    <div>
                        <p className=' text-richblack-100'>Plans</p>
                        <div className=' text-richblack-400 mt-1 hover:text-richblack-100 transition-all duration-200'>
                            {
                                Plans.map((element,i)=>{
                                    return(
                                    <div key={i}>
                                    <Link to={element}>{element}</Link>
                                    </div>)
                                })
                            }
                        </div>
                    </div>
                    <div>
                        <p className=' text-richblack-100 mb-1 text-lg'>Community</p>
                        <div className=' text-richblack-400 hover:text-richblack-100 transition-all duration-200'>
                            {
                                Community.map((ele,i)=>{
                                    return(
                                        <div key={i}>
                                        <Link to={ele}>{ele}</Link>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                </div>

            </div>
                    {/* section-2 */}
            <div className='flex width-[50%]  gap-16  pl-14 '>
                {
                    FooterLink2.map((element,index)=>{
                        return (
                            <div className=' text-richblack-100 ' key={index}>
                        <p className='text-lg'>  {element.title}</p> 
                            <div className=' flex flex-col pt-3 '>
                                {
                                    element.links.map((link,i)=>{
                                        return(
                                            <div className=' text-richblack-400 hover:text-richblack-100 transition-all duration-200  pt-2' key={i} >
                                                <Link to={link.link}>
                                                    {link.title}
                                                </Link>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            </div>
                ) })
                }
            </div>
            </div>
            <hr className=' text-richblack-700 mt-8'></hr>
            <div className=' flex w-full justify-between'>
                <div className=' flex text-lg text-richblack-400 hover:text-richblack-100 transition-all duration-200 mt-7  '>
                    {
                        BottomFooter.map((ele,i)=>{
                            return(
                                <div className={`${BottomFooter.length-1===i?"":" border-r border-richblack-700 "} px-4 `}key={i}>
                                    <Link to={ele}>{ele}</Link>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='text-lg text-richblack-400 hover:text-richblack-100 transition-all duration-200 mt-7'>Made With ❤️ Hargun Singh © 2023 Studynotion</div>
            </div>
      
    </div>
    </div>
  )
}

export default Footer