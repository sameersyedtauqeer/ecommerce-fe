import React, { useState } from "react";

import Form from 'react-bootstrap/Form';
import facebook from "../../assets/Images/SOCIAL-03.svg";
import insta from "../../assets/Images/SOCIAL-04.svg";
import twitter from "../../assets/Images/SOCIAL-05.svg";
import linkedin from "../../assets/Images/SOCIAL-06.svg";
import { postData } from "../../ApiConstant/api";
import { toast } from "react-toastify";
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

const RegistrationScreen = () => {

    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [password, setPassword] = useState("")

    const handleRegistration = (e) => {
        e.preventDefault()
        const body = {
            userName,
            email,
            phone,
            address,
            password
        }

        postData("signup", body)
            .then((res) => {
                Toast.fire({
                    icon: 'success',
                    title: res?.message
                })
                setUserName("")
                setEmail("")
                setPhone("")
                setAddress("")
                setPassword("")
                if (res?.status === 401) {
                    console.log('res', res)
                    Toast.fire({
                        icon: 'error',
                        title: res?.message
                    })

                }

                // toast.success(res?.message)
            })
            .catch((err) => {
                console.log('err', err)


            })

    }

    return (
        <>
            <section className='bg-registration'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className='col-md-7'>

                            <div className='card br-10 border-0 card-shadow mt-5 mb-5'>
                                <div className="triangle-topleft">
                                </div>
                                <div className='text-center '>
                                    <h1 className=' fw-600'>Registration</h1>
                                </div>
                                <Form className='p-5' onSubmit={handleRegistration}>
                                    <div className="row justify-content-center">

                                        <div className="col-md-10">
                                            <label htmlFor="" className="fw-600 s-12">User Name</label>
                                            <Form.Group className="mb-3 br-5 text-grey p-2 d-flex align-items-center border" controlId="formBasicName">
                                                <i className="fa-solid fa-user"></i>
                                                <Form.Control type="text"
                                                    value={userName}
                                                    onChange={(e) => setUserName(e.target.value)}
                                                    className='border-0 ' placeholder="User Name" />

                                            </Form.Group>
                                        </div>

                                        <div className="col-md-10">
                                            <label htmlFor="" className="fw-600 s-12">Email</label>

                                            <Form.Group className="mb-3 br-5 text-grey p-2 d-flex align-items-center border" controlId="formBasicEmail">
                                                <i className="fa-solid fa-envelope" />
                                                <Form.Control type="email" className='border-0 ' placeholder="Email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)} />

                                            </Form.Group>
                                        </div>

                                        <div className="col-md-10">

                                            <label htmlFor="" className="fw-600 s-12">Phone</label>

                                            <Form.Group className="mb-3 br-5 text-grey p-2 d-flex align-items-center border" controlId="formBasicPhone">
                                                <i className="fa-solid fa-phone" />
                                                <Form.Control type="tel" className='border-0 ' placeholder="Phone No."
                                                    value={phone}
                                                    onChange={(e) => setPhone(e.target.value)}
                                                />

                                            </Form.Group>
                                        </div>

                                        {/* <div className="col-md-10">

                                            <Form.Group className="mb-3 br-5 text-grey p-2 d-flex align-items-center border" controlId="formBasicEmail">
                                                <i className="fa-sharp fa-solid fa-chart-line"></i>
                                                <Form.Control type="text" className='border-0 ' placeholder="Business Name" />

                                            </Form.Group>
                                        </div> */}

                                        <div className="col-md-10">

                                            <label htmlFor="" className="fw-600 s-12">Address</label>

                                            <Form.Group className="mb-3 br-5 text-grey p-2 d-flex align-items-center border" controlId="formBasicAddress">
                                                <i className="fa-solid fa-location-dot"></i>
                                                <Form.Control type="text" className='border-0 ' placeholder="Location"
                                                    value={address}
                                                    onChange={(e) => setAddress(e.target.value)}
                                                />

                                            </Form.Group>
                                        </div>

                                        <div className="col-md-10">
                                            <label htmlFor="" className="fw-600 s-12">Password</label>

                                            <Form.Group className="mb-3 br-5 text-grey p-2 d-flex align-items-center border" controlId="formBasicPassword">
                                                <i className="fa-sharp fa-solid fa-lock"></i>
                                                <Form.Control type="password" className='border-0 ' placeholder="Password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)} />

                                            </Form.Group>
                                        </div>

                                        {/* <div className="col-md-10">

                                            <label htmlFor="" className="fw-600 s-12">Re-Type Password</label>
                                            <Form.Group className="mb-3 text-grey p-2 br-5 d-flex align-items-center border" controlId="formBasicPassword">
                                                <i className="fa-sharp fa-solid fa-lock"></i>
                                                <Form.Control type="password" className='border-0 ' placeholder="Confirm Password" />

                                            </Form.Group>
                                        </div> */}



                                        <div className="col-md-10 mt-5">
                                            <button type="submit" className='btn-pill rounded-pill px-4 py-3 border-0 w-100'> LOG IN</button>
                                        </div>

                                        <div className='text-center mt-4 '>
                                            <p className='text-capitalize fw-500'>Already Member? <span className='bg-text fw-600'>Log In</span></p>
                                        </div>

                                        <div className='text-center'>
                                            <div className="row justify-content-center">
                                                <div className="col-md-1 p-0">
                                                    <img className='p-2' width='100%' src={facebook} alt="" />

                                                </div>

                                                <div className="col-md-1 p-0">
                                                    <img className='p-2' width='100%' src={insta} alt="" />

                                                </div>


                                                <div className="col-md-1 p-0">
                                                    <img className='p-2' width='100%' src={linkedin} alt="" />

                                                </div>

                                                <div className="col-md-1 p-0">
                                                    <img className='p-2' width='100%' src={twitter} alt="" />

                                                </div>

                                            </div>

                                        </div>

                                    </div>





                                </Form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}


export default RegistrationScreen