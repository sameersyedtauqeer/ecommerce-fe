import React, { useEffect, useState } from 'react'
import slide1 from "../../assets/Images/slide1.png";
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteData, getSingleProduct } from '../../ApiConstant/api';
import { toast } from 'react-toastify';

const ViewProductScreen = () => {

    const navigate = useNavigate()
    const { id } = useParams();
    const [data, setData] = useState(null)

    const getDetails = () => {
        getSingleProduct("products", id)
            .then((res) => {
                setData(res?.data)
                console.log(data)
            })
    }

    console.log("data ========", data)
    useEffect(() => {
        getDetails()

    }, [])

    const handleDelete = (id) => {
        deleteData("products", id)
            .then((res) => {
                console.log(res)
                toast.warning("Product Deleted")
                navigate("/products")
            })

    }


    return (
        <>
            <div className="container">
                {data ? (
                    <>
                        <div className="row">
                            <div className="col-md-4">
                                <img src={`http://localhost:5000/uploads/${data.coverImage}`} width="100%" alt="" />
                            </div>

                            <div className="col-md-6 px-5">

                                <div className="h3">
                                    {data?.title}
                                </div>

                                <p>
                                    {data?.description}
                                </p>


                                <p > <span className='text-danger fw-600'>Category : </span> <span>{data?.category}</span> </p>


                                <p > <span className='text-danger fw-600'>Brand : </span> <span>{data?.brand}</span> </p>

                                <p > <span className='text-danger fw-600'>Price: </span> <span>{data?.price}</span> </p>

                                <div className="row">
                                    <div className="col-6">

                                        <div> <span className='text-danger fw-600'>Color : </span>
                                            <span>
                                                <Form.Select aria-label="Default select example">
                                                    {data?.color?.map((items,index) => {
                                                        return (
                                                            // <option value="1">{items}</option>
                                                            <option key={index} value={`color_${index}`}>{items}</option>

                                                        )
                                                    })}
                                                </Form.Select>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="col-6">

                                        <div> <span className='text-danger fw-600'>Size : </span>
                                            <span>
                                                <Form.Select aria-label="Default select example">
                                                    {data?.size?.map((items) => {
                                                        return (
                                                            <option value="1">{items}</option>

                                                        )
                                                    })}
                                                </Form.Select>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="row mt-3">
                            {data?.sampleImages?.map((images, index) => {
                                // console.log(`http://localhost:5000/uploads/${images}`)
                                return (
                                    <div className="col-md-auto">
                                        <div>
                                            {/* {index + 1} */}
                                        </div>
                                        <img key={index} src={`http://localhost:5000/uploads/${images}`} width={200} height={200} alt="" />

                                    </div>

                                )
                            })}
                        </div>
                        <div className="row justify-content-end mt-3">
                            <div className="col-auto">
                                <div onClick={() => handleDelete(data?._id)} className="btn btn-danger">
                                    Delete Product
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="btn btn-primary">
                                    Edit Product
                                </div>
                            </div>
                        </div>



                    </>) : ""}



            </div>
        </>
    )
}

export default ViewProductScreen