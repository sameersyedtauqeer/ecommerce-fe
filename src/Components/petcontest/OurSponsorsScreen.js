import React from 'react'
import sponsor1 from "../../assets/Images/sponsor1.png";
import sponsor2 from "../../assets/Images/sponsor2.png";
import sponsor3 from "../../assets/Images/sponsor3.png";


const OurSponsorsScreen = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className='row mt-5'>
                        <div className="col-md-12">
                            <h1 className='text-center'> Our Sponsors</h1>
                        </div>
                    </div>

                    <div className="row justify-content-center align-items-center mt-3 mb-5">

                        <div className="col-2">
                            <img width="100%" src={sponsor1} alt="" />
                        </div>

                        <div className="col-2">
                            <img width="100%" src={sponsor2} alt="" />
                        </div>

                        <div className="col-2">
                            <img width="100%" src={sponsor3} alt="" />
                        </div>

                        <div className="col-2">
                            <img width="100%" src={sponsor1} alt="" />
                        </div>

                        <div className="col-2">
                            <img width="100%" src={sponsor2} alt="" />
                        </div>
                        <div className="col-2">
                            <img width="100%" src={sponsor3} alt="" />
                        </div>

                    </div>


                </div>

                <div className="row g-0">
                    <div className="col bg-red ">
                        <h4 className='text-uppercase fw-600 text-white text-center p-4 m-0' >34k Votes <span className='ps-3 pe-3'>  |  </span>   360 Pets</h4>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurSponsorsScreen