import React from 'react'
import girlwithdog from "../../assets/Images/girlwithdog.png";
import facebookround from "../../assets/Images/facebookround.png";
import instaround from "../../assets/Images/instaround.png";
import doground from "../../assets/Images/doground.png";
import sponsor1 from "../../assets/Images/sponsor1.png";
import sponsor2 from "../../assets/Images/sponsor2.png";
import sponsor3 from "../../assets/Images/sponsor3.png";
import award from "../../assets/Images/award.png";

import greenpow from "../../assets/Images/greenpow.svg";
import redpow from "../../assets/Images/redpow.svg";

import lastmonthwinner from "../../assets/Images/lastmonthwinner.svg";
import greenDog from "../../assets/Images/greenDog.png";
import CuteDogSlider from "../sliders/CuteDogSlider";





const HomeCuteDog = () => {
    return (
        <>

            {/* dog contest area Start */}

            <section className=' mb-5'>

                <div className="container-fluid ">
                    <div className="row ">
                        <div className="col-md-12 col-lg-9">
                            <div className="row ">

                                <div className="col-md-6 col-lg-8 p-md-5 pt-0 text-center" >
                                    <img width="100%" src={girlwithdog} alt="" />

                                    <div className='pt-4'>
                                        <div className="container">

                                            <div className="row text-center align-items-center justify-content-center">
                                                <div className="col-4 col-md-auto p-0">

                                                    <button className='btn-pill-outline   text-uppercase align-items-center rounded-pill  me-2 btn-cute-dog py-md-2' type="">
                                                        <img className='me-2 ' src={redpow} alt="" />

                                                        pass</button>
                                                </div>

                                                <div className="col-4 col-md-auto p-0">

                                                    <button className='btn-green-outline text-uppercase  rounded-pill me-2 btn-cute-dog py-md-2' type="">

                                                        <img className='me-2' src={greenpow} alt="" />
                                                        like</button>

                                                </div>

                                                <div className=" col-4 col-md-auto p-0">
                                                    <img className='me-2' src={facebookround} alt="" />
                                                    <img className='me-2' src={instaround} alt="" />
                                                </div>
                                            </div>

                                        </div>




                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4 pt-md-2 pt-4 ">

                                    <div className="row">
                                        <div className='col-9'>

                                            <h5 className='bg-text text-center text-md-start text-uppercase s-15 fw-700 l-spacing'>
                                                cute dog contest
                                            </h5>
                                        </div>

                                        <div className="col-md-12 text-center cute-dog">
                                            <h1 className='text-capitalize contest-heading  s-37 fw-700'> cute dog contest</h1>

                                            {/* <p className='text-muted text-capitalize s-19'>last month winner</p>

<img className='me-3' src={award} alt="" /> */}

                                            <CuteDogSlider />

                                            {/* <img width="60%" src={lastmonthwinner} alt="" /> */}

                                            {/* <p className='text-muted text-capitalize s-18 mt-3 fw-500'>dog name</p>
                                            <p className='text-muted text-capitalize s-18 fw-500'>state/city: dollas texas 751236</p>
                                            <p className='text-muted text-capitalize s-18 fw-500'>prize: <small className='bg-text fw-600'>USD 300</small></p> */}

                                            <button className='btn-pill text-uppercase fw-700 border-0 rounded-pill px-1 py-1 px-md-3 py-md-3 w-100 s-0-8' type="">
                                                <i className="fa-sharp fa-solid fa-arrow-up-from-bracket me-2" />
                                                upload your pet photo to win
                                            </button>

                                            <button className='btn-pill-dark text-uppercase fw-700 border-0 rounded-pill px-2 py-1 px-md-5 py-md-3  mt-3 s-0-8' type="">
                                                register now
                                            </button>

                                        </div>
                                    </div>



                                </div>


                            </div>


                            <div className="container">
                                <div className='row justify-content-center mt-3 mt-md-3'>
                                    <div className="col-md-10 ps-lg-5 ms-lg-3">
                                        <h3 className='text-capitalize fw-600'>sponsors:</h3>

                                        <div className="row pt-2 align-items-center">
                                            <div className='col-md-4 col-lg-auto col-4 me-lg-4'>

                                                <img width='100%' src={sponsor1} alt="" />
                                            </div>
                                            <div className='col-md-4 col-lg-auto col-4 me-lg-4'>

                                                <img width='100%' src={sponsor2} alt="" />
                                            </div>

                                            <div className='col-md-4 col-lg-auto col-4 me-lg-5'>

                                                <img width='100%' src={sponsor3} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-lg-3 ps-md-5">
                            <h5 className='fw-600 pt-md-5 s-18 mt-5 text-center text-md-start'>All the participant</h5>



                            <div className='align-items-center d-flex pt-3 pb-3 border-bottom'>

                                <div className="media">
                                    <img className="me-3 " width='68px' src={greenDog} alt="Generic placeholder image" />

                                </div>
                                <div className="media-body">
                                    <p className="mt-0 s-0-9 p-0 m-0 text-capitalize fw-600 text-muted">pet name</p>
                                    <p className="mt-0 s-0-9 p-0 m-0 text-capitalize fw-600 text-muted">dallas texas 35436</p>
                                </div>

                            </div>

                            <div className='align-items-center d-flex pt-3 pb-3 border-bottom'>

                                <div className="media">
                                    <img className="me-3 " width='68px' src={greenDog} alt="Generic placeholder image" />

                                </div>
                                <div className="media-body">
                                    <p className="mt-0 s-0-9 p-0 m-0 text-capitalize fw-600 text-muted">pet name</p>
                                    <p className="mt-0 s-0-9 p-0 m-0 text-capitalize fw-600 text-muted">dallas texas 35436</p>
                                </div>

                            </div>

                            <div className='align-items-center d-flex pt-3 pb-3 border-bottom'>

                                <div className="media">
                                    <img className="me-3 " width='68px' src={greenDog} alt="Generic placeholder image" />

                                </div>
                                <div className="media-body">
                                    <p className="mt-0 s-0-9 p-0 m-0 text-capitalize fw-600 text-muted">pet name</p>
                                    <p className="mt-0 s-0-9 p-0 m-0 text-capitalize fw-600 text-muted">dallas texas 35436</p>
                                </div>

                            </div>

                            <div className='align-items-center d-flex pt-3 pb-3 border-bottom'>

                                <div className="media">
                                    <img className="me-3 " width='68px' src={greenDog} alt="Generic placeholder image" />

                                </div>
                                <div className="media-body">
                                    <p className="mt-0 s-0-9 p-0 m-0 text-capitalize fw-600 text-muted">pet name</p>
                                    <p className="mt-0 s-0-9 p-0 m-0 text-capitalize fw-600 text-muted">dallas texas 35436</p>
                                </div>

                            </div> <div className='align-items-center d-flex pt-3 pb-3 border-bottom'>

                                <div className="media">
                                    <img className="me-3 " width='68px' src={greenDog} alt="Generic placeholder image" />

                                </div>
                                <div className="media-body">
                                    <p className="mt-0 s-0-9 p-0 m-0 text-capitalize fw-600 text-muted">pet name</p>
                                    <p className="mt-0 s-0-9 p-0 m-0 text-capitalize fw-600 text-muted">dallas texas 35436</p>
                                </div>




                            </div>

                            <div className='align-items-center d-flex pt-3 pb-3 border-bottom'>

                                <div className="media">
                                    <img className="me-3 " width='68px' src={greenDog} alt="Generic placeholder image" />

                                </div>
                                <div className="media-body">
                                    <p className="mt-0 s-0-9 p-0 m-0 text-capitalize fw-600 text-muted">pet name</p>
                                    <p className="mt-0 s-0-9 p-0 m-0 text-capitalize fw-600 text-muted">dallas texas 35436</p>
                                </div>

                            </div>

                        </div>





                    </div>

                </div>

            </section>

            {/* dog contest area Start */}</>
    )
}

export default HomeCuteDog