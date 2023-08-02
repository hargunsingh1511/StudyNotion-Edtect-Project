import React from 'react'
import Footer from '../componentss/common/Footer'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import {apiConnector} from '../services/apiConnector'
import {categories} from "../services/apis"
import {getCatalogaPageData} from "../services/operations/pageAndCommponentData"
import CourseCard from '../componentss/core/catalog/CourseCard'
import CourseSlider from "../componentss/core/catalog/CourseSlider"
const Catalog = () => {

  const {catalogName}=useParams()
  const [catalogData,setCatalogData]=useState(null)
  const [categoryId,setCategoryId]=useState("")

  useEffect(()=>{
    const getCategorDetails=async()=>{
      try {
        const res=await getCatalogaPageData(categoryId)
        setCatalogData(res)
      } catch (error) {
        console.log(error)
      }
    }
    if(categoryId){
      getCategorDetails()
    }
  },[categoryId])

  useEffect(()=>{
    const getcategories=async()=>{
      const res=await apiConnector("Get",categories.CATEGORIES_API);
      const category_id=res?.data?.data?.filter((ct)=> ct.name.split(" ").join("-").toLowerCase()===catalogName)[0]._id
      setCategoryId(category_id)
    }
    getcategories()
  },[catalogName])

  
  return (
    <div className=' text-richblack-5'>
      <div >
      <p>{`Home / Catalog /`} <span className=' text-yellow-50'>{catalogData?.data?.selectedCategory?.name}</span> </p>
      <p>{catalogData?.data?.selectedCategory?.name}</p>
      <p>{catalogData?.data?.selectedCategory?.description}</p>
    </div>

    <div>
    {/* Section1 */}
      <div>
        <div>Courses To get you started </div>
        <div className=' flex'>
        <p>Most Popular</p>
        <p>New</p>
        </div>
        <div>
          <CourseSlider Courses={catalogData?.data?.selectedCategory?.course}/>
        </div>
      </div>
      
    

        {/* section2  */}
        <div>
          <p>Top Courses in {catalogData?.data?.selectedCategory?.name} </p>
          <div>
          <CourseSlider Courses={catalogData?.data?.differentCategory?.course}/>
          </div>
        </div>

        {/* section3 */}
        <div>
          <p>Frequently Bought Together</p>
          <div className=' py-8'> 
            <div className=' grid grid-cols-1 lg:grid-cols-2'>
              {
                catalogData?.data?.mostSellingCourses?.slice(0,4)
                .map((course,index)=>(
                  <CourseCard course={course} key={index} height={" h-[400px]"}/>
                ))
              }
            </div>
          </div>
        </div>
        </div>

    <Footer/>
    </div>
  )
}

export default Catalog