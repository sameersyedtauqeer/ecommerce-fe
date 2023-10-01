import React, { useEffect, useState } from 'react'
import slide1 from "../../assets/Images/slide1.png";
import ProductImageSlider from "../sliders/ProductImageSlider";
import BreadcrumScreen from "../breadcrum/BreadcrumScreen";
import aaaa from "../../assets/Images/aaaa.PNG";
import increa from "../../assets/Images/increa.PNG";
import ReactImageMagnify from 'react-image-magnify';
import { useParams, Link } from "react-router-dom";
import Rating from './Rating';
import { useDispatch, useSelector } from 'react-redux';
import { addToFav } from '../../Redux/Slices/FavProductSlice';
import { addWithQuantity } from '../../Redux/Slices/cartSlice';
import { baseUrl, getSingleProduct } from '../../ApiConstant/api';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
// import "./styles.css";
import { Pagination } from "swiper";
import Swal from 'sweetalert2'


const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})



const ProductDetailsScreen = () => {
    const dispatch = useDispatch();

    const { checkFav } = useSelector((state) => state.favItems)
    const { token } = useSelector((state) => state.auth)
    const [itemQuantity, setItemQuantity] = useState(1)

    const handleIncreament = () => {
        setItemQuantity(itemQuantity + 1)
    }

    const handleDecreament = () => {
        if (itemQuantity > 0) {

            setItemQuantity(itemQuantity - 1)
        }
    }
    const fun = () => {
        if (token) {

            const obj = {
                id: data.id,
                title: data.title,
                price: data.price,
                description: data.description,
                category: data.category,
                image: data.image,
                isActive: data.isActive,
                quantity: itemQuantity
            }
            // const body = {
            //     val,
            //     quantity: itemQuantity
            // }
            dispatch(addWithQuantity(obj))
        }
        else {
            Toast.fire({
                icon: 'error',
                title: "Please Login"
            })
        }

    }
    // console.log("checkFav ======= ", checkFav)



    const [data, setData] = useState(null)
    const { id } = useParams();

    const handleAddFav = (data) => {
        dispatch(addToFav(data))
    }

    // const getDetails = () => {

    //     // fetch(`baseUrl/products/${id}`)
    //     fetch(`https://fakestoreapi.com/products/${id}`)
    //         .then((res) => res.json())
    //         .then((response) => {
    //             response["isActive"] = false;
    //             setData(response)
    //         })
    // }

    const [image, setImage] = useState("")
    console.log("first =========== ", image)

    const getDetails = () => {
        getSingleProduct("products", id)
            .then((res) => {
                setData(res?.data)
            })
    }

    console.log("data ==== ", data)


    // console.log('data', data)
    // console.log("data === ", 0r)
    useEffect(() => {
        getDetails();
        // console.log("id", id)
    }, [id])

    const imageProps = {
        smallImage: {
            alt: 'Phasellus laoreet',
            isFluidWidth: true,
            src: `${image === "" && data?.coverImage ? 'http://localhost:5000/uploads/' + data.coverImage : 'http://localhost:5000/uploads/' + image}`
        },
        largeImage: {
            // src: `${data?.coverImage ? 'http://localhost:5000/uploads/' + data.coverImage : ''}`,
            src: `${image === "" && data?.coverImage ? 'http://localhost:5000/uploads/' + data.coverImage : 'http://localhost:5000/uploads/' + image}`,
            width: 1000,
            height: 1000,
            isFluidWidth: true,

        },
        enlargedImageContainerStyle: { background: '#fff', zIndex: 9 }
    };
    return (
        <>
            {data && (
                <section>
                    <BreadcrumScreen url={data.title} />
                </section>
            )}



            {data ? (
                <section>
                    <div className='container mt-5'>
                        <div className='row'>
                            <div className='col-md-5'>
                                <div className=' card--detail' style={{ height: "350px" }} >

                                    <ReactImageMagnify  {...imageProps} />

                                    {/* <img width='100%' src={slide1} alt="" /> */}
                                </div>

                                <div className='mt-3'>
                                    {/* <Swiper breakpoints={{
                                        // when window width is >= 480px
                                        300: {
                                            slidesPerView: 4,
                                            spaceBetween: 0,
                                            centeredSlides: true
                                        },
                                        // when window width is >= 768px
                                        576: {
                                            slidesPerView: 4,
                                            spaceBetween: 10,
                                            centeredSlides: false
                                        },
                                        // when window width is >= 768px
                                        768: {
                                            slidesPerView: 4,
                                            spaceBetween: 10,
                                            centeredSlides: false
                                        },
                                        // when window width is >= 768px
                                        992: {
                                            slidesPerView: 4,
                                            spaceBetween: 10,
                                            centeredSlides: false
                                        },
                                    }} pagination={{ clickable: true }} modules={[Pagination]} className="mySwiper pb-5rem">
                                        {
                                            data?.sampleImages?.map((images, index) => (
                                                < >
                                                    <SwiperSlide key={index} >
                                                        <div className='col-md-12 '>

                                                            <div onClick={() => setImage(images)} className='text-center card  card-shadow border'>
                                                                <div className='text-center p-2'>
                                                                    <img width='100%' src={`http://localhost:5000/uploads/${images}`} alt="" />

                                                                </div>

                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                </>
                                            ))
                                        }
                                    </Swiper> */}

                                    <ProductImageSlider data={data?.sampleImages} coverImage={data?.coverImage} image={image} setImage={setImage} />
                                </div>


                            </div>

                            <div className='col-md-7 p-5 '>
                                <h2 className='pt-3 ps-3 fw-600'>{data?.title}</h2>
                                {/* 
                                <div className='ps-3 row'>

                                    <div className='col-auto pe-1'>
                                        <span className='bg-text s- fw-600'>Rating : {Math.round(data?.rating?.rate)}</span>
                                    </div>

                                    <div className="col p-0">
                                        <span className=''>
                                            <Rating rate={Math.round(data?.rating?.rate)} />
                                        </span>
                                    </div>

                                    <div className="col-auto">
                                        <div onClick={() => handleAddFav(data)}>
                                            <i className={`${checkFav ? "text-danger" : "text-light"} cursor-pointer fa-solid fa-heart s-20`}></i>
                                        </div>
                                    </div>

                                    <span className='bg-text fw-600 s-18'>{Math.round(data?.rating?.rate)}</span>
                                </div> */}

                                <div className='ps-3'>
                                    <p className='pt-3  l-height fs-para '>{data?.description}</p>
                                </div>

                                <div className='ps-3'>
                                    <p className=' pt-3 bg-text s- fw-600'>Category:
                                        <span className='text-grey text-capitalize s-16'> {data?.category}</span></p>
                                </div>

                                <div className='ps-3'>
                                    <h3 className='bg-text pb-4 fw-600 border-bottom'>${data?.price}</h3>
                                </div>

                                <div className="row mt-5">
                                    <div className="col-auto">
                                        <div className='border rounded-pill'>
                                            <button onClick={handleDecreament} type="" className='circle-btn bg-transparent border'>-</button>
                                            <span className='px-4 s-18'>{itemQuantity}</span>
                                            <button onClick={handleIncreament} type="" className='circle-btn bg-transparent border'>+</button>

                                        </div>
                                    </div>

                                    <div className="col-auto">
                                        <div className=''>
                                            {itemQuantity > 0 && (
                                                <button type="" onClick={() => fun()} className='btn-pill border-0 px-5 py-3 rounded-pill text-uppercase'>add to cart</button>
                                            )}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            ) : ''}



        </>
    )
}

export default ProductDetailsScreen