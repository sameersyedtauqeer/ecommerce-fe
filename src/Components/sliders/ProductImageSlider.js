import React, { Fragment, useEffect, useId, useState } from 'react'

import slide1 from "../../assets/Images/slide1.png"


import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
// import "./styles.css";
import { Pagination } from "swiper";

const ProductImageSlider = (props) => {
    // const [data, setData] = useState

    // console.log("props ======== ", props?.data)
    // useEffect(() => {

    // }, [])
    // const data = [
    //     {
    //         id: 1,
    //         img: slide1,

    //     },
    //     {
    //         id: 2,
    //         img: slide1,


    //     },
    //     {
    //         id: 3,
    //         img: slide1,


    //     },
    //     {
    //         id: 4,
    //         img: slide1,


    //     },


    // ];
    return (
        <Fragment>
            <Swiper breakpoints={{
                // when window width is >= 480px
                300: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                    centeredSlides: true
                },
                // when window width is >= 768px
                576: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                    centeredSlides: false
                },
                // when window width is >= 768px
                768: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                    centeredSlides: false
                },
                // when window width is >= 768px
                992: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                    centeredSlides: false
                },
            }} pagination={{ clickable: true }} modules={[Pagination]} className="mySwiper pb-5rem">
                <SwiperSlide >
                    <div className='col-md-12 '>

                        <div onClick={() => props.setImage(props?.coverImage)} className='text-center card h-100 card-shadow border'>
                            <div className='text-center p-2'>
                                <img width='100%' height="86px" style={{objectFit:'cover'}} src={`http://localhost:5000/uploads/${props?.coverImage}`} alt="" />

                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                {props?.data.map((images, index) => (
                    <Fragment >

                        <SwiperSlide key={index} >
                            <div className='col-md-12 '>

                                <div onClick={() => props.setImage(images)} className='text-center card h-100 card-shadow border'>
                                    <div className='text-center p-2'>
                                        <img width="100%" height="86px" style={{objectFit:'cover'}} src={`http://localhost:5000/uploads/${images}`} alt="" />

                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>
                    </Fragment>
                ))
                }
            </Swiper>
        </Fragment>
    )
}

export default ProductImageSlider