import React, { Fragment } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import pethouse from "../../assets/Images/pethouse.svg";
import noworries from "../../assets/Images/noworries.svg";
import peternal from "../../assets/Images/peternal.svg";
import bandapet from "../../assets/Images/bandapet.svg";



import "swiper/css";
import "swiper/css/pagination";
// import "./styles.css";
import { Pagination } from "swiper";


const ServiceCardSlider = () => {

    const data = [
        {
            img: bandapet,
            title: "Bandapet for your pet",
            type: 'business type',
            experience: '3 years experience',
            users: "1200 users",
            rating: '4.3%',
            description: 'Very good service.',
            description2: "Fast & cheap service"
        },
        {
            img: peternal,
            title: "Paternal pet care",
            type: 'business type',
            experience: '3 years experience',
            users: "1200 users",
            rating: '4.3%',
            description: 'Very good service.',
            description2: "Fast & cheap service"
        },
        {
            img: noworries,
            title: "No worries pet care",
            type: 'business type',
            experience: '3 years experience',
            users: "1200 users",
            rating: '4.3%',
            description: 'Very good service.',
            description2: "Fast & cheap service"
        },
        {
            img: pethouse,
            title: "Pethouse premium",
            type: 'business type',
            experience: '3 years experience',
            users: "1200 users",
            rating: '4.3%',
            description: 'Very good service.',
            description2: "Fast & cheap service"
        },
        {
            img: pethouse,
            title: "Pethouse premium",
            type: 'business type',
            experience: '3 years experience',
            users: "1200 users",
            rating: '4.3%',
            description: 'Very good service.',
            description2: "Fast & cheap service"
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
            }} pagination={{clickable: true}} modules={[Pagination]} className="mySwiper pb-3">
                {
                    data.map((val, index) => (
                        <Fragment >
                            <SwiperSlide key={index} className='h-100 pb-5'>
                                <div className='col-md-12 h-100  services'>

                                    <CardGroup className='h-100'>
                                        <Card className='br-15 border-0 card-shadow m-2 '>
                                            <div className='text-center pt-5 pb-1'>

                                                <Card.Img className='text-center card-shadow rounded-circle border' variant="top" src={val.img} />
                                            </div>
                                            <Card.Body>
                                                <Card.Title className=' services-card-title'>{val.title}</Card.Title>

                                                <Card.Text className='text-capitalize fw-500 s-14 pt-3' >
                                                    {val.type}
                                                </Card.Text>
                                                <Card.Text className='text-capitalize fw-500 s-14  bg-text'>
                                                    {val.experience}
                                                </Card.Text>

                                                <Card.Text className='text-capitalize fw-500 s-14 '>
                                                    {val.users}
                                                </Card.Text>

                                                <Card.Text className='star-color s-14 ' >
                                                    <span className='fw-500'>
                                                        {val.rating}</span>
                                                    <i className="fa-sharp fa-solid fa-star ms-1" />
                                                    <i className="fa-sharp fa-solid fa-star ms-1" />
                                                    <i className="fa-sharp fa-solid fa-star ms-1" />
                                                    <i className="fa-sharp fa-solid fa-star ms-1" />
                                                    <i className="fa-sharp fa-solid fa-star ms-1" />

                                                </Card.Text>

                                            </Card.Body>
                                            <Card.Footer className='s-17 bg-transparent p-4'>
                                                <p className='m-0 fw-500 s-0-8'>{val.description}</p>
                                                <p className='m-0 fw-500 s-0-8'>{val.description2}</p>

                                            </Card.Footer>
                                        </Card>
                                    </CardGroup>

                                </div>
                            </SwiperSlide>
                        </Fragment>
                    ))
                }
            </Swiper>
        </Fragment>)
}

export default ServiceCardSlider