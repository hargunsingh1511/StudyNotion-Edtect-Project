import React, { useEffect, useState } from 'react'
import { buyCourse } from '../services/operations/studentFeaturesAPI'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchCourseDetails } from '../services/operations/courseDetailsAPI'
import GetAvgRating from '../utils/avgRating'
import Error from "./ErrorPage"
import ConfirmationModal from '../componentss/common/ConfirmationModal'
import RatingStars from '../componentss/common/RatingStars'
import { formatDate } from '../services/formatDate'
import CourseDetailsCard from '../componentss/core/course/CourseDetailsCard'

const CourseDetails = () => {
    const {user} = useSelector((state)=>state.profile);
    const {token} = useSelector((state)=>state.auth);
    const {loading} = useSelector((state) => state.profile);
    const {paymentLoading} = useSelector((state)=> state.course);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {courseId}  = useParams();

    const [courseData , setCourseData] = useState(null);
    const [confirmationModal, setConfirmationModal] = useState(null);
    useEffect(()=> {
        const getCourseFullDetails = async() => {
            try{
                const result = await fetchCourseDetails(courseId);
                console.log("Printing CourseData-> " , result);
                setCourseData(result);
            }
            catch(error) {
                console.log("Could not fetch coursse details");
            }
        }
        getCourseFullDetails();
        
    }, [courseId]);

    const [avgReviewCount, setAverageReviewCount] = useState(0);

    useEffect(()=> {
        const count = GetAvgRating(courseData?.courseDetaills.ratingAndReviews);
        setAverageReviewCount(count);
    },[courseData])

    const [totalNoOfLectures, setTotalNoOfLectures] = useState(0);
    useEffect(()=> {
        let lectures = 0;
        courseData?.courseDetaills?.courseContent?.forEach((sec) => {
            lectures += sec.subSection.length || 0
        })
        setTotalNoOfLectures(lectures);

    },[courseData]);


    const [isActive, setIsActive] = useState(Array(0));
    const handleActive = (id) => {
        setIsActive(
            !isActive.includes(id)
             ? isActive.concat(id)
             : isActive.filter((e)=> e != id)

        )
    }

    const handleBuyCourse = () => {
        
        if(token) {
            buyCourse(token, [courseId], user, navigate, dispatch);
            return;
        }
        setConfirmationModal({
            text1:"you are not Logged in",
            text2:"Please login to purchase the course",
            btn1Text:"Login",
            btn2Text:"Cancel",
            btn1Handler:() => navigate("/login"),
            btn2Handler:()=>setConfirmationModal(null),
        })

    }

    if(loading || !courseData) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    if(!courseData.success) {
        return (
            <div>
                <Error />
            </div>
        )
    }
    const {
        _id,
        courseName,
        courseDescription,
        thumbnail,
        price,
        whatYouWillLearn,
        courseContent,
        ratingAndReviews,
        instructor,
        studentsEnrolled,
        createdAt,
    } = courseData?.courseDetaills;

  return (
    <div  className=' text-white flex-col flex items-center'>
    <div className=' relative'>
        <p>{courseName}</p>
        <p>{courseDescription}</p>
        <div className=' flex'>
            <span>{avgReviewCount}</span>
            <RatingStars Review_Count={avgReviewCount} Star_Size={24}/>
            <span>{`(${ratingAndReviews.length} reviews)`}</span>
            <span>{`(${studentsEnrolled.length} Students Enrolled)`}</span>
        </div>
        <div>
            <p>Created By {`${instructor.firstName}`}</p>
        </div>        
        <div className='flex gap-x-3'>
            <p>
                Created At {formatDate(createdAt)}
            </p>
            <p>
                {" "} English
            </p>
        </div>
        
        <div>
            <CourseDetailsCard course={courseData?.courseDetaills} setConfirmationModal={setConfirmationModal} handleBuyCourse={handleBuyCourse}/>
        </div>
    </div>
    <div>
        <p>What you will Learn</p>
        <p>{whatYouWillLearn}</p>
    </div>
    <div>
        <div>
            <p>Course Content</p>
        </div>
        <div>
            <div>
                <span>{courseContent.length} section(s)</span> 
                <span>{totalNoOfLectures} Lecture(s) </span>
                <span>{courseData?.totalDuration} Total Length</span>
            </div>
            <div>
                <button onClick={setIsActive([])}>Collapse All Sections</button>
            </div>
         </div>
    </div>


        {
            confirmationModal && <ConfirmationModal modalData={confirmationModal}/>
        }
    </div>
    
  )
}

export default CourseDetails