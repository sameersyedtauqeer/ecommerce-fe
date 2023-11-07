import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { getSingleOrder, getSingleProduct, putData } from '../../ApiConstant/api';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2'

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

const OrderDetailScreen = () => {
  const { id, notificationId } = useParams();
  const [data, setData] = useState(null)
  const [refresh, setRefresh] = useState(false)

  console.log("notificationId =====", notificationId)
  const handleStatus = (orderStatus) => {
    const obj = { orderStatus }
    putData(`order/${id}`, obj)
      .then((result) => {
        Toast.fire({
          icon: 'success',
          title: result?.message
        })
        setRefresh(!refresh)
      })

  }

  const getDetails = () => {
    let url = `order/${id}`;
    console.log('url=========', url)
    if (notificationId != undefined) {
      url = `order/${id}/${notificationId}`;
    }
    getSingleOrder(url)
      .then((res) => {
        setData(res?.data)
      })
  }

  useEffect(() => {
    getDetails()
  }, [id, notificationId, refresh])

  // console.log("data ========== ", data)


  return (
    <>
      <div className="container">
        <h4 className='fw-600 mb-0'>
          Order Detail
        </h4>

        {data ? (
          <>
            <div className="row">
              <div className="col-md-8">
                <div className="card mt-4">
                  <div className="card-header">
                    <p className='fw-600 mb-0'>
                      Order : #{data?.orderNo}
                    </p>
                  </div>

                  <div className="card-body">
                    <div className="row">
                      <div className="col-12">

                      </div>
                      <div className="col-md-6">
                        <h6 className='mb-4 fw-600'>
                          Buyers Personal Detail
                        </h6>

                        <p className='mb-2 s-14'>
                          <span>
                            Name :
                          </span>
                          <span>
                            {""} {data?.name}
                          </span>
                        </p>
                        <p className='mb-2 s-14'>
                          <span>
                            Email :
                          </span>
                          <span>
                            {""} {data?.email}
                          </span>
                        </p>

                        <p className='mb-2 s-14'>
                          <span>
                            Address :
                          </span>
                          <span>
                            {""} {data?.address}
                          </span>
                        </p>

                      </div>

                      <div className="col-md-6">
                        <h6 className='mb-4 fw-600'>
                          Order Detail
                        </h6>

                        <p className='mb-2 s-14'>
                          <span>
                            Payment Method :
                          </span>
                          <span>
                            {""} {data?.paymentMethod}
                          </span>
                        </p>

                        <p className='mb-2 s-14'>
                          <span>
                            Order Status :
                          </span>
                          <span>
                            {""} {data?.orderStatus}
                          </span>
                        </p>

                      </div>



                    </div>
                  </div>
                </div>

                <div className="card mt-4">
                  <div className="card-header">

                    <p className='mb-0 fw-600 s-14'>

                      Purchased Items
                    </p>
                  </div>

                  <div className="card-body p-0 ">
                    <Table striped bordered hover className='mb-0'>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Item Name </th>
                          <th>Quantity</th>
                          <th>Price/Piece</th>
                          <th>Total Price</th>
                        </tr>
                      </thead>
                      <tbody>

                        {
                          data?.product?.map((val, index) => {
                            return (
                              <>
                                <tr>
                                  <td>{index + 1}</td>
                                  <td>{val?.title}</td>
                                  <td>{val?.quantity}</td>
                                  <td>{val?.price}</td>
                                  <td>{val?.totalPrice}</td>
                                </tr>


                              </>

                            )
                          })
                        }
                        <tr>
                          <td className='text-end pe-4' colspan="5">
                            <span className='fw-600'>
                              Order Total :
                            </span>
                            <span>{" "}
                              {data?.subTotal}

                            </span>

                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>


              </div>

              <div className="col-md-4 mt-4">
                <div className="card">
                  <div className="card-header">
                    <p className='mb-0 fw-600 s-14'>

                      Order Summary
                    </p>
                  </div>

                  <div className="card-body">

                    <p className='mb-2 s-14 fw-700'>
                      <span >
                        Change Status
                      </span>
                    </p>

                    <select onChange={(e) => handleStatus(e.target.value)} class="form-select" aria-label="Default select example">
                      <option value="Pending" selected={data?.orderStatus == "Pending"}>Pending</option>
                      <option value="Confirmed" selected={data?.orderStatus == "Confirmed"}>Confirmed</option>
                      <option value="Processing" selected={data?.orderStatus == "Processing"}>Processing</option>
                      <option value="Out For Delivery" selected={data?.orderStatus == "Out For Delivery"}>Out For Delivery</option>
                      <option value="Delivered" selected={data?.orderStatus == "Delivered"}>Delivered</option>
                    </select>

                  </div>
                </div>

              </div>


            </div>
          </>

        ) : ""}

      </div>
    </>
  )
}

export default OrderDetailScreen