import React from 'react'
import mob1 from '../../assets/Images/mob1.png'
import mob2 from '../../assets/Images/mob2.png'
import ListGroup from 'react-bootstrap/ListGroup';


const HomeWhyChooseUS = () => {
  return (
    <>

      <div className="container">
        <div className="row  justify-content-center">

          <div className="col-12 text-center mt-5">
            <h6 className='fw-700 l-spacing heading-color s-16'>WHY CHOOSE US</h6>
          </div>

          <div className="col-12 text-center">
            <h1 className='fw-700 l-spacing-1'>Why PETACARE</h1>
          </div>

          <div className="col-12 mt-4">
            <div className="row justify-content-center ">
              <div className='col-12 mt-2 mt-md-0 col-md-auto'>
                <button className='rounded-pill w-100 service-border-style fw-600 btn-style px-md-5 py-md-2  py-md-0 s-16 px-2  '>
                  PET PARENTS
                </button>
              </div>

              <div className=' col-12 mt-2 mt-md-0 col-md-auto'>
                <button className='rounded-pill w-100 service-border-style  fw-600 btn-style px-md-5 py-md-2  py-md-0 px-2 s-16  '>
                  PROPERTY MANAGERS
                </button>
              </div>

              <div className='col-12 mt-2 mt-md-0 col-md-auto'>
                <button className='rounded-pill w-100 service-border-style fw-600 btn-style px-md-5 py-md-2  py-md-0 px-2  s-16'>
                  SERVICE PROVIDERS
                </button>
              </div>



            </div>


          </div>

          <div className="row align-items-center mt-5">
            <div className="col-md-2 p-0">
              <img src={mob1} alt="" width="100%" />
            </div>

            <div className='col-md-8 p-0 '>
              <ListGroup className='ps-md-5'>
                <ListGroup.Item className='border-0'>

                  <div className="row align-items-baseline">
                    <div className="col-auto ">

                      <i className="fa-solid fa-circle-check heading-color" />
                    </div>

                    <div className="col-10 p-0">

                      <span className='text-service fw-500  text-service l-height'>
                      Pet Passport allows pet parents to upload, store and share vital records
                      </span>
                    </div>
                  </div>


                </ListGroup.Item>

                <ListGroup.Item className='border-0'>




                  <div className="row align-items-baseline">
                    <div className="col-auto ">

                      <i className="fa-solid fa-circle-check heading-color" />
                    </div>

                    <div className="col-10 p-0">

                      <span className='text-service fw-500  text-service l-height'>

                      BioTech Pet offers a noninvasive DNA identification test versus microchipping
                      </span>
                    </div>
                  </div>

                </ListGroup.Item>

                <ListGroup.Item className='border-0'>

                  <div className="row align-items-baseline">
                    <div className="col-auto ">

                      <i className="fa-solid fa-circle-check heading-color" />
                    </div>

                    <div className="col-10 p-0">

                      <span className='text-service fw-500  text-service l-height'>

                      Our mobile app provides notifications when vaccinations & medications are due
                      </span>
                    </div>
                  </div>

                </ListGroup.Item>

                <ListGroup.Item className='border-0 '>

                  <div className="row align-items-baseline">
                    <div className="col-auto ">

                      <i className="fa-solid fa-circle-check heading-color" />
                    </div>

                    <div className="col-10 p-0">

                      <span className='text-service fw-500  text-service l-height'>

                      Pet Wellness Plan helps reduce veterinarian cost by offering preventive healthcare
                      </span>
                    </div>
                  </div>


                </ListGroup.Item>

                <ListGroup.Item className='border-0'>

                  <div className="row align-items-baseline">
                    <div className="col-auto ">

                      <i className="fa-solid fa-circle-check heading-color" />
                    </div>

                    <div className="col-10 p-0">

                      <span className='text-service fw-500  text-service l-height'>

                      TailAVet is our innovative virtual veterinary video conferencing feature
                      </span>
                    </div>
                  </div>


                </ListGroup.Item>

            

              </ListGroup>

              <div className='mt-4 text-center'>

                <button className='btn-pill rounded-pill px-md-4 mb-3  py-md-3 border-0 s-14' type="">DOWNLOAD OUR APP</button>
              </div>
            </div>


            <div className="col-md-2 p-0">
              <img src={mob2} alt="" width="100%" />
            </div>
          </div>



        </div>
      </div>
    </>
  )
}

export default HomeWhyChooseUS