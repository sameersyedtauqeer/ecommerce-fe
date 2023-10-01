import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const PricingPropertyManager = () => {
  return (
    <>
         <div className='container'>
        <div className='row mt-5'>
          <div className='col-md-12'>
            <h1 className='text-center fw-600 text-capitalize'>Pricing plan for property manager</h1>
          </div>
        </div>

        <div className='row mt-5 mb-5 justify-content-around'>
          <div className='col-md-4' style={{width:'23rem'}}>
            <Card className="text-center  border-0 card-shadow rounded-0">
              <Card.Body className='bg-yellow text-white p-4'>
                <Card.Title className='s-42 fw-600imp'>Free</Card.Title>
                <Card.Title className='s-24 fw-600imp'>1-10 Pets</Card.Title>


              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card'>pet management software for property managers</ListGroup.Item>
                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card'>white label pet concierge service links for resident</ListGroup.Item>
                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card'>pet services provider appointment scheduler </ListGroup.Item>

                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card'>customizable pets policy enforcement system </ListGroup.Item>
                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card border-bottom'>pet vaccination verification & run reports</ListGroup.Item>

              </ListGroup>
              <Card.Body>
                <ListGroup.Item className='  text-capitalize fw-500  s-15 pricing-card'>push notifications, email, text alerts & reminder</ListGroup.Item>

                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card'>
                  <button className='btn-pill px-md-5 py-md-2 rounded-pill border-0 text-uppercase' type="">subscribe</button>
                </ListGroup.Item>

                <Card.Link className='btn-pill' href="#"></Card.Link>
              </Card.Body>
            </Card>
          </div>

          <div className='col-md-4 pt-5 pt-md-0' style={{width:'23rem'}}>
            <Card className="text-center  border-0 card-shadow rounded-0">
              <Card.Body className='bg-warn text-white p-4'>
                <Card.Title className='s-42 fw-600imp'>$199.99 </Card.Title>
                <Card.Title className='s-24 fw-600imp'>11-50 Pets</Card.Title>


              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card'>pet management software for property managers</ListGroup.Item>
                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card'>white label pet concierge service links for resident</ListGroup.Item>
                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card'>pet services provider appointment scheduler </ListGroup.Item>

                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card'>customizable pets policy enforcement system </ListGroup.Item>
                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card border-bottom'>pet vaccination verification & run reports</ListGroup.Item>

              </ListGroup>
              <Card.Body>
                <ListGroup.Item className='  text-capitalize fw-500  s-15 pricing-card'>push notifications, email, text alerts & reminder</ListGroup.Item>

                <ListGroup.Item className='p-3 text-capitalize '>
                  <button className='btn-pill px-md-5 py-md-2 rounded-pill border-0 text-uppercase' type="">subscribe</button>
                </ListGroup.Item>

                <Card.Link className='btn-pill' href="#"></Card.Link>
              </Card.Body>
            </Card>
          </div>

          <div className='col-md-4 pt-5 pt-md-0' style={{width:'23rem'}}>
            <Card className="text-center  border-0 card-shadow rounded-0">
              <Card.Body className='bg-green text-white p-4'>
                <Card.Title className='s-42 fw-600imp'>$299.99</Card.Title>
                <Card.Title className='s-24 fw-600imp'>50+ Pets</Card.Title>


              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card'>pet management software for property managers</ListGroup.Item>
                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card'>white label pet concierge service links for resident</ListGroup.Item>
                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card'>pet services provider appointment scheduler </ListGroup.Item>

                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card'>customizable pets policy enforcement system </ListGroup.Item>
                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card border-bottom'>pet vaccination verification & run reports</ListGroup.Item>

              </ListGroup>
              <Card.Body>
                <ListGroup.Item className='  text-capitalize fw-500  s-15 pricing-card'>push notifications, email, text alerts & reminder</ListGroup.Item>

                <ListGroup.Item className='p-3 text-capitalize fw-500 s-15 pricing-card'>
                  <button className='btn-pill px-md-5 py-md-2 rounded-pill border-0 text-uppercase' type="">subscribe</button>
                </ListGroup.Item>

                <Card.Link className='btn-pill' href="#"></Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>


      </div>
    </>
  )
}

export default PricingPropertyManager