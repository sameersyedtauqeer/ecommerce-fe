import React from 'react'
import ServiceCardSlider from "../../Components/sliders/ServiceCardSlider";


const HomeServiceProvider = () => {
    return (
        <>
            {/* third slider start */}

            <section className='bg-boneless'>
                <div className="container-fluid">
                    <div className='row' >
                        <div className="col-12 text-center mt-7">

                            <h6 className='fw-700 heading-color text-uppercase '>hire service provider</h6>
                        </div>

                        <div className="col-12 text-center">
                            <h1 className='fw-600 text-capitalize'>service provider</h1>

                        </div>


                    </div>
                    <div className='row '>

                        <div className="col-md-12 ">

                            <br className="d-none d-lg-none d-xxl-block " />
                            <br className="d-none d-lg-none d-xxl-block " />


                            <br className="d-none d-lg-block" />



                            <ServiceCardSlider />

                            <div className='d-none d-lg-none d-xl-block'>

                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />

                            </div>

                        </div>

                        </div>
                    </div>
            </section>

            {/* third slider start */}
        </>
    )
}

export default HomeServiceProvider