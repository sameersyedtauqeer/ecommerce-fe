import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const Index = () => {
  return (
    <section className='lostfoundForm'>
                <div className='container'>
                    <div className='row mt-5 mb-5'>
                        <div className='col-md-12'>
                            <h1 className='pt-3 pb-3 fw-600'>Welcome to lost and found zone</h1>

                            <h4 className=' pb-3 bg-text text-capitalize fw-600 s-19 '>emergency contact information</h4>

                            <Form className='lostandfount'>
                                <Form.Group className="mb-3 d-flex align-items-center border p-2 rounded-3 " controlId="">
                                    <i className="fa-solid fa-lock ms-2 text-color" />
                                    <Form.Control type="text" className='border-0 ' placeholder="Enter Tag Code" />

                                </Form.Group>

                                <Form.Group className="mb-3 d-flex align-items-center border p-2 rounded-3" controlId="">
                                    <i className="fa-solid fa-user ms-2 text-color"></i>
                                    <Form.Control type="text" className='border-0' placeholder="Name" />

                                </Form.Group>

                                <Form.Group className="mb-3 d-flex align-items-center border p-2 rounded-3" controlId="">
                                    <i className="fa-solid fa-phone ms-2 text-color"></i>
                                    <Form.Control type="text" className='border-0' placeholder="Phone Number" />

                                </Form.Group>

                                <Form.Group className="mb-3 d-flex align-items-center border p-2 rounded-3" controlId="">
                                    <i className="fa-solid fa-clipboard ms-2 text-color"></i>
                                    <Form.Control type="text" className='border-0' placeholder="Note" />

                                </Form.Group>

                                <button className='btn-pill text-uppercase border-0 w-100 p-3 s-17 rounded mb-3' type="">
                                    Find pet owner

                                </button>

                                <button className='btn-pill-dark text-uppercase border-0 w-100 p-3 s-17 rounded' type="">
                                    report a pet lost

                                </button>


                            </Form>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default Index