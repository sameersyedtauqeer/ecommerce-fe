import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AdminSettingScreen = () => {
    return (
        <>


            <div className="container">
                <div className="row">
                    <h5 className='fw-600'>
                        Admin Setting
                    </h5>
                    <div className="col-12 mt-3" >
                        <div className="card border-0 shadow ">
                            <div className="card-header">
                                Add Delivery Charges
                            </div>

                            <div className="card-body">


                                <Form>

                                    <div className="row align-items-end">
                                        <div className="col">


                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Enter Delivery charges</Form.Label>
                                                <Form.Control type="email" placeholder="Enter email" />
                                            </Form.Group>
                                        </div>
                                        <div className="col-auto ">

                                            <Button variant="primary" type="submit">
                                                Submit
                                            </Button>
                                        </div>
                                    </div>
                                </Form>

                            </div>

                            <div className="card-footer">
                                <span>
                                    Current Delivery Charges :
                                </span>
                                <span>
                                    {" "}
                                    50
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminSettingScreen