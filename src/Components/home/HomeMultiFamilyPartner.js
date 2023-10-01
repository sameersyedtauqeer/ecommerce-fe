import React from 'react'
import room from "../../assets/Images/room.png";
import facebook from "../../assets/Images/facebook.png";
import insta from "../../assets/Images/insta.png";
import whatsapp from "../../assets/Images/whatsapp.png";
import twitter from "../../assets/Images/twitter.png";

import client from "../../assets/Images/image10.svg";



const HomeMultiFamilyPartner = () => {
    return (
        <>
            <section >

                <div className="container mb-5">
                    <div className="row  align-items-center">
                        <div className="col-md-6 p-0">
                            <img width='100%' src={client} alt="" />
                        </div>

                        <div className='col-md-6 p-5 pb-4'>
                            <h2 className='text-capitalize fw-600'>our multifamily partners <span className='fw-800 s-45'>-</span></h2>
                            <h2 className='text-capitalize bg-text fw-600'>communities</h2>
                            <h4 className='text-capitalize s-18 fw-700 pt-4'>Larkspur Communities At Twin Creeks</h4>
                            <p className='text-capitalize s-15 l-spacing-1 fw-500'>Address:  860 Junction Drive, Allen, TX 75013</p>
                            <p className='text-capitalize s-15 l-spacing-1 fw-500'>Website: <span>
                                <a  className='bg-text text-lowercase' href="https://www.larkspurattwincreeks.com/" target="_blank">https://www.larkspurattwincreeks.com/</a> </span></p>
                            {/* <p className='text-capitalize s-15 l-spacing-1 fw-500'>mail: <span> johnsmith@gmail.com</span></p> */}

                            {/* <div className='d-flex'>
                                <div className='me-3'>

                                    <img src={facebook} alt="" />
                                </div>
                                <div className='me-3'>

                                    <img src={insta} alt="" />
                                </div>
                                <div className='me-3'>

                                    <img src={whatsapp} alt="" />
                                </div>

                                <div className='me-3'>

                                    <img src={twitter} alt="" />
                                </div>

                            </div> */}
                            <div className='pt-4'>

                                <button type="" className='btn-pill rounded-pill border-0  text-uppercase btn-get fw-500imp s-0-8'>Get in touch</button>
                            </div>




                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default HomeMultiFamilyPartner