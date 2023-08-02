import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import RatingStars from '../../common/RatingStars';
import GetAvgRating from '../../../utils/avgRating';
const CourseCard = ({course,height}) => {

    const[avgReviewCount,setAvgReviewCount]=useState(0);

    useEffect(()=>{
        const count=GetAvgRating(course.ratingAndReviews)
        setAvgReviewCount(count)
    },[course])

  return (
    <div>
        <Link to={`/courses/${course._id}`}>
            <div>
                <div>
                    <img src={course?.thumbnail} alt='course' className={`${height} w-full rounded-xl object-cover`}/>
                </div>
                <div>
                    <p>{course?.courseName}</p>
                    <p>{course?.instructor?.firstName.toUpperCase()} {course?.instructor?.lastName.toUpperCase()}</p>
                    <div>
                        <span>{avgReviewCount||0}</span>
                        <RatingStars Review_Count={avgReviewCount}/>
                        <span>{course?.ratingAndReviews?.length} Ratings</span>
                    </div>
                    <p>{course?.price}</p>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default CourseCard