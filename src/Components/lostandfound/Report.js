import React from 'react'
import Form from 'react-bootstrap/Form';


const Report = () => {
    return (
        <>

            {/* contact pet owner */}
            <section className='report'>
                <div className='container'>
                    <div className='row mb-5'>
                        <div className='col-md-12'>


                            <div className="card text-center border-0 card-shadow">
                                <h4 className="card-header text-capitalize p-4  text-start fw-600">
                                    contact pet owner
                                </h4>
                                <div className="card-body text-start">
                                    <p className="card-text fw-600">If the found pet has a petacare tag with (www.petacare.com) on the back you can lookup owner.</p>
                                    <div className="card-text s-16 fw-600 pt-4">
                                        <i className="fa-solid fa-circle-check bg-text me-2 "></i>
                                        Step 1: Locate tag code

                                        <button type="" className='ms-4 btn-pill px-md-4 py-md-3 rounded-pill border-0'>
                                            Show me where the code is
                                        </button>
                                    </div>

                                    <div className="card-text s-16 fw-600  pt-5 ">
                                        <i className="fa-solid fa-circle-check bg-text me-2 "></i>
                                        Step 2: Enter code below & click "Find the Owner"


                                    </div>

                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <Form className='pt-5'>
                                                <div className="row justify-content-center">
                                                    <div className="">
                                                        <Form.Group className="mb-3 text-grey d-flex align-items-center rounded border p-2" controlId="formBasicUserName">
                                                            <i className="fa-sharp fa-solid fa-lock"></i>

                                                            <Form.Control type="text" className='border-0 ' placeholder="Enter Tag Code" />

                                                        </Form.Group>
                                                    </div>

                                                    <div className="">
                                                        <Form.Group className="mb-3 text-grey d-flex align-items-center rounded border p-2" controlId="formBasicEmail">
                                                            <i className="fa-solid fa-user"></i>
                                                            <Form.Control type="name" className='border-0 ' placeholder="User Name" />

                                                        </Form.Group>
                                                    </div>

                                                    <div className="">
                                                        <Form.Group className="mb-3 text-grey d-flex align-items-center rounded border p-2" controlId="formBasicPhone">
                                                            <i className="fa-solid fa-phone"></i>
                                                            <Form.Control type="name" className='border-0 ' placeholder="Your Phone Number" />

                                                        </Form.Group>
                                                    </div>



                                                    <div className="">
                                                        <Form.Group className="mb-3 text-grey d-flex align-items-center rounded border p-2" controlId="formBasicNote">
                                                            <i className="fa-solid fa-phone"></i>

                                                            <Form.Control type="name" className='border-0 ' placeholder="Note" />

                                                        </Form.Group>
                                                    </div>
                                                    <div className="">
                                                        <Form.Group className="mb-3 text-grey d-flex align-items-center text-center rounded border p-5" controlId="formBasicNote">

                                                            <Form.Control type="name" className='border-0 text-center ' placeholder="Upload Pet Photo" />

                                                        </Form.Group>
                                                    </div>
                                                </div>
                                            </Form>
                                        </div>
                                    </div>


                                </div>
                                <div className="card-footer text-white bg-red fw-600 text-uppercase p-4">
                                    Find pet owner
                                </div>
                            </div>

                            <div className="card text-center border-0 card-shadow mt-5">
                                <h4 className="card-header text-capitalize p-4  text-start fw-600 ">
                                    unable to contact owner form?
                                </h4>
                                <div className="card-body text-start">
                                    <p className="card-text fw-600">If pet unable to contact or find pet owner contact using the 'locate pet owner' tool above.</p>
                                    <p className="card-text fw-600">Complete the below forms & we will atempt to locate & notify the owner</p>

                                    <div className='pt-3'>
                                        <h5 className='bg-text'>
                                            Finders Details
                                        </h5>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <Form className='pt-2'>
                                                <div className="row justify-content-center">
                                                    <div className="">
                                                        <Form.Group className="mb-3 text-grey d-flex align-items-center rounded border p-2" controlId="formBasicUserName">
                                                            <i className="fa-sharp fa-solid fa-lock"></i>

                                                            <Form.Control type="text" className='border-0 ' placeholder="Finder's Name" />

                                                        </Form.Group>
                                                    </div>

                                                    <div className="">
                                                        <Form.Group className="mb-3 text-grey d-flex align-items-center rounded border p-2" controlId="formBasicEmail">
                                                            <i className="fa-solid fa-user"></i>
                                                            <Form.Control type="name" className='border-0 ' placeholder="Pet ID Tag Code" />

                                                        </Form.Group>
                                                    </div>

                                                    <div className="">
                                                        <Form.Group className="mb-3 text-grey d-flex align-items-center rounded border p-2" controlId="formBasicPhone">
                                                            <i className="fa-solid fa-phone"></i>
                                                            <Form.Control type="name" className='border-0 ' placeholder="Date" />

                                                        </Form.Group>
                                                    </div>



                                                    <div className="">
                                                        <Form.Group className="mb-3 text-grey d-flex align-items-center rounded border p-2" controlId="formBasicNote">
                                                            <i className="fa-solid fa-phone"></i>

                                                            <Form.Control type="name" className='border-0 ' placeholder="Email" />

                                                        </Form.Group>
                                                    </div>

                                                    <div className="">
                                                        <Form.Group className="mb-3 text-grey d-flex align-items-center rounded border p-2" controlId="formBasicEmail">
                                                            <i className="fa-solid fa-user"></i>
                                                            <Form.Control type="name" className='border-0 ' placeholder="Location" />

                                                        </Form.Group>
                                                    </div>

                                                    <div className="">
                                                        <Form.Group className="mb-3 text-grey d-flex align-items-center rounded border p-2" controlId="formBasicPhone">
                                                            <i className="fa-solid fa-phone"></i>
                                                            <Form.Control type="name" className='border-0 ' placeholder="City" />

                                                        </Form.Group>
                                                    </div>



                                                    <div className="">
                                                        <Form.Group className="mb-3 text-grey d-flex align-items-center rounded border p-2" controlId="formBasicNote">
                                                            <i className="fa-solid fa-phone"></i>

                                                            <Form.Control type="name" className='border-0 s-16' placeholder="Number" />

                                                        </Form.Group>
                                                    </div>

                                                </div>
                                            </Form>
                                        </div>
                                    </div>


                                    <div className='pt-3'>
                                        <h5 className='bg-text'>
                                            Finders Details
                                        </h5>
                                    </div>

                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <Form className='pt-2'>
                                                <div className="row justify-content-center">
                                                    <div className="">
                                                        <Form.Group className="mb-3 text-grey d-flex align-items-center rounded border p-2" controlId="formBasicUserName">
                                                            <i className="fa-sharp fa-solid fa-lock"></i>

                                                            <Form.Control type="text" className='border-0 ' placeholder="Pet Type (Dog or Cat)" />

                                                        </Form.Group>
                                                    </div>

                                                    <div className="">
                                                        <Form.Group className="mb-3 text-grey d-flex align-items-center rounded border p-2" controlId="formBasicEmail">
                                                            <i className="fa-solid fa-user"></i>
                                                            <Form.Control type="name" className='border-0 ' placeholder="Breed" />

                                                        </Form.Group>
                                                    </div>

                                                    <div className="">
                                                        <Form.Group className="mb-3 text-grey d-flex align-items-center rounded border p-2" controlId="formBasicPhone">
                                                            <i className="fa-solid fa-phone"></i>
                                                            <Form.Control type="name" className='border-0 ' placeholder="Color" />

                                                        </Form.Group>
                                                    </div>

                                                </div>
                                            </Form>
                                        </div>
                                    </div>


                                </div>
                                <div className="card-footer text-white bg-red fw-600 text-uppercase p-4">
                                    Report pet lost
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Report