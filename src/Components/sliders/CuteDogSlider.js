import React, {Fragment ,useId} from "react";
import lastmonthwinner from "../../assets/Images/lastmonthwinner.svg";


import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
// import "./styles.css";
import { Pagination } from "swiper";

import 'swiper/css/autoplay'
import { Autoplay } from 'swiper'

const CuteDogSlider = () => {


    const data = [
       
        {
            id:useId,
            img: lastmonthwinner,
            title: "Dog Name",
            description: 'Dollas Texas 751236',
            prize: "USD 300"

        },
        {
            id:useId,
            img: lastmonthwinner,
            title: "Dog Name",
            description: 'Dollas Texas 751236',
            prize: "USD 300"

        },
        {
            id:useId,
            img: lastmonthwinner,
            title: "Dog Name",
            description: 'Dollas Texas 751236',
            prize: "USD 300"

        },
        {
            id:useId,
            img: lastmonthwinner,
            title: "Dog Name",
            description: 'Dollas Texas 751236',
            prize: "USD 300"

        },

    ];

    return (
        <>
            <Fragment>
                <Swiper breakpoints={{
                    // when window width is >= 480px
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                        centeredSlides: true
                    },
                    // when window width is >= 768px
                    576: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                        centeredSlides: false
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                        centeredSlides: false
                    },
                    // when window width is >= 768px
                    992: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                        centeredSlides: false
                    },
                    
                }} pagination={{clickable: true}} modules={[Pagination]} className="mySwiper  pb-5">
                    {
                        data.map((val, index) => (
                            <Fragment >
                                <SwiperSlide key={index} className="cute-dog">
                                    <div className='col-md-12 m-auto '>


                                        <img width="60%" src={lastmonthwinner} alt="" />

                                        <p className='text-muted text-capitalize s-15 mt-3 fw-500'>{val.title}</p>
                                        <p className='text-muted text-capitalize s-15 fw-500'>state/city: {val.description}</p>
                                        <p className='text-muted text-capitalize s-15 fw-500'>Prize Value: <span className='bg-text fw-600 s-15'>{val.prize}</span></p>



                                        {/* <div className='text-center card br-15 card-shadow m-2 border-0 card-height' >
                                            <div className="row justify-content-center">
                                                <div className="col-auto p-0">
                                                    <div className='text-center pt-5 pb-5'>
                                                        <img width='100%' src={val.img} alt="" />
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="card-body overflow-hidden">
                                                <h5 className="card-title s-18 fw-600 text-black" >{val.title}</h5>
                                                <p className="text-dark pt-4 s-16 l-height" > {val.description} </p>

                                                <a className=' text-center heading-color fw-700 text-uppercase bor-bottom s-15'>{val.footer}</a>
                                            </div>
                                        </div> */}
                                    </div>




                                </SwiperSlide>
                            </Fragment>
                        ))
                    }
                </Swiper>
            </Fragment>
        </>
    )
}

export default CuteDogSlider
