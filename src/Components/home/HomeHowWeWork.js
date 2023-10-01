import React from 'react'
import WorkCardSlider from "../sliders/WorkCardSlider";


const HomeHowWeWork = () => {
  return (
    <>
      {/* first slider start */}

      <section>
        <div className="container">
          <div className="row mt-5">
            <div className="col-12 text-center">
              <h6 className='fw-700 heading-color sec-sub-heading l-spacing'>HOW WE WORK</h6>
            </div>

            <div className="col-12 text-center  ">
              <h2 className='fw-600 '>The Process</h2>
            </div>
          </div>
          {/* <Swiper pagination={true} modules={[Pagination]} className="mySwiper mt-5 pb-5"> */}

          {/* </Swiper> */}
        </div>

        <div className="container-fluid ps-md-5 pe-md-5">
          <div className='row g-0 mt-4'>

            <WorkCardSlider />
          </div>
        </div>


      </section>

      {/* first slider end */}
    </>
  )
}

export default HomeHowWeWork