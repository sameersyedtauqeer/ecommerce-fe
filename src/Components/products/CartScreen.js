import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import product3 from "../../assets/Images/product2.svg";
import { Link } from 'react-router-dom';
import { BsFillTrash3Fill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, removeFromCart } from '../../Redux/Slices/cartSlice';


const CartScreen = () => {

    // const count = useSelector((state) => state.counter.value);
    const cartItems = useSelector(state => state.cart)
    const dispatch = useDispatch();

    const handleRemove = (val) => {
        dispatch(removeFromCart(val))
    }

    useEffect(() => {
        console.log("cartItems", cartItems?.cart)

    }, [])


    const calculatePrice = () => {
        let price = 0;
        if (cartItems?.cart?.length > 0) {
            cartItems?.cart?.map((i) => {
                price += i.price * i.quantity

            });
        }
        return price;
    }

    return (
        <>
            <div className="container">
                <div className="row mb-5 justify-content-end">
                    <div className="col-md-12">
                        <Table responsive="sm" className='shadow rounded-2 overflow-hidden'>
                            <thead className='bg-danger text-white'>
                                <tr>
                                    <th>#</th>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Sub Total</th>
                                    <th></th>

                                </tr>
                            </thead>
                            <tbody style={{ verticalAlign: 'middle' }}>
                                {cartItems?.cart?.length > 0 ? (
                                    cartItems?.cart?.map((val, index) => (
                                        <>
                                            <tr>

                                                <td>{index + 1}</td>
                                                <td>
                                                    <div className="row align-items-center">
                                                        <div className="col-auto p-0">
                                                            <img src={`http://localhost:5000/uploads/${val?.coverImage}`} className='me-3' width={50} style={{ objectFit: 'contain' }} alt="" />
                                                        </div>
                                                        <div className="col p-0">
                                                            <p className='mb-0'> <span className='fw-600 text-danger s-14 '>Name : </span> <span className='fw-600 s-14'>{val.title}</span></p>
                                                            <p> <span className='fw-600 text-danger s-14'>Price : </span> <span className='fw-600 s-14'>{val.price}</span></p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>

                                                    <div className="row">

                                                        <div className="col-auto">
                                                            <div className=''>
                                                                <button onClick={() => dispatch(decrement(val))} type="" className='btn btn-danger  border'>-</button>
                                                                <span className='s-18 px-4'>{val.quantity}</span>
                                                                <button onClick={() => dispatch(increment(val))} type="" className='btn btn-success border'>+</button>

                                                            </div>
                                                        </div>
                                                    </div>


                                                </td>
                                                <td>Rs {val.price * val.quantity}</td>
                                                <td><BsFillTrash3Fill
                                                    onClick={() => handleRemove(val)}
                                                    size={24} className="text-danger" /></td>
                                            </tr >
                                        </>
                                    ))
                                ) : 'no items'}



                            </tbody>
                        </Table>
                    </div>

                    <div className="col-md-4 ">
                        <div className="card shadow border-0  p-3">
                            <div className="row mb-3">
                                <div className="col">
                                    <div className="fw-600 s-14">
                                        Sub Total
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="fw-600 s-14">
                                        Rs {Math.round(calculatePrice())}
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col">
                                    <div className="fw-600 s-14">
                                        Total Amount
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="fw-600 s-14">
                                        Rs {Math.round(calculatePrice())}
                                    </div>
                                </div>
                            </div>

                            <div>
                                <Link to={"/checkout"} className='btn btn-danger'>
                                    Proceed To Checkout
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartScreen