import React from 'react'
import team2 from "../../assets/Images/team2.svg";
import doground from "../../assets/Images/doground.png";
import TestimonialSlider from "../sliders/TestimonialSlider";



const AboutTestimonils = () => {
    return (
        <>
            <section>

                <div className='container-fluid mb-5'>
                    <div className='row align-items-center'>
                        <div className='col-md-6 p-3  '>
                            <img width='100%' src={team2} alt="" />
                        </div>

                        <div className='col-md-6 p-5 mt-md-5' >
                            <h6 className='bg-text text-uppercase l-spacing fw-700 s-14 pt-4'>testimonials</h6>

                            <h2 className='text-capitalize fw-600 pt-3'>quality styling, cliping & bathing is hard to find</h2>

                            <div className='row g-0 pt-5 testimonial-bullets'>

                                <TestimonialSlider />

                                {/* <div className='col-md-12'>
                                    <div className=' d-flex align-items-center pt-2 pb-2'>

                                        <div className="media">
                                            <img className="me-3 " width='64px' src={doground} alt="Generic placeholder image" />

                                        </div>
                                        <div className="media-body">
                                            <h4 className="mt-0  p-0 m-0 text-capitalize fw-600 s-19 bg-text">John smith</h4>
                                            <p className="mt-0 s-18 p-0 m-0 text-capitalize fw-500 sub-heading">manager</p>
                                        </div>



                                    </div>
                                    <div className='pt-4 s-16 testi-text fw-500'>
                                        <p className='l-height'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>
                                    </div>
                                </div> */}
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutTestimonils