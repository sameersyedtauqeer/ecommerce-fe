import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProduct } from '../../Redux/Slices/productSlice';
import { BsEye, BsEyeFill, BsFillTrash3Fill, BsPencilSquare } from 'react-icons/bs';
import { deleteData } from '../../ApiConstant/api';
import { toast } from 'react-toastify';

const AddProductScreen = () => {
    const [refresh, setRefresh] = useState(false)

    const dispatch = useDispatch();
    const { entities } = useSelector((state) => state.product)

    const handleDelete = (id) => {
        deleteData("products", id)
            .then((res) => {

                setRefresh(!refresh)
                toast.warning(res?.message)
            }
            )
    }

    useEffect(() => {
        dispatch(getProduct())
        console.log("entities", entities)
    }, [refresh])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4 className='fw-600'>
                            Products
                        </h4>
                    </div>

                    <div className="col-auto">
                        <Link to={"/add-products"} className='btn btn-sm btn-primary'>
                            Add New
                        </Link>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-md-12">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Category</th>
                                    <th>Brand</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {entities.map((val, index) => {
                                    return (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{val.title}</td>
                                            <td>{val.description}</td>
                                            <td>{val.category}</td>
                                            <td>{val.brand}</td>
                                            <td>{val.price}</td>
                                            <td>
                                                <Link to={`/view-product/${val._id}`}>
                                                    <BsEye
                                                        className='text-muted me-3 cursor-pointer' size={26}
                                                    />
                                                </Link>

                                                <Link to={`/edit-product/${val._id}`}>
                                                    <BsPencilSquare
                                                        // onClick={() => editModal(item._id, item?.brandName)}
                                                        className='text-primary me-3 cursor-pointer' size={26} />
                                                </Link>
                                                <BsFillTrash3Fill
                                                    onClick={() => handleDelete(val?._id)}
                                                    className='text-danger cursor-pointer' size={26} />
                                            </td>

                                        </tr>
                                    )
                                })}

                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProductScreen