import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { getSingleOrder, getSingleProduct, putData } from '../../ApiConstant/api';
import { useParams } from 'react-router-dom';

const OrderDetailScreen = () => {
  const { id, notificationId } = useParams();
  const [data, setData] = useState(null)
  const [status, setStatus] = useState("")

  console.log("notificationId =====", notificationId)
  const handleStatus = (orderStatus) => {
    const obj = { orderStatus }
    putData(`order/${id}`, obj)
      .then((result) => {
        alert(result?.message)
      })

  }

  const getDetails = () => {
    let url = `order/${id}`;
    console.log('url=========', url)
    if(notificationId != undefined){
      url = `order/${id}/${notificationId}`;
    }
    getSingleOrder(url)
      .then((res) => {
        setData(res?.data)
      })
  }

  useEffect(() => {
    getDetails()
  }, [id, notificationId])

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
                      <option value="confirmed" selected={data?.orderStatus == "confirmed"}>Confirmed</option>
                      <option value="processing" selected={data?.orderStatus == "processing"}>Processing</option>
                      <option value="outForDelivery" selected={data?.orderStatus == "outForDelivery"}>Out For Delivery</option>
                      <option value="delivered" selected={data?.orderStatus == "delivered"}>Delivered</option>
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