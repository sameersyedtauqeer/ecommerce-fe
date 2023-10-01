import React, { Fragment } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import slideimg1 from '../../assets/Images/cardslideimage1.png'
import slideimg2 from '../../assets/Images/cardSlideImage2.png'
import slideimg3 from '../../assets/Images/cardslideimage3.png'
import slideimg4 from '../../assets/Images/cardslideimage4.png'


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";
import { Pagination } from "swiper";

const WorkCardSlider = () => {
    const data = [
        {
            img: slideimg1,
            count: 1,
            title: "Order Your Pet's DNA ID Test",
            description: 'We offer a comprehensive noninvasive approach to pet wellness that starts with knowing your pets DNA Identification.'
        },
        {
            img: slideimg2,
            count: 2,
            title: "Swab your pet's cheek",
            description: "Once you receive your BioTech Pet Kit swab your pet & complete your pet’s registration via the PETACARE mobile app. "
        },
        {
            img: slideimg3,
            count: 3,
            title: "Ship Swab For Analysis",
            description: 'Our DNA lab will accurately & securely analyze your pets DNA sample & notify you via the PETACARE mobile app once your results are ready.'
        },
        {
            img: slideimg4,
            count: 4,
            title: "Review Your Pet's DNA Results",
            description: "You can review & track your pet’s results, create & Share a tailor-made wellness plan for your pet with our TailAVet veterinary video conferencing feature."
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
                    slidesPerView: 2,
                    spaceBetween: 10,
                    centeredSlides: false
                },
                // when window width is >= 768px
                768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                    centeredSlides: false
                },
                // when window width is >= 768px
                992: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                    centeredSlides: false
                },
            }} pagination={{ clickable: true }} modules={[Pagination]} className="mySwiper pb-5">
                {
                    data.map((val, index) => (
                        <Fragment >
                            <SwiperSlide key={index} className='h-100 pb-5'>
                                <div className="col-12 h-100">
                                    <Card className='work-card-style m-1 border-0 p-3 h-100'>
                                        <Card.Body className='p-0'>
                                            <div className="pb-2">
                                                <div className='position-relative'>
                                                    <Card.Img variant="top" src={val.img} />
                                                    <div className="position-absolute top-100 start-50 translate-middle round-count text-white ">
                                                        {val.count}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 align-self-end mt-4">
                                                <Card.Title className='text-start card-title-work text-capitalize'>{val.title}</Card.Title>
                                                <Card.Text className='fw-500imp text-start  pt-2 work-text s-14'>
                                                    {val?.description}
                                                </Card.Text>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </SwiperSlide>
                        </Fragment>
                    ))
                }
            </Swiper>
        </Fragment>)
}

export default WorkCardSlider