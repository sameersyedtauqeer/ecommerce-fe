import React from 'react'
import slider1 from "../../assets/Images/slide1.png"
import slider2 from "../../assets/Images/slideimg2.png"
import slidimg3 from "../../assets/Images/slidimg3.jpg"
import googleplay from "../../assets/Images/Google Play Button.svg"
import appstore from "../../assets/Images/App Store Button.svg"
import qr from "../../assets/Images/banner2qr.svg"
import { Link } from "react-router-dom";

import tag from "../../assets/Images/Tags.svg"

import tag1 from "../../assets/Images/Tags_1.svg"







import 'swiper/css/autoplay'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import "./styles.css";
import { Pagination } from "swiper";


const HomeFirstBanner = () => {

    return (
        <>

            <section className='head-slider bg-slide '>
                <div className=" container-fluid px-0">
                    <div className="row g-0">

                        <Swiper
                            autoplay={{
                                delay: 5000,
                            }}
                            pagination={{ clickable: true }} modules={[Pagination, Autoplay]} className="mySwiper">

                            <SwiperSlide>
                                <div className="row g-0 banner1 p-5 pt-0 align-items-center">
                                    <div className="col-md-12 col-lg-9 col-xl-7 text-start ">

                                        <div className="col-md-8">

                                            <div className="row border border-2 rounded-pill border-danger overflow-hidden">
                                                <div className="col ">

                                                    <input type="text" className='form-control w-100 py-2 bg-transparent border-0' placeholder='Serach Item ' />
                                                </div>
                                                <div className="col-auto p-0">
                                                    <Link to={"/product"} className='btn btn-danger py-2 px-5 rounded-pill'> Go </Link>
                                                </div>
                                            </div>

                                        </div>






                                    </div>
                                </div>

                            </SwiperSlide>

                            {/* Banner 1 Start */}

                            {/* <SwiperSlide>
                                <div className="row g-0 banner1 p-5 pt-0 align-items-center">
                                    <div className="col-md-12 col-lg-9 col-xl-7 text-start ">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <h5 className=' text-uppercase pb-2 ban-heading-first fw-600 l-spacing-3 bg-text'>our products</h5>
                                                <h1 className='text-capitalize pb-2 slide-main fw-700 ban-heading s-32'>Noninvasive pet identification versus microchipping</h1>
                                                <p className=' slide-para text-capitalize s-16 fw-500 l-height'>Our Biotech pet kit combines your pet's DNA & our mobile app technology creating the ultimate noninvasive pet identification </p>
                                            </div>
                                        </div>


                                        <button className='btn-pill-header me-md-3 me-1 s-14 rounded-pill px-2 py-1 px-md-5 py-md-3 border-0 text-uppercase fw-500' type="">buy now</button>
                                        <button className='btn-pill-dark me-md-3 me-1 s-14 px-2 py-1 rounded-pill px-md-4 py-md-3 border-0 text-uppercase ' type="">Explore product</button>
                                        <Link to="/microchip-technology-vs-biotechPet">
                                            <button className='mt-md-2 btn-pill me-md-3 me-1 btn-fs px-2 py-1 rounded-pill px-md-5 py-md-3 border-0 text-uppercase fw-500 s-14'>Microchipping vs. biotech pet </button>
                                        </Link>


                                    </div>
                                </div>

                            </SwiperSlide> */}

                            {/* Banner 1 End */}


                            {/* Banner 2 Start */}


                            {/* <SwiperSlide>

                                <div className="row g-0 banner2 pt-3 p-5 p-md-5 m-0 align-items-center">
                                    <div className="col-md-12 col-lg-9 col-xl-7 col-12 text-start">
                                        <h1 className='text-capitalize slide-main ban-heading  fw-600'>our QR code geo tracking tags help return lost pets faster</h1>
                                    </div>

                                    <div className="row align-items-center pt-0">

                                        <div className="col-md-3 col-12 mb-3 mb-md-0">
                                            <div className="row">
                                                <div className="col-md-6 col-6" >
                                                    <img width="100%" src={tag} alt="" />
                                                </div>

                                                <div className="col-md-6 col-6">
                                                    <img width="100%" src={tag1} alt="" />
                                                </div>
                                            </div>

                                        </div>

                                        <div className="col-lg-4 col-md-9">
                                            <div className='text-start'>

                                                <Link to="/registration">
                                                    <button className='btn-pill me-md-3 me-1 s-14 rounded-pill head-sign-up border-0 text-uppercase' type="">sign up today</button>
                                                </Link>
                                                <br className=' d-xl-none' />

                                                <button href="" className='mt-md-2 btn-pill-dark me-md-3 me-1 s-14 rounded-pill head-sign-up border-0 text-uppercase'>Become a member </button>

                                                <br className='d-none d-xl-none' />
                                                <Link to="/microchip-technology-vs-biotechPet">
                                                    <button className='mt-md-2 btn-pill me-md-3 me-1 btn-fs px-2 py-1 rounded-pill px-md-5 py-md-3 border-0 text-uppercase fw-500 s-14'>Microchipping vs. biotech pet </button>
                                                </Link>

                                            </div>
                                        </div>
                                    </div>

                                </div>



                            </SwiperSlide> */}

                            {/* Banner 2 End */}


                            {/* Banner 3 Start */}

                            {/* <SwiperSlide>
                                <div className=''>

                                    <div className="row g-0  banner3 p-5 align-items-xl-center">
                                        <div className="col-md-12 col-lg-8 col-xl-6 col-12 text-start">
                                            <h3 className='text-capitalize pb-2 slide-main fw-600 l-height-1 ban-heading'>TailAVet about possible issues your pet maybe having
                                                using our veterinary video conferencing</h3>
                                            <div className=''>
                                                <Link to="/registration">
                                                    <button className='btn-pill me-md-3 me-1 btn-fs rounded-pill px-2 py-1 px-md-4 py-md-3 border-0 text-uppercase s-15' type="">sign up today</button>
                                                </Link>

                                                <button href="" className='btn-pill-dark me-md-3 me-1 btn-fs px-2 py-1 rounded-pill px-md-5 py-md-3 border-0 text-uppercase fw-500 s-14'>become a member</button>

                                                <br className='' />

                                                <Link to="/microchip-technology-vs-biotechPet">
                                                    <button className='mt-md-2 btn-pill me-md-3 me-1 btn-fs px-2 py-1 rounded-pill px-md-5 py-md-3 border-0 text-uppercase fw-500 s-14'>Microchipping vs. biotech pet </button>
                                                </Link>
                                            </div>

                                        </div>




                                    </div>
                                </div>

                            </SwiperSlide> */}

                            {/* Banner 3 End */}


                            {/* Banner 4 Start */}

                            {/* <SwiperSlide>

                                <div className='row g-0 banner4 pt-2 pb-2 pt-md-5 pb-md-5'>
                                    <div className="row align-items-md-center">
                                        <div className="col-md-12 col-lg-9 col-xl-7 p-5 col-12 text-start">
                                            <h1 className='text-capitalize p-0 pb-md-2 slide-main fw-600 ban-heading'>pet pampering at your finger tips and to your door step!</h1>
                                            <p className='pb-2 slide-para mb-0 mb-md-3 fw-500 s-17 text-muted'>We'll be your pet's best companion when you are not around.</p>
                                            <div className=''>

                                                <button className='btn-pill me-md-3 me-1 btn-fs rounded-pill px-2 py-1 px-md-4 py-md-3 border-0 text-uppercase fw-500 s-14' type="">schedule services</button>
                                                <button className='btn-pill-dark me-md-3 me-1 btn-fs px-2 py-1 rounded-pill px-md-5 py-md-3 border-0 text-uppercase fw-500 s-14' type=""> sign up today to schedule services</button>



                                                <Link to="/microchip-technology-vs-biotechPet">
                                                    <button className='mt-md-2 btn-pill me-md-3 me-1 btn-fs px-2 py-1 rounded-pill px-md-5 py-md-3 border-0 text-uppercase fw-500 s-14'>Microchipping vs. biotech pet </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                            </SwiperSlide> */}

                            {/* Banner 4 End */}


                            {/* Banner 5 Start */}

                            {/* <SwiperSlide>

                                <div className="row g-0 banner5 p-5 align-items-md-center">
                                    <div className="col-md-12 col-lg-7 col-xl-6 col-12 text-start">
                                        <h6 className=' text-uppercase pb-2 s-14 fw-600 l-spacing  bg-text'>download now</h6>
                                        <h2 className=' pb-2 fw-600 last-ban-head'>Available on Android and IOS</h2>
                                        <div className='mt-md-4'>

                                            <div className="row">
                                                <div className="col-6 col-md-3">
                                                    <img width='100%' className='' src={googleplay} alt="" />

                                                </div>

                                                <div className="col-6 col-md-3">
                                                    <img width='100%' src={appstore} alt="" />

                                                </div>
                                            </div>

                                        </div>

                                        <div className=' mt-md-5 mt-3'>

                                            <button className='btn-pill me-md-3 me-1  rounded-pill px-2 py-1 px-md-4 py-md-3 border-0 text-uppercase s-14' type="">download now</button>
                                            <br className='d-md-none' />

                                            <button href="" className='btn-pill-dark me-md-3 me-1 btn-fs px-2 py-1 rounded-pill px-md-5 py-md-3 border-0 text-uppercase fw-500 s-14'>Become a member </button>

                                            <Link to="/microchip-technology-vs-biotechPet">
                                                <button className='mt-md-2 btn-pill me-md-3 me-1 btn-fs px-2 py-1 rounded-pill px-md-5 py-md-3 border-0 text-uppercase fw-500 s-14'>Microchipping vs. biotech pet </button>
                                            </Link>
                                        </div>

                                    </div>

                                </div>

                            </SwiperSlide> */}

                            {/* Banner 5 Start */}


                        </Swiper>
                    </div>

                </div>

            </section>
        </>
    )
}

export default HomeFirstBanner