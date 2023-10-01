import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';

import Image4 from "../../assets/Images/Layer_1_4.svg";
import Image5 from "../../assets/Images/Layer_1_5.svg";
import Image6 from "../../assets/Images/Layer_1_6.svg";
import Image7 from "../../assets/Images/Layer_1_7.svg";
import Image8 from "../../assets/Images/Layer_1_8.svg";
import Image9 from "../../assets/Images/Layer_1_9.svg";
import Image10 from "../../assets/Images/Layer_1_10.svg";
import Image11 from "../../assets/Images/Layer_1_11.svg";
import Image12 from "../../assets/Images/Layer_1_12.svg";
import Image13 from "../../assets/Images/Layer_1_13.svg";
import Image14 from "../../assets/Images/Layer_1_14.svg";
import Image15 from "../../assets/Images/Layer_1_15.svg";
import Image16 from "../../assets/Images/Layer_1_16.svg";
import Image17 from "../../assets/Images/Layer_1_17.svg";
import Image18 from "../../assets/Images/Layer_1_18.svg";
import Image19 from "../../assets/Images/Layer_1_19.svg";


const Index = () => {
  return (
    <>

      <section>
        <div className='container'>
          <div className='row align-items-center mt-5'>
            <div className='col-md-12'>
              <h1 className='text-capitalize fw-600'>our services</h1>

              <p className='pt-3 fs-para  l-height fw-400 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>

            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container mb-5'>
          <div className='row align-items-center mt-5 ' >
            <div className='col-md-5 p-0'>
              <img width='100%' src={Image4} alt="" />

            </div>

            <div className='col-md-7 p-5 pb-0 pb-md-5 ps-md-5 p-md-auto'>
              <h3 className='fw-600'>DNA Testing</h3>
              <p className='pt-3 fs-para s-15 l-height fw-500 ' >  DNA is a biomedical standard that cannot be changed or altered and provides proof positive identification
                of your pet alive or deceased. Knowing your pet's genomic traits can assits you with the preventive care in early detection

              </p>
              <a className='text-uppercase bg-text fw-700 bor-bottom s-13'>read more</a>
              <br />
              <Link to="/microchip-technology-vs-biotechPet">

                <button className='btn-pill text-white text-uppercase border-0 fw-700 px-md-4 py-md-3  rounded-pill mt-4' type="">biotech pet vs. microchipping</button>
              </Link>

            </div>
          </div>

          <div className='row align-items-center mt-5'>

            <div className='col-md-7 p-5 pt-0 p-md-0 pe-md-5'>
              <h3 className='fw-600'>Pet Concierge </h3>
              <p className='pt-3 fs-para s-15 l-height fw-500 ' >PetACare provides a 2 types of pet Concierge software platforms for pet owners and
                Property manager. Our pet concierge system offers an array of pet services including: Veterany, Grooming,
                Pharmacy, Dog Walking, Day Care
              </p>

              <a className='text-uppercase bg-text fw-700 bor-bottom s-13'>read more</a>

            </div>
            <div className='col-md-5 p-0'>
              <img width='100%' src={Image5} alt="" />


            </div>


          </div>

          <div className='row align-items-center mt-5'>
            <div className='col-md-5 p-0'>
              <img width='100%' src={Image6} alt="" />


            </div>

            <div className='col-md-7 p-5 pb-0 pb-md-5 ps-md-5 p-md-auto'>
              <h3 className='fw-600'>Veterinary</h3>
              <p className='pt-3 fs-para s-15 l-height fw-500 ' > PetACare provides low cost veterinarian care either through our PetACareTailVet
                Veterany Video Conferencing whereas you can service consultation  for you pet and or schedule and confirm a
                face to face visit.
              </p>

              <a className='text-uppercase bg-text fw-700 bor-bottom s-13'>read more</a>

            </div>
          </div>

          <div className='row align-items-center mt-5'>

            <div className='col-md-7 p-5 pt-0 p-md-0 pe-md-5'>
              <h3 className='fw-600'>Grooming</h3>
              <p className='pt-3 fs-para s-15 l-height fw-500 ' >PetACare provides high-tech self-wash pet station and mobile grooming service
                to your community. Our pet wash station are an ancillary income amenity for your community that pet
                owners will love. PetACare also provides access
              </p>

              <a className='text-uppercase bg-text fw-700 bor-bottom s-13'>read more</a>

            </div>
            <div className='col-md-5 p-0'>

              <img width='100%' src={Image7} alt="" />

            </div>


          </div>

          <div className='row align-items-center mt-5'>
            <div className='col-md-5 p-0'>
              <img width='100%' src={Image8} alt="" />


            </div>

            <div className='col-md-7 p-5 pb-0 pb-md-5 ps-md-5 p-md-auto'>
              <h3 className='fw-600'>Pharmacy</h3>
              <p className='pt-3 fs-para s-15 l-height fw-500 ' > PetACare provide low-cost pet pharmacy accessibility to pet owners either
                through our licensed veterinarian that can be accessed through our TailAVet service to our virtual
                pharmacy found in the PETACARE mobile app.
              </p>

              <a className='text-uppercase bg-text fw-700 bor-bottom s-13'>read more</a>

            </div>
          </div>

          <div className='row align-items-center mt-5'>

            <div className='col-md-7 p-5 pt-0 p-md-0 pe-md-5'>
              <h3 className='fw-600'>Dog Walking</h3>
              <p className='pt-3 fs-para s-15 l-height fw-500 ' >PetACare provides top rated dog walkers, Our dog are licensed and
                trained in dog CPR. We will track your pets Walking distance, poop and peep event as well
                as clean up behind your pets. you can schedule and confirm appointments
              </p>

              <a className='text-uppercase bg-text fw-700 bor-bottom s-13'>read more</a>

            </div>
            <div className='col-md-5 p-0'>
              <img width='100%' src={Image9} alt="" />


            </div>


          </div>

          <div className='row align-items-center mt-5'>
            <div className='col-md-5 p-0'>
              <img width='100%' src={Image10} alt="" />


            </div>

            <div className='col-md-7 p-5 pb-0 pb-md-5 ps-md-5 p-md-auto'>
              <h3 className='fw-600'>Dog Day Care</h3>
              <p className='pt-3 fs-para s-15 l-height fw-500 ' >PetACare Provides  Daycare services at one our coneniently located dog daycare
                facilities or our check-in service for resident's pets all which can be scheduled and booked through
                our mobile app.
              </p>
              <a className='text-uppercase bg-text fw-700 bor-bottom s-13'>read more</a>


            </div>
          </div>

          <div className='row align-items-center mt-5'>

            <div className='col-md-7 p-5 pt-0 p-md-0 pe-md-5'>
              <h3 className='fw-600'>Pet Wellness Plan </h3>
              <p className='pt-3 fs-para s-15 l-height fw-500 ' >PetACare wellness plans are affordable annual programs that provides
                affordable services that focus on proactive pet health care. Our plans provide pet health
                care. Our plans provide pet health care information that you and your veterinarian can track and
                trail services
              </p>

              <a className='text-uppercase bg-text fw-700 bor-bottom s-13'>read more</a>


            </div>


            <div className='col-md-5 p-0'>
              <img width='100%' src={Image11} alt="" />


            </div>


          </div>

          <div className='row align-items-center mt-5'>
            <div className='col-md-5 p-0'>
              <img width='100%' src={Image12} alt="" />


            </div>

            <div className='col-md-7 p-5 pb-0 pb-md-5 ps-md-5 p-md-auto'>
              <h3 className='fw-600'>Pet Management Software</h3>
              <p className='pt-3 fs-para s-15 l-height fw-500 ' >
                PetACare pet Management Software is the first and only technology developed to
                assist property management firms manage the growing pet owner resident population.
                This high-tech platform takes a comprehensive approch

              </p>
              <a className='text-uppercase bg-text fw-700 bor-bottom s-13'>read more</a>


            </div>
          </div>

          <div className='row align-items-center mt-5'>

            <div className='col-md-7 p-5 pt-0 p-md-0 pe-md-5'>
              <h3 className='fw-600'>Pet Parenting Software </h3>
              <p className='pt-3 fs-para s-15 l-height fw-500 ' >PetACare Parenting software was developed to assist pet parents within
                managed communities. The software has feature to assist with registration fo your pet with
                any apartment or condo by storing vital documents needed to pass
              </p>

              <a className='text-uppercase bg-text fw-700 bor-bottom s-13'>read more</a>


            </div>


            <div className='col-md-5 p-0'>
              <img width='100%' src={Image13} alt="" />


            </div>


          </div>

          <div className='row align-items-center mt-5'>
            <div className='col-md-5 p-0'>
              <img width='100%' src={Image14} alt="" />


            </div>

            <div className='col-md-7 p-5 pb-0 pb-md-5 ps-md-5 p-md-auto'>
              <h3 className='fw-600'>Pet Wellness Center</h3>
              <p className='pt-3 fs-para s-15 l-height fw-500 ' >
                Pet Wellness Center are costumize spaces design for manage communities such as apartment that offera unique
                amenities for your pet owner residents. Through our patented design your Pet Wellness Center can now offer to site

              </p>
              <a className='text-uppercase bg-text fw-700 bor-bottom s-13'>read more</a>


            </div>
          </div>



          <div className='row align-items-center mt-5'>

            <div className='col-md-7 p-5 pt-0 p-md-0 pe-md-5'>
              <h3 className='fw-600'>Dog Training</h3>
              <p className='pt-3 fs-para s-15 l-height fw-500 ' >
                Pet Wellness Center are costumize spaces design for manage communities such as apartment that offera unique
                amenities for your pet owner residents. Through our patented design your Pet Wellness Center can now offer to site

              </p>
              <a className='text-uppercase bg-text fw-700 bor-bottom s-13'>read more</a>


            </div>
            <div className='col-md-5 p-0'>
              <img width='100%' src={Image15} alt="" />


            </div>


          </div>


          <div className='row align-items-center mt-5'>

            <div className='col-md-5 p-0'>
              <img width='100%' src={Image16} alt="" />


            </div>
            <div className='col-md-7 p-5 pb-0 pb-md-5 ps-md-5 p-md-auto'>
              <h3 className='fw-600'>Daycare</h3>
              <p className='pt-3 fs-para s-15 l-height fw-500 ' >PetACare Parenting software was developed to assist pet parents within
                managed communities. The software has feature to assist with registration fo your pet with
                any apartment or condo by storing vital documents needed to pass
              </p>

              <a className='text-uppercase bg-text fw-700 bor-bottom s-13'>read more</a>


            </div>

          </div>

          <div className='row align-items-center mt-5'>

            <div className='col-md-7 p-5 pt-0 p-md-0 pe-md-5'>
              <h3 className='fw-600'>Boarding</h3>
              <p className='pt-3 fs-para s-15 l-height fw-500 ' >PetACare Parenting software was developed to assist pet parents within
                managed communities. The software has feature to assist with registration fo your pet with
                any apartment or condo by storing vital documents needed to pass
              </p>

              <a className='text-uppercase bg-text fw-700 bor-bottom s-13'>read more</a>


            </div>


            <div className='col-md-5 p-0'>
              <img width='100%' src={Image17} alt="" />


            </div>


          </div>

          <div className='row align-items-center mt-5'>

            <div className='col-md-5 p-0'>
              <img width='100%' src={Image18} alt="" />


            </div>
            <div className='col-md-7 p-5 pb-0 pb-md-5 ps-md-5 p-md-auto'>
              <h3 className='fw-600'>TailAVet</h3>
              <p className='pt-3 fs-para s-15 l-height fw-500 ' >PetACare Parenting software was developed to assist pet parents within
                managed communities. The software has feature to assist with registration fo your pet with
                any apartment or condo by storing vital documents needed to pass
              </p>

              <a className='text-uppercase bg-text fw-700 bor-bottom s-13'>read more</a>


            </div>

          </div>

          <div className='row align-items-center mt-5'>

            <div className='col-md-7 p-5 pt-0 p-md-0 pe-md-5'>
              <h3 className='fw-600'>QR Tag GEO Lost & Found Tracking</h3>
              <p className='pt-3 fs-para  l-height fw-500 ' >PetACare Parenting software was developed to assist pet parents within
                managed communities. The software has feature to assist with registration fo your pet with
                any apartment or condo by storing vital documents needed to pass
              </p>

              <a className='text-uppercase bg-text fw-700 bor-bottom s-13'>read more</a>


            </div>


            <div className='col-md-5 p-0'>
              <img width='100%' src={Image19} alt="" />


            </div>


          </div>

          <div className='row align-items-center mt-5'>

            <div className='col-md-5 p-0'>
              {/* <img width='100%' src={Image18} alt="" /> */}
              <div className='content-x'>

              </div>

            </div>
            <div className='col-md-7 p-5 pb-0 pb-md-5 ps-md-5 p-md-auto'>
              <h3 className='fw-600'>Pet Passport</h3>
              <p className='pt-3 fs-para s-15 l-height fw-500 ' >With our Pet Passport feature you can Upload, Store & Share vital documents to help keep your pet in compliance.
              </p>

              <a className='text-uppercase bg-text fw-700 bor-bottom s-13'>read more</a>


            </div>

          </div>


        </div>
      </section>
    </>
  )
}

export default Index