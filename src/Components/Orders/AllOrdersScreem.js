import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { getOrder } from '../../Redux/Slices/orderSlice';
import { BsEye, BsEyeFill, BsFillTrash3Fill, BsPencilSquare } from 'react-icons/bs';
import { TbLayoutKanban } from 'react-icons/tb';
import { Link } from 'react-router-dom';


const AllOrdersScreem = () => {

    const dispatch = useDispatch();
    const { orderList } = useSelector((state) => state.order)
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        dispatch(getOrder())
        console.log(" orders ============= ", orderList)
    }, [])
    return (
        <>

            <div className="row">
                <div className="col">

                    <h5 className='fw-600 mb-4'>
                        Orders
                    </h5>
                </div>

                <div className="col-auto">
                    <Link to={"/kanban"} className='btn btn-light'>
                        <TbLayoutKanban size={22}/>

                    </Link>
                </div>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Order No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Status</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orderList && orderList.map((items, index) => (
                            <>
                                <tr>

                                    <td>{items?.orderNo}</td>
                                    <td>{items?.name}</td>
                                    <td>{items?.email}</td>
                                    <td>{items?.address}</td>
                                    <td>{items?.orderStatus}</td>
                                    <td>{items?.subTotal}</td>
                                    <td className='text-center'>
                                        {/* <Link to={`/view-product/${val._id}`}> */}
                                        <Link to={`/orders-detail/${items._id}`}>
                                            <BsEye

                                                className='text-muted me-3 cursor-pointer' size={26}
                                            />
                                        </Link>

                                        {/* <Link to={`/edit-product/${val._id}`}> */}
                                        {/* <BsPencilSquare
                                            // onClick={() => editModal(item._id, item?.brandName)}
                                            className='text-primary me-3 cursor-pointer' size={26} /> */}
                                        {/* </Link> */}
                                        {/* <BsFillTrash3Fill
                                            // onClick={() => handleDelete(val?._id)}
                                            className='text-danger cursor-pointer' size={26} /> */}
                                    </td>
                                </tr>

                            </>
                        ))
                    }



                </tbody>
            </Table>
        </>
    )
}

export default AllOrdersScreem