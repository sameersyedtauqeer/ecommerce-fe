import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getBrand } from '../../Redux/Slices/brandSlice';
import Table from 'react-bootstrap/Table';
import { BsFillTrash3Fill, BsPencilSquare, BsPlusLg } from "react-icons/bs";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Button, ModalFooter } from 'react-bootstrap';
import { deleteData, postData, putData } from '../../ApiConstant/api';
import { toast } from 'react-toastify';

const AddBrandScreen = () => {

    const dispatch = useDispatch();
    const { brandList } = useSelector((state) => state.brand)

    const [refresh, setRefresh] = useState(false)
    const handleCloseAddModal = () => setShowAddModal(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const handleAddModal = () => setShowAddModal(true);



    const [brandValue, setBrandValue] = useState("")
    const [editValue, setEditValue] = useState("")
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [brandId, setBrandId] = useState()


    useEffect(() => {
        dispatch(getBrand())
    }, [refresh])

    const handleDelete = (id) => {
        deleteData("brands", id)
            .then((data) => {
                setRefresh(!refresh)
                // console.log(data)
                toast.warning(data?.message);
                // setTimeout(() => {
                //     alert(data?.message)
                // }, 1000);

            })
    }

    const editModal = (id, name) => {
        setBrandId(id)
        setEditValue(name)
        setShow(true)
    }

    const handleEdit = (event) => {
        event.preventDefault();
        const data = { name: editValue, id: brandId }
        putData("brands", data)
            .then((result) => {
                setEditValue("")
                setShow(false)
                setRefresh(!refresh)
                toast.success(result?.message)
            })
            .catch((err) => {
                console.log(err)
            })

    }

    const handleAddBrand = async (e) => {
        e.preventDefault();

        const data = { name: brandValue }

        postData("brands", data)
            .then((result) => {
                toast.success(result?.message);
                setRefresh(!refresh)
                console.log(result);
                setBrandValue("")
                setShowAddModal(false)
            })
    }

    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4 className='fw-600 '>

                            Brands
                        </h4>
                    </div>

                    <div className="col-auto">
                        <button onClick={handleAddModal} className='btn btn-primary'>
                            <BsPlusLg className='text-white me-1' />

                            Add Brand</button>
                    </div>
                </div>


                <div className="col-md-12 mt-4">


                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Brand Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {brandList?.map((item, index) => (
                                <>
                                    <tr>
                                        <>
                                            <td>{index + 1}</td>
                                            <td>{item?.brandName}</td>
                                            <td>
                                                <BsPencilSquare onClick={() => editModal(item._id, item?.brandName)} className='text-primary me-3 cursor-pointer' size={26} />
                                                <BsFillTrash3Fill onClick={() => handleDelete(item?._id)} className='text-danger cursor-pointer' size={26} />
                                            </td>
                                        </>
                                    </tr>

                                </>

                            ))}


                        </tbody>
                    </Table>
                </div>
            </div>


            <Modal show={showAddModal} onHide={handleCloseAddModal}>
                <Modal.Header closeButton style={{ fontSize: "12px" }}>
                    <Modal.Title style={{ fontSize: "16px" }}> Add Brand</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="">
                        <div className="row align-items-end">
                            <div className="col">
                                <label htmlFor="" className='fw-600 s-14 mb-2'>
                                    Enter Enter
                                </label>
                                <input type="text" value={brandValue} onChange={e => setBrandValue(e.target.value)} className='form-control' />
                            </div>

                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" size='sm' onClick={handleCloseAddModal}>
                        Close
                    </Button>
                    <Button variant="primary" size='sm' onClick={handleAddBrand}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Brand</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleEdit}>
                        <div className="row align-items-end">
                            <div className="col">
                                <label htmlFor="" className='s-14 fw-600 mb-2'>Update Brand Name </label>
                                <input type="text" value={editValue} name='edit_value' onChange={(e) => setEditValue(e.target.value)} placeholder=" enter brand name" className='form-control' />

                            </div>
                            <div className="col-auto">

                                <button type='submit' className='btn btn-primary'>Update</button>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <ModalFooter />
            </Modal>





        </>
    )
}

export default AddBrandScreen