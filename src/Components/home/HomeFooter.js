import React from 'react'
import appbtn from "../../assets/Images/App Store Button.svg";
import playbtn from "../../assets/Images/Google Play Button.svg";
import lastImg from "../../assets/Images/lastImg.png";

export const HomeFooter = () => {
    return (
        <>
            <section className='home-footer homefooter mt-5 '>
                <div className="container-fluid ps-md-5 pt-5 pb-5 ">
                    <div className="row  pt-5  align-items-center">
                        <div className="col-md-6">
                            <h6 className='bg-text  fw-700 text-uppercase s-15 l-spacing-1'>download now</h6>
                            <h2 className='fw-600 mt-3'>Available on Android and IOS</h2>

                            {/* <p className='fw-500 s-16 para-text l-height' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s,
                            </p> */}
                            <h5 className='bg-text pt-5 fw-600 '>Easy to Manage Beautiful Display</h5>


                            <div className='pt-3'>

                                <p className='s-17 pt-2 fw-500 '>
                                    <i className="fa-solid fa-pen-to-square me-2 bg-text s-25"></i>
                                    Super easy to manage & updates
                                </p>



                                <p className='s-17 fw-500 pt-2'>
                                    <i className="fa-solid fa-mobile-screen-button me-3 bg-text s-25" />
                                    Responsive profile page suites all mobile screens
                                </p>

                                <p className='s-17 fw-500 pt-2'>
                                    <i className="fa-regular fa-clock me-2 bg-text s-25" />
                                    Accessable 24/7 anywhere, anytime
                                </p>

                            </div>

                            <div className=' pt-4 '>
                                <div className="row">
                                    <div className="col-6 col-md-6 col-lg-3 me-md-3">
                                        <a href="">
                                            <img src={playbtn} alt="" className='me-4' />
                                        </a>
                                    </div>

                                    <div className="col-6 col-md-3">

                                        <a href="">
                                            <img src={appbtn} alt="" />
                                        </a>
                                    </div>
                                </div>



                            </div>


                        </div>
                        {/* 
                        <div className="col-md-6">
                            <img width='100%' src={lastImg} alt="" />
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}
export default HomeFooter

