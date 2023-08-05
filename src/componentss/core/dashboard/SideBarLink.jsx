import React from 'react'
import * as Icons from "react-icons/vsc"
import {AiOutlineShoppingCart} from "react-icons/ai"
import { useDispatch } from 'react-redux';
import { NavLink, matchPath, useLocation } from 'react-router-dom';
const SideBarLink = ({link,iconName}) => {
    const Icon=Icons[iconName];
    const location =useLocation();
    const dispatch=useDispatch();

    const matchRoute=(route)=>{
        return matchPath({path:route}, location.pathname)
    }
  return (
    <NavLink
    to={link.path}
    className={ `relative px-8 py-2 text-sm font-medium ${matchRoute(link.path) ? "bg-yellow-700 text-yellow-50" :"bg-opacity-0"}`}
    >

        <span className={`absolute opacity-0 left-0 top-0 h-full w-[0.2rem] bg-yellow-50
        ${matchRoute(link.path) ? "opacity-100 visible": "opactity-0"}`}>

        </span>

        <div className='flex item-center gap-x-2'>

            <Icon className="text-lg" />
            <span>{link.name}</span>
        </div>
    </NavLink>
  )
  }
export default SideBarLink