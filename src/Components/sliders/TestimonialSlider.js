import React , {Fragment ,useId} from "react";
import doground from "../../assets/Images/doground.png";


import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
// import "./styles.css";
import { Pagination } from "swiper";

import 'swiper/css/autoplay'
import { Autoplay } from 'swiper'

const TestimonialSlider = () => {

    const data = [
        {
            id:useId,
            img: doground,
            title: "John Smith",
            post: 'Manager',
            discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
        },
        {
            id:useId,
            img: doground,
            title: "John Smith",
            post: 'Manager',
            discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
        },
        {
            id:useId,
            img: doground,
            title: "John Smith",
            post: 'Manager',
            discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
        },
    

    ];

    return (
        <Fragment>
            <Swiper breakpoints={{
                // when window width is >= 480px
                300: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    centeredSlides: true
                },
                // when window width is >= 768px
                576: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    centeredSlides: false
                },
                // when window width is >= 768px
                768: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    centeredSlides: false
                },
                // when window width is >= 768px
                992: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    centeredSlides: false
                },
            }} pagination={{clickable: true}} modules={[Pagination]} className="mySwiper pb-5rem">
                {
                    data.map((val, index) => (
                        <Fragment >
                            <SwiperSlide key={index}>
                                <div className="col-12" >



                                    <div className='col-md-12'>
                                        <div className=' d-flex align-items-center pt-2 pb-2'>

                                            <div className="media">
                                                <img className="me-3 " width='64px' src={val.img} alt="Generic placeholder image" />

                                            </div>
                                            <div className="media-body">
                                                <h4 className="mt-0  p-0 m-0 text-capitalize fw-600 s-19 bg-text">{val.title}</h4>
                                                <p className="mt-0 s-15 p-0 m-0 text-capitalize fw-500 sub-heading text-start">{val.post}</p>
                                            </div>



                                        </div>
                                        <div className='pt-4 s-16 testi-text fw-500'>
                                            <p className='l-height text-start'>{val.discription}</p>
                                        </div>
                                    </div>

                                    
                                </div>
                            </SwiperSlide>
                        </Fragment>
                    ))
                }
            </Swiper>
        </Fragment>)
}

export default TestimonialSlider