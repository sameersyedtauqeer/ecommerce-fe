import React from 'react'
import OffersCardSlider from "../../Components/sliders/OffersCardSlider";


const HomeWhatweOffer = () => {
    return (
        <>
            {/* second slider start */}

            <section className='bg-img-slider1 '>
                <div className="container">


                    <div className='row' >
                        <div className="col-12 text-center mt-7 mb-0">
                            <h6 className='fw-700 l-spacing heading-color sec-sub-heading'>WHAT WE OFFER</h6>
                        </div>
                        <div className="col-12 text-center ">
                            <h2 className='fw-700 mb-0 pb-0'>Awesome Services</h2>
                        </div>



                    </div>
                </div>

                <div className="container-fluid">
                    <div className="col-md-12 ">

                        <br className="d-none d-lg-none d-xxl-block " />
                        <br className="d-none d-lg-block" />
                        <br className="d-none d-lg-block" />


                        <div className="row">
                            {/* <Swiper pagination={true} modules={[Pagination]} className="mySwiper mt-5 mb-5"> */}
                            <OffersCardSlider />
                            {/* </Swiper> */}

                        </div>

                        <br className="d-none d-xl-block d-xxl-block" />
                        <br className="d-none d-xl-block d-xxl-block" />
                        <br className="d-none d-xl-block d-xxl-block" />
                        <br className="d-none d-xl-none d-xxl-block" />
                        <br className="d-none d-xl-none d-xxl-block" />
                        <br className="d-none d-xl-none d-xxl-block" />
                        <br className="d-none d-xl-none d-xxl-block" />
                        <br className="d-none d-xl-none d-xxl-block" />
                        <br className="d-none d-xl-none d-xxl-block" />
                        <br className="d-none d-xl-block d-xxl-block" />
                        <br className="d-none d-xl-block d-xxl-block" />
                        <br className="d-none d-xl-block d-xxl-block" />


                    </div>
                </div>


            </section>



            {/* second slider start */}
        </>
    )
}

export default HomeWhatweOffer