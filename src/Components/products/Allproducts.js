import React, { useEffect, useState } from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Form from 'react-bootstrap/Form';
import product1 from "../../assets/Images/Box_front.svg";
import product3 from "../../assets/Images/product2.svg";
import product2 from "../../assets/Images/product3.svg";
import product4 from "../../assets/Images/product4.svg";
import product5 from "../../assets/Images/product5.svg";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../Redux/Slices/cartSlice';
import { getProduct } from '../../Redux/Slices/productSlice';
import axios from 'axios';
import Swal from 'sweetalert2'


const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})


const Allproducts = () => {

    // const [productData, setProductData] = useState([])

    const { entities } = useSelector((state) => state.product)
    const { token } = useSelector((state) => state.auth)


    // const getData = async () => {
    //     const res = await fetch("https://fakestoreapi.com/products", {
    //         method: 'GET',
    //         headers: {
    //             accept: 'application/json'
    //         }
    //     })
    //     const resJson = await res.json()

    //     console.log('res', resJson)
    // }

    // const getData = async () => {
    //     axios.get(`https://jsonplaceholder.typicode.com/users`)
    //         .then(res => {
    //             // const persons = res.data;
    //             setProductData(res.data)
    //             console.log(productData)
    //             // this.setState({ persons });
    //         })
    // }
    console.log("entities ==== ", entities)

    useEffect(() => {
        dispatch(getProduct())
    }, [])



    const dispatch = useDispatch();

    const handleCart = (item) => {
        if (!token) {
            Toast.fire({
                icon: 'error',
                title: "Please Login"
            })
        }
        else {
            dispatch(addToCart(item))
            Toast.fire({
                icon: 'success',
                title: "Added To Cart"
            })
        }
    }

    return (
        <>
            {/* <section>
                <div className='container pt-3 pb-3'>
                    <div className='row align-items-center '>
                        <div className='col-md-5'>
                            <i className="fa-solid fa-list s-24"></i>
                        </div>

                        <div className='col-md-7'>
                            <div className='row align-items-center justify-content-end'>
                                <div className='col-auto'>
                                    <i className="fa-solid fa-magnifying-glass text-grey s-24"></i>

                                </div>

                                <div className='col-auto fs-para'>
                                    Sort by:
                                </div>
                                <div className='col-auto'>

                                    <Form.Select className='rounded-0' aria-label="Default select example">
                                        <option>Default sorting</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>

                                <div className='col-auto'>
                                    <p className='fs-para m-0 fw-500'>Showing 1-20 of 46 resuls</p>
                                </div>
                                <div className='p-2'>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

            </section> */}

            <section className="my-5">
                <div className="container">


                    <div className="row">
                        <div className="col-md-3">
                            <div className="card border-0 shadow rounded-0 p-3">

                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicBrand">
                                        <Form.Label className='s-14 fw-600'>Search By Brand</Form.Label>

                                        <Form.Select aria-label="Default select example">
                                            <option className='text-muded' disabled>Select Brand</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>

                                    </Form.Group>


                                    <Form.Group className="mb-3" controlId="formBasicCategory">
                                        <Form.Label className='s-14 fw-600'>Search By Category</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option className='text-muded' disabled>Select Category</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicRange">
                                        <Form.Label className='s-14 fw-600'>Search By Range</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option className='text-muded' disabled>Select Range</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Button variant="danger" className='w-100' type="submit">
                                        Search
                                    </Button>
                                </Form>

                            </div>
                        </div>

                        <div className="col-md-9">
                            <h3 className='fw-700 text-danger s-22 '>
                                All Products
                            </h3>
                            <div className="row">
                                {Array.isArray(entities) && entities.length > 1 ? (
                                    entities.map((item) => (
                                        <div key={item.id} className="col-md-4 py-3">
                                            <Card className='border-0 shadow h-100'>

                                                <Link className='text-dark' to={`/product-details/${item._id}`}>
                                                    < Card.Img variant="top" className='' height={150} src={`http://localhost:5000/uploads/${item.coverImage}`} style={{ objectFit: "cover" , backgroundPosition:"bottomn" }} />
                                                    <Card.Body className='h-100'>
                                                        <Card.Title className='text-danger fw-600 s-18'>
                                                            {item.title.length > 10 ?
                                                                `${item.title.substring(0, 10)}...` : item.title
                                                            }
                                                        </Card.Title>
                                                        <Card.Text className='s-14'>
                                                            {/* {`${item.description.substring(0, 100)}...`} */}

                                                            {item.description.length > 80 ?
                                                                `${item.description.substring(0, 80)}...` : item.description
                                                            }
                                                            <p className='fw-600 text-danger mb-0 mt-3'>
                                                                <span>Rs: </span>
                                                                {item.price}
                                                            </p>
                                                        </Card.Text>

                                                    </Card.Body>
                                                </Link>

                                                <Card.Footer className='border-0 bg-transparent h-100'>

                                                    <Button onClick={() => handleCart(item)} variant="danger" className=' fw-700'>Add</Button>
                                                </Card.Footer>

                                            </Card>
                                        </div>
                                    )))
                                    :

                                    <div className="col">
                                        No Item Find
                                    </div>
                                }

                            </div>
                        </div>
                    </div>
                </div>

            </section >

            {/* <section className='prodrct-card mb-5'>
                <div className='container'>
                    <div className='row card border p-2'>
                        <div className='col-md-12'>
                            <div className='row p-5 justify-content-center justify-content-md-start border-bottom align-items-center'>
                                <div className='col-md-2 col-6'>
                                    <div className='p-2'>
                                        <Link to="/product-details">
                                            <img width="100%" src={product1} alt="" />

                                        </Link>
                                    </div>
                                </div>

                                <div className='col ps-md-5 text-center text-md-start'>
                                    <h6 className='fw-600 s-18'>
                                        <Link to="/product-details">BioTech Pet Testing Kit
                                        </Link>
                                    </h6>
                                    <h5 className='bg-text s-17 fw-600'><del className='product-card-text'>$72.00</del> $69.99</h5>

                                    <div className='text-warning'>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>

                                    <div className='row align-items-center justify-content-center justify-content-md-start s-16 pt-3'>
                                        <div className='col-auto'>
                                            <Link to="/product-details">
                                                <button className='btn-buynow border bg-white rounded-pill product-card-text fw-600 text-uppercase s-0-8' type="">buy now</button>
                                            </Link>
                                        </div>
                                        <div className='col-auto product-card-text s-0-8 m-3 m-md-0 fw-600'>
                                            <p className='text-uppercase  m-0'>
                                                <i className="fa-sharp fa-solid fa-cart-shopping me-3" />
                                                add to cart
                                            </p>
                                        </div>

                                        <div className='col-auto product-card-text s-0-8 fw-600' >
                                            <p className='text-uppercase  m-0'>
                                                <i className="fa-solid fa-shuffle  me-3" />
                                                add to compare
                                            </p>
                                        </div>



                                    </div>
                                </div>
                            </div>

                            <div className='row p-5 justify-content-center justify-content-md-start border-bottom align-items-center'>
                                <div className='col-md-2 col-6 '>
                                    <div className='p-2'>
                                        <img width="100%" src={product4} alt="" />
                                    </div>
                                </div>

                                <div className='col ps-md-5 text-center text-md-start'>
                                    <h6 className='fw-600 s-18'>
                                        <Link to="/">Convalis quam sit
                                        </Link>
                                    </h6>
                                    <h5 className='bg-text s-17 fw-600'><del className='product-card-text'>$72.00</del> $69.99</h5>

                                    <div className='text-warning'>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>

                                    <div className='row align-items-center justify-content-center justify-content-md-start s-16 pt-3'>
                                        <div className='col-auto'>

                                            <button className='btn-buynow border bg-white rounded-pill product-card-text fw-600 text-uppercase s-0-8' type="">buy now</button>
                                        </div>
                                        <div className='col-auto product-card-text s-0-8 m-3 m-md-0 fw-600'>
                                            <p className='text-uppercase  m-0'>
                                                <i className="fa-sharp fa-solid fa-cart-shopping me-3" />
                                                add to cart
                                            </p>
                                        </div>

                                        <div className='col-auto product-card-text s-0-8 fw-600' >
                                            <p className='text-uppercase  m-0'>
                                                <i className="fa-solid fa-shuffle  me-3" />
                                                add to compare
                                            </p>
                                        </div>



                                    </div>
                                </div>
                            </div>

                            <div className='row p-5 justify-content-center justify-content-md-start border-bottom align-items-center'>
                                <div className='col-md-2 col-6'>
                                    <div className='p-2'>
                                        <img width="100%" src={product3} alt="" />
                                    </div>
                                </div>

                                <div className='col ps-md-5 text-center text-md-start'>
                                    <h6 className='fw-600 s-18'>
                                        <Link to="/">Convalis quam sit
                                        </Link>
                                    </h6>
                                    <h5 className='bg-text s-17 fw-600'><del className='product-card-text'>$72.00</del> $69.99</h5>

                                    <div className='text-warning'>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>

                                    <div className='row align-items-center justify-content-center justify-content-md-start s-16 pt-3'>
                                        <div className='col-auto'>

                                            <button className='btn-buynow border bg-white rounded-pill product-card-text fw-600 text-uppercase s-0-8' type="">buy now</button>
                                        </div>
                                        <div className='col-auto product-card-text s-0-8 m-3 m-md-0 fw-600'>
                                            <p className='text-uppercase  m-0'>
                                                <i className="fa-sharp fa-solid fa-cart-shopping me-3" />
                                                add to cart
                                            </p>
                                        </div>

                                        <div className='col-auto product-card-text s-0-8 fw-600' >
                                            <p className='text-uppercase  m-0'>
                                                <i className="fa-solid fa-shuffle  me-3" />
                                                add to compare
                                            </p>
                                        </div>



                                    </div>
                                </div>
                            </div>

                            <div className='row p-5 justify-content-center justify-content-md-start border-bottom align-items-center'>
                                <div className='col-md-2 col-6'>
                                    <div className='p-2'>
                                        <img width="100%" src={product2} alt="" />
                                    </div>
                                </div>

                                <div className='col ps-md-5 text-center text-md-start'>
                                    <h6 className='fw-600 s-18'>
                                        <Link to="/">Convalis quam sit
                                        </Link>
                                    </h6>
                                    <h5 className='bg-text s-17 fw-600'><del className='product-card-text'>$72.00</del> $69.99</h5>

                                    <div className='text-warning'>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>

                                    <div className='row align-items-center justify-content-center justify-content-md-start s-16 pt-3'>
                                        <div className='col-auto'>

                                            <button className='btn-buynow border bg-white rounded-pill product-card-text fw-600 text-uppercase s-0-8' type="">buy now</button>
                                        </div>
                                        <div className='col-auto product-card-text s-0-8 m-3 m-md-0 fw-600'>
                                            <p className='text-uppercase  m-0'>
                                                <i className="fa-sharp fa-solid fa-cart-shopping me-3" />
                                                add to cart
                                            </p>
                                        </div>

                                        <div className='col-auto product-card-text s-0-8 fw-600' >
                                            <p className='text-uppercase  m-0'>
                                                <i className="fa-solid fa-shuffle  me-3" />
                                                add to compare
                                            </p>
                                        </div>



                                    </div>
                                </div>
                            </div>

                            <div className='row p-5 justify-content-center justify-content-md-start border-bottom align-items-center'>
                                <div className='col-md-2 col-6'>
                                    <div className='p-2'>
                                        <img width="100%" src={product5} alt="" />
                                    </div>
                                </div>

                                <div className='col ps-md-5 text-center text-md-start'>
                                    <h6 className='fw-600 s-18'>
                                        <Link to="/">Convalis quam sit
                                        </Link>
                                    </h6>
                                    <h5 className='bg-text s-17 fw-600'><del className='product-card-text'>$72.00</del> $69.99</h5>

                                    <div className='text-warning'>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>

                                    <div className='row align-items-center justify-content-center justify-content-md-start s-16 pt-3'>
                                        <div className='col-auto'>

                                            <button className='btn-buynow border bg-white rounded-pill product-card-text fw-600 text-uppercase s-0-8' type="">buy now</button>
                                        </div>
                                        <div className='col-auto product-card-text s-0-8 m-3 m-md-0 fw-600'>
                                            <p className='text-uppercase  m-0'>
                                                <i className="fa-sharp fa-solid fa-cart-shopping me-3" />
                                                add to cart
                                            </p>
                                        </div>

                                        <div className='col-auto product-card-text s-0-8 fw-600' >
                                            <p className='text-uppercase  m-0'>
                                                <i className="fa-solid fa-shuffle  me-3" />
                                                add to compare
                                            </p>
                                        </div>



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    )
}

export default Allproducts