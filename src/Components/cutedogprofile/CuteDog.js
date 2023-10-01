import React from 'react'
import slidimg3 from "../../assets/Images/slidimg3.jpg";
import mypet from "../../assets/Images/my-pet.svg";
import mypet1 from "../../assets/Images/my-pet_1.svg";
import mypet2 from "../../assets/Images/my-pet_2.svg";
import mypet3 from "../../assets/Images/my-pet_3.svg";
import mypet4 from "../../assets/Images/my-pet_4.svg";


const CuteDog = () => {
    return (
        <>
            <div className="container">
                <div className="row justify-content-center mt-5 mb-5">
                    <div className="col-md-8  text-center card-shadow">

                        <div className="row border rounded-0 justify-content-center">
                            <div className="col-md-12 p-0">
                                <img width='100%' src={slidimg3}  alt="" />
                                <div>
                                </div>
                            </div>
                            <div className="col-12">
                                <h2 className='text-capitalize mt-5'>Dog name</h2>
                            </div>

                            <div className=' mt-5'>
                                <button className='btn-pill-outline rounded-pill px-md-5 py-md-3 text-uppercase s-18 me-3' type=""> other</button>
                                <button className='btn-pill-outline rounded-pill px-md-5 py-md-3 text-uppercase s-18' type=""> Rochester</button>

                            </div>

                            <div className="col-6 ">

                                <div className="row mt-5 justify-content-center">
                                    <div className="col-4 text-center">
                                        <h5>942nd</h5>
                                        <p className='text-muted'>Dog</p>
                                    </div>

                                    <div className="col-4 text-center">
                                        <h5>40th</h5>
                                        <p className='text-muted'>New York</p>
                                    </div>

                                    <div className="col-4 text-center">
                                        <h5>36</h5>
                                        <p className='text-muted'>Likes</p>
                                    </div>
                                </div>
                                <div className='mt-4'>

                                    <button type="" className='text-uppercase s-19 btn-pill rounded-pill border-0 px-md-5 py-md-2 w-100' >like</button>
                                </div>

                                <p className='text-muted s-18 mt-4'>Likes</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-8 p-4 pb-5 bg-profile-card ">
                        <div className='text-start'>
                            <p className='s-17 fw-500'>Benji is a 5 month old Dog who loves to play & get into anything. He can also loves
                                cuddle up next to his owner at night.
                            </p>

                            <button className='btn btn-primary fw-600 me-2 py-1' type="">

                                <i className="fa-solid fa-thumbs-up me-2 "></i>
                                <span className='fw-600'> Like </span> <span className='fw-600'>0</span>
                            </button>


                            <button className='btn btn-primary fw-600 py-1' type="">
                                
                                <span className='fw-600'> Share </span>
                            </button>

                            <div className='pt-5'>
                              <span className='fw-600'>  By </span> <span className='bg-text fw-600'>Jonh Smith</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-8 p-4 pt-5 pb-5 card-shadow">
                        <h4 className='fw-600'>Photos</h4>

                        <div>
                            <img className='me-1' src={mypet} alt="" />
                            <img className='me-1' src={mypet1} alt="" />
                            <img className='me-1' src={mypet2} alt="" />
                            <img className='me-1' src={mypet3} alt="" />
                            <img className='' src={mypet4} alt="" />

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CuteDog