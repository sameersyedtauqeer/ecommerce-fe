import React, { Fragment ,useId } from 'react'
import crdimg1 from "../../assets/Images/card2img1.png"
import crdimg2 from "../../assets/Images/card2img2.png"
import crdimg3 from "../../assets/Images/card2img3.png"
import crdimg4 from "../../assets/Images/card2img4.png"
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
// import "./styles.css";
import { Pagination } from "swiper";

import 'swiper/css/autoplay'
import { Autoplay } from 'swiper'

const OffersCardSlider = () => {

    const data = [
        {
            id:useId,
            img: crdimg1,
            title: "Pet DNA Identification Testing",
            description: "DNA is a biomedical standard that cannot be changed or altered and provides proof positive identification of your pet alive or deceased. Knowing your pet's genomic traits can assits you with the preventive care in early detection",
            footer: "more info"
        },
        {
            id:useId,
            img: crdimg2,
            title: "TailAVet-Vet video conferencing",
            description: "PetACare Parenting software was developed to assist pet parents within managed communities. The software has feature to assist with registration fo your pet with any apartment or condo by storing vital documents needed to pass",
            footer: "more info"

        },
        {
            id:useId,
            img: crdimg3,
            title: "Pet concierge Services",
            description: "PetACare provides a 2 types of pet Concierge software platforms for pet owners and Property manager. Our pet concierge system offers an array of pet services including: Veterany, Grooming, Pharmacy, Dog Walking, Day Care",
            footer: "more info"

        },
        {
            id:useId,
            img: crdimg4,
            title: "Pet wellness plan",
            description: "PetACare wellness plans are affordable annual programs that provides affordable services that focus on proactive pet health care. Our plans provide pet health care. Our plans provide pet health care information that you and your veterinarian can track and trail services",
            footer: "more info"

        },
        {
            id:useId,
            img: crdimg4,
            title: "QR Tag GEO Lost & Found Tracking",
            description: 'PetACare Parenting software was developed to assist pet parents within managed communities. The software has feature to assist with registration fo your pet with any apartment or condo by storing vital documents needed to pass',
            footer: "more info"

        },
        {
            id:useId,
            img: crdimg4,
            title: "Pet Passport",
            description: 'With our Pet Passport feature you can Upload, Store & Share vital documents to help keep your pet in compliance.',
            footer: "more info"

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
            }} pagination={{ clickable: true }} modules={[Pagination]} className="mySwiper ">
                {
                    data.map((val, index) => (

                        <Fragment >
                            <SwiperSlide key={index} className='h-100 pb-5'>
                                <div className='col-12 h-100 pb-5'>
                                    <div className='text-center card br-15 card-shadow m-2 border-0 h-100' >
                                        <div className="row justify-content-center">
                                            <div className="col-auto p-0">
                                                <div className='text-center pt-5'>
                                                    <img width='100%' src={val.img} alt="" />
                                                </div>
                                            </div>

                                        </div>

                                        <div className="card-body overflow-hidden position-relative">
                                            <h5 className="card-title s-16 fw-600 text-black" >{val.title}</h5>
                                            <p className="text-dark pt-4 s-14 fw-500 l-height" > {val.description} </p>

                                            <div className=''>

                                                <Link to='/services' className='mb-3 mt-3 position-absolute bottom-0 start-50 translate-middle-x text-center heading-color fw-700 text-uppercase bor-bottom s-14'>
                                                    {val.footer}</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>


                            {/* <SwiperSlide className='h-100 pb-5'>
                                <div className="col-12 h-100">
                                    <Card className='work-card-style m-1 border-0 p-3 h-100'>
                                        <Card.Body className='p-0'>
                                            <div className="pb-2">
                                                <div className='position-relative'>
                                                    <Card.Img variant="top" src={val.img} />
                                                    <div className="position-absolute top-100 start-50 translate-middle bg-red text-white rounded-circle px-2">
                                                        {val.count}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 align-self-end mt-4">
                                                <Card.Title className='text-start card-title-work text-capitalize '>{val.title}</Card.Title>
                                                <Card.Text className='fw-500imp text-start s-16 pt-2'>
                                                    {val?.description}
                                                </Card.Text>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </SwiperSlide> */}
                        </Fragment>
                    ))
                }
            </Swiper>
        </Fragment>
    )
}

export default OffersCardSlider