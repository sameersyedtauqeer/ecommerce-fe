import React from 'react'
import { Outlet, Link } from "react-router-dom";
import dogdressing from "../../assets/Images/dogdressing.png";
import doground from "../../assets/Images/doground.png";
import redbg from "../../assets/Images/redbg.svg";
import bggirl from "../../assets/Images/bggirl.svg";




const PetWellnessScreen = () => {
    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-3 ">
                        <Link to="#">

                            <button type="" className='btn-pill rounded-pill text-capitalize px-md-4 py-md-3 border-0 w-100'> dog wellness plan
                                {/* <i className="fa-sharp fa-solid fa-greater-than ms-5"></i> */}
                            </button>
                        </Link>

                        <Link to="#">

                            <button type="" className='mt-3 btn-pill rounded-pill text-capitalize px-md-4 py-md-3 border-0 w-100'> dog wellness plan
                                {/* <i className="fa-sharp fa-solid fa-greater-than ms-5"></i> */}
                            </button>
                        </Link>
                        <Link to="#">

                            <button type="" className='mt-3 btn-pill rounded-pill text-capitalize px-md-4 py-md-3 border-0 w-100'> dog wellness plan
                                {/* <i className="fa-sharp fa-solid fa-greater-than ms-5"></i> */}
                            </button>
                        </Link>
                        <Link to="#">

                            <button type="" className='mt-3 btn-pill rounded-pill text-capitalize px-md-4 py-md-3 border-0 w-100'> dog wellness plan
                                {/* <i className="fa-sharp fa-solid fa-greater-than ms-5"></i> */}
                            </button>
                        </Link>

                    </div>

                    <div className='col-md-9 p-5 pt-0'>
                        <h1 className='text-capitalize fw-600'>dog wellness plan</h1>
                        <h3 className='bg-text text-capitalize fw-600'>(6 months or older)</h3>

                        <p className='l-height fs-para s-18 fw-500 '>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,

                        </p>

                        <h4 className='bg-text text-capitalize fw-600'>the importance of pet wellness plan</h4>

                        <p className='l-height fs-para s-18 fw-500'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,

                        </p>

                        <h4 className=' fw-600'>Speak with an PWP representative directly at
                            <span className='bg-text'> 210.569.214.1</span> or</h4>

                        <button type="" className='btn-pill rounded-pill border-0 px-md-5 py-md-3 mt-3'>Enroll Now</button>

                    </div>
                </div>

                <div className="row ">
                    <div className="col-md-7">
                        <h2 className='text-capitalize fw-600'>Build the best plan for your dog</h2>

                        <p className=' fs-para s-17 fw-500'>Every dog is unique, so every Pet Wellness Plan can be customize for the specific
                            envolving needs of your adult dog. We kept in simple
                        </p>

                        <p className='s-19 fw-600'> <span className='bg-text'>1) </span>Review the chart to learn about services in each core plan.</p>
                        <p className='s-19 fw-600'><span className='bg-text'>2) </span>Click the link below to learn about available plan options.</p>
                        <p className='s-19 fw-600'><span className='bg-text'>3) </span>Work with your petacare veterinarian to customize your plan!</p>


                        <h5 className='fw-600 mt-4'>Pricing Calculator</h5>

                        <p className=' fs-para s-17 fw-600'>Quickly estimated the price of a wellness plan designed for your pet
                        </p>

                        <button className='btn-pill rounded-pill border-0 px-md-4 py-md-2 s-19' type="">Calculate Cost</button>
                    </div>

                    <div className='col-md-5'>
                        <img width='100%' src={dogdressing} alt="" />
                    </div>
                </div>

                <div className="row mt-5 mb-5 justify-content-around">

                    <div className='col-md-4 ' style={{ width: '26rem' }}>


                        <div className='text-center rounded-0 card card-shadow  border'>
                        <div className="row m-0 bg-img  justify-content-center">
                                <div className="col-auto  p-0" >
                                    <div className='text-center pt-5 pb-5'>
                                        <img width='40%' src={bggirl} alt="" />
                                        <h3 className='pt-2 text-white fw-600'>Quarterly</h3>
                                    </div>
                                    <br />

                                </div>


                            </div>

                            <div className="card-body text-start">
                                <div className="row justify-content-center">
                                    <div className="col-auto">


                                        <h5 className="card-title s-16 fw-600 text-capitalize l-height" >
                                            <i className="fa-solid fa-circle-check me-3 bg-text"></i>
                                            Pet Wellness Centers</h5>

                                        <h5 className="card-title s-16 fw-600 text-capitalize l-height" >

                                            <i className="fa-solid fa-circle-check me-3 bg-text"></i>
                                            Pet Concierge Services</h5>

                                        <h5 className="card-title s-16 fw-600 text-capitalize l-height" >

                                            <i className="fa-solid fa-circle-check me-3 bg-text"></i>
                                            pet management software</h5>

                                        <h5 className="card-title s-16 fw-600 text-capitalize l-height" >

                                            <i className="fa-solid fa-circle-check me-3 bg-text"></i>
                                            pet wellness pricing</h5>
                                    </div>
                                </div>



                                <h4 className='text-center pt-4 fw-600'>Pricing: $14:00</h4>
                                <div className='text-center pt-4 pb-4'>

                                    <button type="" className='btn-pill rounded-pill px-md-5 py-md-3 w-75 border-0 text-uppercase'>
                                        subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4 ' style={{ width: '26rem' }}>


                        <div className='text-center rounded-0 card card-shadow  border'>
                            <div className="row m-0 bg-img  justify-content-center">
                                <div className="col-auto  p-0" >
                                    <div className='text-center pt-5 pb-5'>
                                        <img width='40%' src={bggirl} alt="" />
                                        <h3 className='pt-2 text-white fw-600'>Monthly</h3>
                                    </div>
                                    <br />

                                </div>


                            </div>

                            <div className="card-body text-start">
                                <div className="row justify-content-center">
                                    <div className="col-auto">


                                        <h5 className="card-title s-16 fw-600 text-capitalize l-height" >
                                            <i className="fa-solid fa-circle-check me-3 bg-text"></i>
                                            Pet Wellness Centers</h5>

                                        <h5 className="card-title s-16 fw-600 text-capitalize l-height" >

                                            <i className="fa-solid fa-circle-check me-3 bg-text"></i>
                                            Pet Concierge Services</h5>

                                        <h5 className="card-title s-16 fw-600 text-capitalize l-height" >

                                            <i className="fa-solid fa-circle-check me-3 bg-text"></i>
                                            pet management software</h5>

                                        <h5 className="card-title s-16 fw-600 text-capitalize l-height" >

                                            <i className="fa-solid fa-circle-check me-3 bg-text"></i>
                                            pet wellness pricing</h5>
                                    </div>
                                </div>



                                <h4 className='text-center pt-4 fw-600'>Pricing: $22:00</h4>
                                <div className='text-center pt-4 pb-4'>


                                    <button type="" className='btn-pill rounded-pill px-md-5 py-md-3 w-75 border-0 text-uppercase'>
                                        subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4 ' style={{ width: '26rem' }}>


                        <div className='text-center rounded-0 card card-shadow  border'>
                            <div className="row m-0 bg-img  justify-content-center">
                                <div className="col-auto  p-0" >
                                    <div className='text-center pt-5 pb-5'>
                                        <img width='40%' src={bggirl} alt="" />
                                        <h3 className='pt-2 text-white fw-600'>Yearly</h3>
                                    </div>
                                    <br />

                                </div>


                            </div>

                            <div className="card-body text-start">
                                <div className="row justify-content-center">
                                    <div className="col-auto">


                                        <h5 className="card-title s-16 fw-600 text-capitalize l-height" >
                                            <i className="fa-solid fa-circle-check me-3 bg-text"></i>
                                            Pet Wellness Centers</h5>

                                        <h5 className="card-title s-16 fw-600 text-capitalize l-height" >

                                            <i className="fa-solid fa-circle-check me-3 bg-text"></i>
                                            Pet Concierge Services</h5>

                                        <h5 className="card-title s-16 fw-600 text-capitalize l-height" >

                                            <i className="fa-solid fa-circle-check me-3 bg-text"></i>
                                            pet management software</h5>

                                        <h5 className="card-title s-16 fw-600 text-capitalize l-height" >

                                            <i className="fa-solid fa-circle-check me-3 bg-text"></i>
                                            pet wellness pricing</h5>
                                    </div>
                                </div>


                                <h4 className='text-center pt-4 fw-600'>Pricing: $47:00</h4>
                                <div className='text-center pt-4 pb-4'>

                                    <button type="" className='btn-pill rounded-pill px-md-5 py-md-3 w-75 border-0 text-uppercase'>
                                        subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

            <div className='row g-0 justify-content-center align-items-center bg-red  p-5'>
                <div className="col-3">
                    <h3 className='fw-600 text-uppercase text-white text-end'>inquiry now</h3>
                </div>

                <div className="col-3">
                    <h3 className='fw-600 text-uppercase text-white  text-center'>Call 9.876.543.210</h3>
                </div>

                <div className="col-3">
                    <button type="" className='bg-text bg-white rounded-pill  text-center px-4 py-3 fw-600 border-0'> Enroll Now</button>
                </div>
            </div>
        </>
    )
}

export default PetWellnessScreen