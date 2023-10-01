import React from 'react'
import petlover1 from "../../assets/Images/petlover1.svg";
import petlover2 from "../../assets/Images/petlover2.svg";
import petlover3 from "../../assets/Images/petlover3.svg";
import petlover4 from "../../assets/Images/petlover4.svg";

const AboutTeam = () => {
    return (
        <>

            <section>
                <div className='container mb-5'>
                    <div className='row mt-5 mb-5'>
                        <div className='col-md-12 text-center'>
                            <h1 className='fw-600'>Meet our team of true pet lovers</h1>
                        </div>
                    </div>

                    <div className='row mb-5'>
                        <div className='col-md-3 text-center '>
                            <img  className='team-img-width' src={petlover1} alt="" />
                            <h4 className='text-capitalize fw-600 pt-3'>Stephen king</h4>
                            <h6 className='bg-text text-capitalize pt-2 fw-600 s-14'>dog day care | EXP 2yrs</h6>
                        </div>

                        <div className='col-md-3 text-center pt-5 pt-md-0'>
                            <img  className='team-img-width' src={petlover2} alt="" />
                            <h4 className='text-capitalize fw-600 pt-3'>linda hamilton</h4>
                            <h6 className='bg-text text-capitalize pt-2 fw-600 s-14'>grooming | EXP 2yrs</h6>
                        </div>

                        <div className='col-md-3 text-center pt-5 pt-md-0'>
                            <img  className='team-img-width' src={petlover3} alt="" />
                            <h4 className='text-capitalize fw-600 pt-3'>jenny kathy</h4>
                            <h6 className='bg-text text-capitalize pt-2 fw-600 s-14'>boarding | EXP 3yrs</h6>
                        </div>

                        <div className='col-md-3 text-center pt-5 pt-md-0'>
                            <img  className='team-img-width' src={petlover4} alt="" />
                            <h4 className='text-capitalize fw-600 pt-3'>lisa kudro</h4>
                            <h6 className='bg-text text-capitalize pt-2 fw-600 s-14'>DNA test | EXP 6yrs</h6>
                        </div>

                        <div className='col-md-12 pt-5 text-center'>
                            <button className='btn-pill-team px-md-4 py-3 rounded-pill border-0 text-white text-uppercase s-14' type=""> make an appointment</button>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default AboutTeam