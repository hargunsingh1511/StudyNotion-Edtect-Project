import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { Autoplay,FreeMode,Navigation,Pagination}  from 'swiper/modules'
import CourseCard from './CourseCard'
const CourseSlider = ({Courses}) => {
  return (
    <div>
        {
           
            Courses?.length?(
                <Swiper
                  slidesPerView={1}
                    loop={true}
                    spaceBetween={200}
                    pagination={true}
                    modules={[Autoplay,Pagination,Navigation]}
                    className="mySwiper"
                    autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    }}
                    navigation={true}
                    breakpoints={{
                        1024:{slidesPerView:3,}
                    }}> {
                    Courses.map((course,index)=>(
                        <SwiperSlide key={index}>
                            <CourseCard course={course} height={"h-[125px]"}/>
                        </SwiperSlide>
                    ))

                }</Swiper>
            ):(<div> No Course Found</div>)
        }
    </div>
  )
}

export default CourseSlider