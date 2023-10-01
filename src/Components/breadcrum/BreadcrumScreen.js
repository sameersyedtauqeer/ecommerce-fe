import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';


const BreadcrumScreen = (props) => {
  return (
    <>

      <section className='bg-breadcrum pt-3'>
        <div className='container-fluid ps-md-5 pe-md-5'>
          <div className='row'>
            <div className='col'>
              <Breadcrumb>
                <Breadcrumb.Item className='breadcrum-items' href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item className='breadcrum-items-active' href="#">
                  {props?.url}
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default BreadcrumScreen