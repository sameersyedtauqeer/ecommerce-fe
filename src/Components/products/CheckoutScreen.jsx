import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import product3 from "../../assets/Images/product2.svg";
import { BsFillTrash3Fill } from "react-icons/bs";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { postData } from '../../ApiConstant/api';
import { removeAllCart } from '../../Redux/Slices/cartSlice';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';


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

const CheckoutScreen = () => {
    const cartItems = useSelector(state => state.cart)
    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    console.log("user =========", user)

    const [refresh, setRefresh] = useState(false);
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [name, setName] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [products, setProducts] = useState([]);



    const [method, setMethod] = useState('Cash On Delivery')

    const handleChange = (e) => {
        console.log('val', e?.target?.value)
        setMethod(e?.target?.value)
    }

    const deliveryCharges = 50;

    // const setValues = () => {
    //     setEmail(user.user_email)
    // }

    useEffect(() => {
        if (user) {
            setEmail(user.user_email)
            setName(user.user_name)
            setAddress(user.user_address)
            setProducts(cartItems?.cart)
        }
    }, [user, refresh])


    const placeOrder = (e) => {
        e.preventDefault();
        const body = {
            email,
            name,
            address,
            products: products?.map((val) => ({ id: val._id, quantity: val.quantity })),
            method
        }
        console.log("first body =========== ", body)
        postData("order", body)
            .then((response) => {
                if (response?.status === true) {
                    navigate("/product")
                    Toast.fire({
                        icon: 'success',
                        title: response?.message
                    })
                        (dispatch(removeAllCart()))
                }
            })
    }

    console.log("first products ========", products)

    // const calculateAmount = () => {
    //     let total = 0
    //     if (cartItems?.cart?.lenth > 0) {
    //         cartItems?.cart?.map((i) => {
    //             total += i.price * i.quantity
    //         })
    //     }
    //     return total;
    // }

    const itemsTotal = () => {
        let price = 0;
        if (cartItems?.cart?.length > 0) {
            cartItems?.cart?.map((i) => {
                price += i.price * i.quantity
            });
        }
        return price;
    }

    const itemsQuantity = () => {
        let quantity = 0;
        if (cartItems?.cart?.length > 0) {
            cartItems?.cart?.map((i) => {
                quantity += i.quantity
            })
        }
        return quantity
    }

    const calculateTotalAmount = (cartItems, deliveryCharges) => {
        let price = itemsTotal(cartItems);
        price += deliveryCharges;
        return price;
    }


    const totalAmount = calculateTotalAmount(cartItems, deliveryCharges);
    // console.log(Math.round(totalAmount));

    // console.log(payableAmount())

    // console.log("calculateAmount =====", calculatePrice())

    // const totalItems = () => {
    //     let item = 0

    // }

    return (
        <>
            <div className="container my-5">
                <div className="row">

                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-12 mb-3">

                                <div className="card p-3 border-0 shadow">
                                    <p className='text-danger fw-700'>Detail</p>

                                    <div className='mb-3'>

                                        <span className='fw-600 s-12'>Name </span>
                                        <input type="text" value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className='form-control' />
                                    </div>

                                    <div className='mb-3'>
                                        <span className='fw-600 s-12'>Email : </span>
                                        <input type="text" className='form-control'
                                            onChange={(e) => setEmail(e.target.value)}
                                            value={email}
                                        />
                                    </div>


                                    <div>
                                        <span className='fw-600 s-12'>Address : </span>
                                        <input type="text" className='form-control'
                                            onChange={(e) => setAddress(e.target.value)}
                                            value={address}
                                        />
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-12 mb-3">
                                <div className="card p-3 border-0 shadow">
                                    <p className='text-danger fw-700'>Payment Method</p>


                                    {/* <Form.Group className="mb-3" controlId="formBasicRange">
                                        <Form.Label className='s-14 fw-600'>Select Payment Method</Form.Label>
                                        <Form.Select aria-label="Default select example" onChange={handleChange}>
                                            <option className='text-muded' >Select Method</option>
                                            <option value="cod">Cash On Delivery (COD)</option>
                                            <option value="viaCard">Pay Via Card</option>
                                        </Form.Select>
                                    </Form.Group> */}

                                    <div className="d-flex">


                                        {['Cash On delivery', 'Pay Via Card'].map((val, index) => (
                                            <div key={`default-${index}`} className="mb-3">
                                                <Form.Check // prettier-ignore
                                                    type="radio"
                                                    id={`default-${val}`}
                                                    name={`default-1`}
                                                    label={`${val}`}
                                                    value={val}
                                                    className='me-3'
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        ))}
                                    </div>


                                    {method === "Pay Via Card" && (
                                        <>
                                            <p className='text-muted fw-600 s-14 mt-3'>Card Details</p>

                                            <Form >
                                                <div className="row">

                                                    <Form.Group className="mb-3" controlId="formBasicName">
                                                        <Form.Control type="text" placeholder="Card Holder Name" />

                                                    </Form.Group>

                                                    <Form.Group className="mb-3" controlId="formBasicNumber">
                                                        <Form.Control type="text" placeholder="Card Number" />
                                                    </Form.Group>



                                                    <Form.Group className="mb-3 col-6" controlId="formBasicNumber">
                                                        <Form.Control type="text" placeholder="Card Expiry" />
                                                    </Form.Group>

                                                    <Form.Group className="mb-3 col-6" controlId="formBasicNumber">
                                                        <Form.Control type="text" placeholder="Security Code" />
                                                    </Form.Group>



                                                </div>
                                                <Button variant="danger" type="submit">
                                                    Submit
                                                </Button>

                                            </Form>
                                        </>


                                    )}




                                </div>
                            </div>


                            <div className="col-md-12 mb-3">
                                <div className="card p-3 border-0 shadow">
                                    <p className='text-danger fw-700'>Order</p>


                                    <div className="col-md-12">
                                        <Table responsive="sm">
                                            <thead className='bg-danger text-white'>
                                                <tr>
                                                    <th className='s-14'>#</th>
                                                    <th className='s-14'>Product</th>
                                                    <th className='s-14'>Quantity</th>
                                                    <th className='s-14'>Sub Total</th>

                                                </tr>
                                            </thead>
                                            <tbody>

                                                {cartItems?.cart?.map((val, index) => (
                                                    <tr>
                                                        <td className='s-12'>{index + 1}</td>
                                                        <td>
                                                            <div className="row">
                                                                {/* <div className="col-auto p-0">

              <img src={product3} width={150} height={150} alt="" />
          </div> */}
                                                                <div className="col p-0">
                                                                    <p className='mb-0'> <span className='fw-600 text-danger s-12 '> {val?.title} </span> </p>
                                                                    {/* <p> <span className='fw-600 text-danger s-12'>Price : </span> <span className='fw-600 s-14'>600</span></p> */}
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>

                                                            <div className="row">

                                                                <div className="col-auto">
                                                                    <div className=''>
                                                                        {/* <button type="" className='btn btn-sm btn-success border'>+</button> */}
                                                                        <span className='s-12 px-4'>{val?.quantity}</span>
                                                                        {/* <button type="" className='btn btn-danger  border'>-</button> */}

                                                                    </div>
                                                                </div>
                                                            </div>


                                                        </td>
                                                        <td className='s-12'>{val?.price * val?.quantity}</td>
                                                        {/* <td><BsFillTrash3Fill size={24} className="text-danger" /></td> */}

                                                    </tr>

                                                ))}


                                            </tbody>
                                        </Table>
                                    </div>


                                </div>
                            </div>



                        </div>

                    </div>

                    <div className="col-md-4">
                        <div className="card border-0 shadow p-3">
                            <p className='text-danger fw-700'>Order Summary</p>
                            <p className="row">
                                <div className="col s-12 s-12 fw-600 ">Number of items</div>
                                <div className="col-auto s-12 fw-600 ">{itemsQuantity()}</div>
                            </p>
                            <p className="row">
                                <div className="col s-12 s-12 fw-600 ">Items Amount</div>
                                <div className="col-auto s-12 fw-600 "><span>Rs : </span> {Math.round(itemsTotal())}</div>
                            </p>
                            <p className="row">
                                <div className="col s-12 s-12 fw-600 ">Delivery Charges</div>
                                <div className="col-auto s-12 fw-600 ">Rs : {deliveryCharges}</div>
                            </p>
                            <p className="row">
                                <div className="col s-12 s-12 fw-600 ">Total Payable Amount</div>
                                <div className="col-auto s-12 fw-600 ">Rs : {Math.round(totalAmount)}</div>
                            </p>

                            <button onClick={placeOrder} className='btn btn-danger w-100 fw-700'>Place Order</button>


                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default CheckoutScreen