import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ContactScreen = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6 p-3">
              <h1>Contact Us</h1>
              <p className='s-18 l-height text-grey ' >
                If you have any question or enquiries please feel free to contact
                us on the details provided below or alternatively you can complete
                our online enquiry form also located on the right and we will get
                back to you as soon as posible
              </p>

              <div className='row'>
                <div className="col-md-6">
                  <div >
                    <p className='s-18 fw-600'>
                      <i className="fas fa-envelope"></i> Email
                    </p>
                    <p className='bg-text s-18 fw-600'>info@petacare.com</p>
                  </div>

                  <div >
                    <p className='s-18 fw-600'>
                      <i className="fas fa-map-marker-alt"></i> Address
                    </p>
                    <p className='bg-text s-18 fw-600'>400N. Eravy Street #130815 Dollas Texas</p>
                  </div>
                </div>
              </div>



            </div>

            <div className='col-md-6 p-3'>
              <h2 className='bg-text mb-4'>Online Enquiry</h2>

              <Form>
                <Form.Group className="mb-3  " controlId="formBasicEmail">
                  <Form.Control type="email" className='rounded-0 p-2 bg-grey' placeholder="Your Email" />

                </Form.Group>

                <Form.Group className="mb-3  rounded-0" controlId="formBasicPassword">
                  <Form.Control type="password" className='rounded-0 p-2' placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3  " controlId="formBasicPhone">
                  <Form.Control type="text" className='rounded-0 p-2' placeholder="Phone" />

                </Form.Group>

                <Form.Group className="mb-3  rounded-0" controlId="formBasicPetName">
                  <Form.Control type="text" className='rounded-0 p-2' placeholder="Pet Name" />
                </Form.Group>


                <Form.Group className="mb-3">
                  <Form.Select className='rounded-0 p-2' id="subject">
                    <option>Subject</option>
                    <option>Disabled select</option>
                    <option>Disabled select</option>

                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Control className='rounded-0 p-2' placeholder='Enquiry' as="textarea" rows={3} />
                </Form.Group>

                <button type="" className='btn-pill rounded-pill border-0 px-md-5 py-md-3 w-50 mt-3'>SEND</button>

              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactScreen