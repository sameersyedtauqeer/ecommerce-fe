import React from 'react'
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/Images/logo.png'
import logolight from "../../assets/Images/Background.svg";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/Slices/authSlice';
import { removeAllCart } from '../../Redux/Slices/cartSlice';
// import NavDropdown from 'react-bootstrap/NavDropdown';


const Layout = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { token, user } = useSelector((state) => state.auth)

    console.log("token ========= ", token)
    console.log("user ========= ", user)
    const handleLogout = () => {
        dispatch(removeAllCart())
        dispatch(logout())
        navigate("/")

    }

    const location = useLocation()
    // console.log("location ", location)

    const itemInCart = useSelector((state) => state.cart)
    const itemInfav = useSelector((state) => state.favItems)
    // console.log("itemInCart", itemInCart?.cart?.length)

    const cartLength = itemInCart?.cart?.length;
    const favLength = itemInfav?.favItemsList?.length;



    return (
        <>
            {/* Header start */}

            {/* <section className='header-top'>
                <div className="container-fluid ps-md-5 pe-md-5">
                    <div className="row align-items-center">
                        <div className='col-4 pt-3 pb-3'>
                            <div className="row">
                                <div className="col-1">
                                    <i className="fa-brands fa-facebook-f icon-color" />

                                </div>
                                <div className="col-1">
                                    <i className="fa-brands fa-twitter icon-color" />

                                </div>
                                <div className="col-1">
                                    <i className="fa-brands fa-instagram icon-color" />

                                </div>
                                <div className="col-1">
                                    <i className="fa-brands fa-linkedin-in icon-color" />

                                </div>

                                <div className="col-1">
                                    <a href="https://www.tiktok.com/@petacare_company?_t=8WcACxC3HRK&_r=1">
                                        <i className="fa-brands fa-tiktok icon-color" />
                                    </a>
                                </div>

                                <div className="col-1">
                                    <a href="https://youtu.be/MPRKwy1NSnc" target="_blank">
                                        <i className="fa-brands fa-youtube icon-color"></i>
                                    </a>
                                </div>

                            </div>
                        </div>

                        <div className='col-8 '>
                            <div className='row justify-content-end'>
                                <div className="col-auto ">
                                    <Link to='#' className='headerLink fw-500 text-color s-14  m-0' >
                                        Download App
                                    </Link>
                                </div>
                                <div className="col-auto text-color s-34">
                                    |
                                </div>
                                <div className="col-auto ">
                                    <Link to='/cart' className='headerLink fw-500 text-color s-14  m-0' >
                                        Shopping Cart
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </section> */}

            <section className='header-top'>
                <div className="container-fluid ps-md-5 pe-md-5">
                    <div className="row align-items-center">
                        <div className='col-4 pt-3 pb-3'>
                            <div className="row">
                                <div className="col-1">
                                    <i className="fa-brands fa-facebook-f icon-color" />

                                </div>
                                <div className="col-1">
                                    <i className="fa-brands fa-twitter icon-color" />

                                </div>
                                <div className="col-1">
                                    <i className="fa-brands fa-instagram icon-color" />

                                </div>
                                <div className="col-1">
                                    <i className="fa-brands fa-linkedin-in icon-color" />

                                </div>

                                <div className="col-1">
                                    <a href="https://www.tiktok.com/@petacare_company?_t=8WcACxC3HRK&_r=1">
                                        <i className="fa-brands fa-tiktok icon-color" />
                                    </a>
                                </div>

                                <div className="col-1">
                                    <a href="https://youtu.be/MPRKwy1NSnc" target="_blank">
                                        <i className="fa-brands fa-youtube icon-color"></i>
                                    </a>
                                </div>

                            </div>
                        </div>

                        <div className='col-8 '>
                            <div className='row justify-content-end'>
                                <div className="col-auto ">
                                    <Link to='/favourite-products' className='headerLink fw-500 text-color s-14  m-0' >

                                        <div className="position-relative">

                                            <i className="fa-solid fa-heart " style={{ fontSize: "28px" }} />

                                            <div className="position-absolute top-0 start-100 translate-middle">

                                                <span className='text-light bg-danger d-flex justify-content-center align-items-center rounded-circle ' style={{ width: "18px", height: " 18px", fontSize: "14px" }}>
                                                    {favLength}
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-auto text-color s-34">
                                    |
                                </div>
                                <div className="col-auto ">
                                    <Link to='/cart' className='headerLink fw-500 text-color s-14  m-0' >
                                        <div className="position-relative">

                                            <i className="fa-solid fa-cart-shopping " style={{ fontSize: "28px" }} />

                                            <div className="position-absolute top-0 start-100 translate-middle">

                                                <span className='text-light bg-danger d-flex justify-content-center align-items-center rounded-circle '
                                                    style={{ width: "18px", height: " 18px", fontSize: "14px" }}>
                                                    {cartLength}
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </section>

            <section>
                <div className="container-fluid">

                    <Navbar collapseOnSelect expand="lg" bg="white" className='p-0 nav-bar' variant="light">
                        <Navbar.Brand href="#home" className=' col-md-3  col-4'>
                            <img src={logo} alt="" width="100%" className='p-3' />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end '>

                            <Nav className='header-menu'>
                                <Link to="/" className={` p-md-3  mt-2 ${location?.pathname == '/' ? 'active active-nav-text ' : ''}`}>HOME</Link>

                                {/* <Link to="/about" className={`pt-3 pb-0 p-md-3  mt-2 ${location?.pathname == '/about' ? 'active active-nav-text ' : ''}`}>
                                    ABOUT
                                </Link> */}





                                <Link to="/product" className={` pt-3 pb-0 p-md-3  mt-2 ${location?.pathname == '/product' ? 'active active-nav-text ' : ''}`}>
                                    PRODUCTS
                                </Link>

                                {/* <Link to="/pricing" className={` pt-3 pb-0 p-md-3  mt-2 ${location?.pathname == '/pricing' ? 'active active-nav-text ' : ''}`}>
                                    PRICING
                                </Link> */}

                                {
                                    token === "" ?
                                        <>
                                            <Link to="/login" className={` pt-3 pb-0 p-md-3  mt-2 signin-text ${location?.pathname == '/login' ? 'active active-nav-text ' : ''}`}>
                                                Sign In
                                            </Link>

                                            <Link className='p-3' to="/registration" >
                                                <button className='btn-pill border-0 rounded-pill px-md-4 py-2  '>

                                                    Register
                                                </button>
                                            </Link>
                                        </>
                                        :
                                        <>
                                            <div className='py-3'>

                                                <NavDropdown align="start" title={`${user?.user_name}`} id="collapsible-nav-dropdown">
                                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.2">
                                                        Another action
                                                    </NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                                    <NavDropdown.Divider />
                                                    <NavDropdown.Item onClick={handleLogout}>
                                                        {/* <button  className='btn-pill border-0 rounded-pill px-md-4 py-2  '> */}
                                                        logout
                                                        {/* </button> */}
                                                    </NavDropdown.Item>
                                                </NavDropdown>

                                            </div>
                                        </>
                                }







                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>

            </section>


            {/* Header End */}

            {/* outlet Start */}

            <div>
                <Outlet />
            </div>

            {/* outlet End*/}

            {/* Footer Start */}
            <section className='footer'>
                <div className='container pt-3 pb-3'>
                    <div className='row'>
                        <div className='col-3'>
                            <img width="100%" className=' pt-0 p-4 ps-0' src={logolight} alt="" />

                            <div className="list-group ">


                                <div className="row text-white  ">
                                    <div className="col-1 footer-para">
                                        <i className="fa-solid fa-location-dot" />

                                    </div>
                                    <div className="col-10 footer-para">
                                        <p className=' '>400 N. Eravy Street #130815 Dollas, Texas 75313</p>
                                    </div>
                                </div>

                                <div className="row text-white ">
                                    <div className="col-1   footer-para">
                                        <i className="fa-sharp fa-solid fa-envelope " />

                                    </div>
                                    <div className="col-10  footer-para">
                                        <p className='p-0'> Mail: info@petacare.com</p>
                                    </div>
                                </div>

                                <div className="row mt-2">
                                    <div className="col-1">
                                        <i className="fa-brands fa-facebook-f icon-color footer-para" />

                                    </div>
                                    <div className="col-1">
                                        <i className="fa-brands fa-twitter icon-color footer-para" />

                                    </div>
                                    <div className="col-1">
                                        <i className="fa-brands fa-instagram icon-color footer-para" />

                                    </div>
                                    <div className="col-1">
                                        <i className="fa-brands fa-linkedin-in icon-color footer-para" />

                                    </div>

                                    <div className="col-1">
                                        <a href="https://www.tiktok.com/@petacare_company?_t=8WcACxC3HRK&_r=1" target="_blank">
                                            <i className="fa-brands fa-tiktok icon-color footer-para" />
                                        </a>
                                    </div>

                                    <div className="col-1">
                                        <a href="https://youtu.be/MPRKwy1NSnc" target="_blank">
                                            <i className="fa-brands fa-youtube icon-color footer-para"></i>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='col-3'>
                            <div className=''>
                                <h5 className='text-white p-md-3 footer-heading'>Quick Links</h5>
                                <ul className="list-group pt-2 ">

                                    <li className="list-group-item bg-transparent border-0 ">
                                        <Link className='footer-links ' to="#">Download App</Link>
                                    </li>
                                    <li className="list-group-item bg-transparent border-0 ">

                                        <Link className='footer-links ' to="/about">About Us</Link>

                                    </li>
                                    <li className="list-group-item bg-transparent border-0 ">
                                        <Link className='footer-links ' to="/news-&-events">News & Events</Link>


                                    </li>
                                    <li className="list-group-item bg-transparent border-0 ">
                                        <Link className='footer-links ' to="/terms-&-conditions">Terms & Conditions</Link>


                                    </li>
                                    <li className="list-group-item bg-transparent border-0 ">
                                        <Link className='footer-links ' to="/privacypolicy">  Privacy Policy</Link>


                                    </li>
                                    <li className="list-group-item bg-transparent border-0 ">
                                        <Link className='footer-links ' to="/contact">Contact Us</Link>

                                    </li>

                                    <li className="list-group-item bg-transparent border-0 ">
                                        <Link className='footer-links ' to="/blog">Blog</Link>

                                    </li>

                                </ul>
                            </div>


                        </div>

                        <div className='col-3'>
                            <div className=''>
                                <h5 className='text-white p-md-3 footer-heading'>Services</h5>
                                <ul className="list-group pt-2 ">
                                    <li className="list-group-item bg-transparent border-0 ">
                                        <Link className='footer-links ' to="3">Pet DNA Identification Testing</Link>

                                    </li>
                                    <li className="list-group-item bg-transparent border-0 ">
                                        <Link className='footer-links ' to="3">TailAVet - Vetenary Video Conferencing</Link>


                                    </li>
                                    <li className="list-group-item bg-transparent border-0 ">
                                        <Link className='footer-links ' to="pet-concierge">Pet Concierage Service</Link>


                                    </li>
                                    <li className="list-group-item bg-transparent border-0 ">
                                        <Link className='footer-links ' to="/pet-wellness-plan">
                                            Pet Wellness Plan
                                        </Link>

                                    </li>
                                    <li className="list-group-item bg-transparent border-0 ">
                                        <Link className='footer-links ' to="3">Pet Management Software</Link>


                                    </li>
                                    <li className="list-group-item bg-transparent border-0 ">
                                        <Link className='footer-links ' to="lost-and-found-zone">Lost & Found Tracking</Link>


                                    </li>

                                </ul>
                            </div>

                        </div>

                        <div className="col-3">
                            <h5 className='text-white pt-md-3 pb-md-3 footer-heading'>
                                Subscribe</h5>
                            <div className='pt-3'>
                                <p className='text-color footer-links '>Subscribe our newsletter to get latest news update</p>
                            </div>

                            <Form >
                                <Form.Group className="mb-3 input-style" controlId="formBasicEmail">
                                    <Form.Control type="email" className='rounded-pill  p-md-3  bg-input text-white border-0' placeholder="Enter email" />

                                </Form.Group>

                                <button className='btn-pill btn-font border-0 rounded-pill px-md-5 py-md-3 '>SUBSCRIBE</button>
                            </Form>

                        </div>
                    </div>

                    {/* <div className="row mt-3">
                        <div className="col-6">

                        </div>

                        <div className="col-6">

                        </div>

                        <div className="col-6">

                        </div>

                        <div className="col-6">

                        </div>
                    </div> */}
                </div>


            </section>
            {/* Footer End */}




        </>
    )
}

export default Layout