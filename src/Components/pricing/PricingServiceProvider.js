import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const PricingServiceProvider = () => {
    return (
        <>
            {/*pricing for service provider  start*/}

            <div className='container-fluid'>
                <div className='row mt-5'>
                    <div className='col-md-12'>
                        <h1 className='text-center fw-600 text-capitalize'>Pricing plan for service provider </h1>
                    </div>
                </div>

                <div className='row mt-5 justify-content-around'>
                    <div className='col-md-4 col-lg-3 '>
                        <Card className="text-center  border-0 card-shadow rounded-0 h-100"  >
                            <Card.Body className='bg-yellow text-white p-4 h-100'>
                                <Card.Title className='s-42 fw-600imp'>$9.99</Card.Title>
                                <Card.Title className='s-24 fw-600imp'>Monthly</Card.Title>


                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card'>Fee covers monthly banner and advertisement</ListGroup.Item>
                                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card'>exclusive non bidding process</ListGroup.Item>
                                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card'>receive priority lead distribution to all members</ListGroup.Item>
                                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card'>confirms customers referrals delivered immediately through email or text </ListGroup.Item>
                                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card border-bottom'>direct access to a+ and b rated properties </ListGroup.Item>

                            </ListGroup>
                            <Card.Body>
                                <ListGroup.Item className=' text-capitalize fw-500  s-15 pricing-card'>monthly marketing opportunities and events to meet customers and showcase services</ListGroup.Item>

                                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card'>
                                    <button className='btn-pill px-md-5 py-md-2 rounded-pill border-0 text-uppercase' type="">subscribe</button>
                                </ListGroup.Item>

                                <Card.Link className='btn-pill' href="#"></Card.Link>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='col-md-4 col-lg-3 pt-5 pt-md-0'>
                        <Card className="text-center  border-0 card-shadow rounded-0 h-100" >
                            <Card.Body className='bg-warn text-white p-4 h-100'>
                                <Card.Title className='s-42 fw-600imp'>$28.99</Card.Title>
                                <Card.Title className='s-24 fw-600imp'>Quarterly</Card.Title>


                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card'>Fee covers monthly banner and advertisement</ListGroup.Item>
                                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card'>exclusive non bidding process</ListGroup.Item>
                                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card'>receive priority lead distribution to all members</ListGroup.Item>
                                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card'>confirms customers referrals delivered immediately through email or text </ListGroup.Item>
                                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card border-bottom'>direct access to a+ and b rated properties </ListGroup.Item>

                            </ListGroup>
                            <Card.Body>
                                <ListGroup.Item className=' text-capitalize fw-500  s-15 pricing-card'>monthly marketing opportunities and events to meet customers and showcase services</ListGroup.Item>

                                <ListGroup.Item className='p-3 text-capitalize '>
                                    <button className='btn-pill px-md-5 py-md-2 rounded-pill border-0 text-uppercase' type="">subscribe</button>
                                </ListGroup.Item>

                                <Card.Link className='btn-pill' href="#"></Card.Link>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='col-md-4 col-lg-3 pt-5 pt-md-0' >
                        <Card className="text-center  border-0 card-shadow rounded-0 h-100" >
                            <Card.Body className='bg-green text-white p-4 h-100'>
                                <Card.Title className='s-42 fw-600imp'>$99.99</Card.Title>
                                <Card.Title className='s-24 fw-600imp'>Yearly</Card.Title>


                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card'>Fee covers monthly banner and advertisement</ListGroup.Item>
                                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card'>exclusive non bidding process</ListGroup.Item>
                                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card'>receive priority lead distribution to all members</ListGroup.Item>
                                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card'>confirms customers referrals delivered immediately through email or text </ListGroup.Item>
                                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card border-bottom'>direct access to a+ and b rated properties </ListGroup.Item>

                            </ListGroup>
                            <Card.Body>
                                <ListGroup.Item className=' text-capitalize fw-500  s-15 pricing-card'>monthly marketing opportunities and events to meet customers and showcase services</ListGroup.Item>

                                <ListGroup.Item className='p-3 text-capitalize '>
                                    <button className='btn-pill px-md-5 py-md-2 rounded-pill border-0 text-uppercase' type="">subscribe</button>
                                </ListGroup.Item>

                                <Card.Link className='btn-pill' href="#"></Card.Link>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='col-md-4 col-lg-3 pt-5 pt-md-5 pt-lg-0  '>
                        <Card className="text-center  border-0 card-shadow rounded-0 h-100" >
                            <Card.Body className='bg-orange text-white p-4 h-100'>
                                <Card.Title className='s-42 '>$199.99</Card.Title>
                                <Card.Title className='s-24 fw-600imp'>Exclusive Yearly</Card.Title>


                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card'>Fee covers monthly banner and advertisement</ListGroup.Item>
                                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card'>exclusive non bidding process</ListGroup.Item>
                                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card'>receive priority lead distribution to all members</ListGroup.Item>
                                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card'>confirms customers referrals delivered immediately through email or text </ListGroup.Item>
                                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card border-bottom'>direct access to a+ and b rated properties </ListGroup.Item>

                            </ListGroup>
                            <Card.Body>
                                <ListGroup.Item className=' text-capitalize fw-500  s-15 pricing-card'>monthly marketing opportunities and events to meet customers and showcase services</ListGroup.Item>

                                <ListGroup.Item className='p-3 text-capitalize'>
                                    <button className='btn-pill px-md-5 py-md-2 rounded-pill border-0 text-uppercase' type="">subscribe</button>
                                </ListGroup.Item>

                                <Card.Link className='btn-pill' href="#"></Card.Link>
                            </Card.Body>
                        </Card>
                    </div>

                </div>

            </div>

            {/*pricing for property manager start*/}
        </>
    )
}

export default PricingServiceProvider