import React from 'react'

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const PricingPetOwner = () => {
  return (
    <>
      {/*pricing for pet owners  start*/}

      <div className='container'>
        <div className='row mt-5'>
          <div className='col-md-12'>
            <h1 className='text-center fw-600 text-capitalize'>Pricing plan for pet parents</h1>
          </div>
        </div>

        <div className='row mt-5 justify-content-around text-center'>
          <div className='col-md-4 ' style={{width:'23rem'}}>
            <Card className="text-center  border-0 card-shadow rounded-0" >
              <Card.Body className='bg-yellow text-white p-4'>
                <Card.Title className='s-42 fw-600imp'>$1.00</Card.Title>
                <Card.Title className='s-24 fw-600imp'>Monthly</Card.Title>


              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card'>Pet DNA Testing Services</ListGroup.Item>
                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card'>Pet Wellness Plan</ListGroup.Item>
                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card'>Pet Concierge Services</ListGroup.Item>
                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card'>QR Code GEO Tracking </ListGroup.Item>
                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card border-bottom'>Pet Passport Document Storage & Sharing</ListGroup.Item>

              </ListGroup>
              <Card.Body>
                <ListGroup.Item className=' text-capitalize fw-500 s-15'>vital document storage & sharing</ListGroup.Item>

                <ListGroup.Item className='p-3 text-capitalize '>
                  <button className='btn-pill px-md-5 py-md-2 rounded-pill border-0 text-uppercase ' type="">Become A Member </button>
                </ListGroup.Item>

                <Card.Link className='btn-pill' href="#"></Card.Link>
              </Card.Body>
            </Card>
          </div>

          <div className='col-md-4 pt-5 pt-md-0' style={{width:'23rem'}}>
            <Card className="text-center  border-0 card-shadow rounded-0" >
              <Card.Body className='bg-warn text-white p-4'>
                <Card.Title className='s-42 fw-600imp'>$2.75</Card.Title>
                <Card.Title className='s-24 fw-600imp'>Quarterly</Card.Title>


              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card'>Pet DNA Testing Services</ListGroup.Item>
                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card'>Pet Wellness Plan</ListGroup.Item>
                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card'>Pet Concierge Services</ListGroup.Item>
                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card'>QR Code GEO Tracking </ListGroup.Item>
                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card border-bottom'>Pet Passport Document Storage & Sharing</ListGroup.Item>

              </ListGroup>
              <Card.Body>
                <ListGroup.Item className=' text-capitalize fw-500 s-15'>vital document storage & sharing</ListGroup.Item>

                <ListGroup.Item className='p-3 text-capitalize '>
                  <button className='btn-pill px-md-5 py-md-2 rounded-pill border-0 text-uppercase ' type="">Become A Member </button>
                </ListGroup.Item>

                <Card.Link className='btn-pill' href="#"></Card.Link>
              </Card.Body>
            </Card>
          </div>

          <div className='col-md-4 pt-5 pt-md-0' style={{width:'23rem'}}>
            <Card className="text-center  border-0 card-shadow rounded-0" >
              <Card.Body className='bg-green text-white p-4'>
                <Card.Title className='s-42 fw-600imp'>$10.00</Card.Title>
                <Card.Title className='s-24 fw-600imp'>Yearly</Card.Title>


              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card'>Pet DNA Testing Services</ListGroup.Item>
                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card'>Pet Wellness Plan</ListGroup.Item>
                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card'>Pet Concierge Services</ListGroup.Item>
                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card'>QR Code GEO Tracking </ListGroup.Item>
                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card border-bottom'>Pet Passport Document Storage & Sharing</ListGroup.Item>

              </ListGroup>
              <Card.Body>
                <ListGroup.Item className=' text-capitalize fw-500 s-15'>vital document storage & sharing</ListGroup.Item>

                <ListGroup.Item className='p-3 text-capitalize '>
                  <button className='btn-pill px-md-5 py-md-2 rounded-pill border-0 text-uppercase ' type="">Become A Member </button>
                </ListGroup.Item>

                <Card.Link className='btn-pill' href="#"></Card.Link>
              </Card.Body>
            </Card>
          </div>

        </div>

      </div>
      {/*pricing for pet owners  start*/}
    </>


  )
}

export default PricingPetOwner