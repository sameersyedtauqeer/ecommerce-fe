import React from 'react'
import noworries from "../../assets/Images/noworries.png";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ParticipateCDC = () => {
    return (
        <section className='bg-login'>
            <div className='container'>
                <div className="row justify-content-center mt-5 mb-5">
                    <div className="col-md-6 ">
                        <div className='card text-center border-0 card-shadow p-5'>
                            <div>
                                <h3>Participate in Cute Dog Contest</h3>
                            </div>

                            <div className='mt-3'>
                                <img src={noworries} alt="" />
                                <p className='text-grey pt-2'>Upload Dog Photo</p>
                            </div>


                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Control type="text" className='p-3' placeholder="Full Name" />

                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPetName">
                                    <Form.Control type="text" className='p-3' placeholder="Pet Name" />

                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicAddress">
                                    <Form.Control type="text" className='p-3' placeholder="Address" />

                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" className='p-3' placeholder="Email" />

                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPhoneNo">
                                    <Form.Control type="text" className='p-3' placeholder="Phone No." />

                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Select id="disabledSelect"  className='p-3'>
                                        <option>Social Media Link</option>
                                        <option>Disabled select</option>
                                        <option>Disabled select</option>
                                        <option>Disabled select</option>

                                    </Form.Select>
                                </Form.Group>

                                <p className='s-18 blue-link'>https://www.facebook.com/petacare</p>
                                <p className='s-18 bg-text'>https://www.instagram.com/petacare</p>

                                <button type="" className='w-100 btn-pill rounded-pill px-md-4 py-md-3 border-0 text-uppercase'>participate</button>

                            </Form>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    )
}

export default ParticipateCDC