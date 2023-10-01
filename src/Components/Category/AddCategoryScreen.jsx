import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import { BsFillTrash3Fill, BsPencilSquare } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteData, postData, putData } from '../../ApiConstant/api';
import { getCategory } from "../../Redux/Slices/categorySlice";


const AddCategoryScreen = () => {

    const [showAddModal, setShowAddModal] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [data, setData] = useState("");
    const [categoryId, setCategoryId] = useState();
    const [editedCategory, setEditedValue] = useState("");

    const handleCloseAddModal = () => setShowAddModal(false);
    const handleAddModal = () => setShowAddModal(true);

    const [showEditModal, setShowEditModal] = useState(false);
    const handleCloseEditModal = () => setShowEditModal(false);
    const handleEditModal = () => setShowEditModal(true);

    const { loading, categoryList } = useSelector((state) => state.category)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategory())
        console.log("categoryList =======", categoryList)
    }, [refresh])


    const handleDelete = async (id) => {
        deleteData("category", id)
            .then((res) => {
                setRefresh(!refresh)
                toast.success(res?.message)
            })
    }

    const handleAddCategory = async (event) => {
        event.preventDefault()
        const obj = { category: data };
        postData("category", obj)
            .then((result) => {
                setRefresh(!refresh)
                setData("")
                setShowAddModal(false)
                toast.success(result?.message)
            })
    }

    const handleShowEditModal = async (id, name) => {

        setCategoryId(id)
        setEditedValue(name)
        setShowEditModal(true)
    }

    const hanldeUpdateCategory = async (event) => {
        event.preventDefault();
        const obj = { id: categoryId, category: editedCategory }

        putData("category", obj)
            .then((res) => {
                setEditedValue("")
                setShowEditModal(false)
                setRefresh(!refresh)
                toast.success(res?.message)
            })

    }


    return (
        <>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col">
                        <h4 className='fw-600 mb-0'>
                            Categories
                        </h4>

                    </div>

                    <div className="col-auto">
                        <button onClick={handleAddModal} className='text-capitalize btn btn-primary'>
                            add category
                        </button>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-md-12">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Category</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {categoryList.map((item, index) => (
                                    <>
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{item?.category}</td>
                                            <td>
                                                <BsPencilSquare
                                                    onClick={() => handleShowEditModal(item?._id, item?.category)}
                                                    className='text-primary me-3 cursor-pointer' size={26} />
                                                <BsFillTrash3Fill
                                                    onClick={() => handleDelete(item?._id)}
                                                    className='text-danger cursor-pointer' size={26} />
                                            </td>
                                        </tr>

                                    </>
                                ))}


                            </tbody>
                        </Table>
                    </div>
                </div>


            </div>

            {/* Add category modal start */}

            <Modal show={showAddModal} onHide={handleCloseAddModal}>
                <Modal.Header closeButton style={{ fontSize: "12px" }}>
                    <Modal.Title style={{ fontSize: "16px" }}> Add Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="">
                        <div className="row align-items-end">
                            <div className="col">
                                <label htmlFor="" className='fw-600 s-14 mb-2'>
                                    Enter category
                                </label>
                                <input type="text" value={data} onChange={(e) => setData(e.target.value)} className='form-control' />
                            </div>

                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" size='sm' onClick={handleCloseAddModal}>
                        Close
                    </Button>
                    <Button variant="primary" size='sm' onClick={handleAddCategory}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* edit modal start */}

            <Modal show={showEditModal} onHide={handleCloseEditModal}>
                <Modal.Header closeButton style={{ fontSize: "12px" }}>
                    <Modal.Title style={{ fontSize: "16px" }}> Edit Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="">
                        <div className="row align-items-end">
                            <div className="col">
                                <label htmlFor="" className='fw-600 s-14 mb-2'>
                                    Enter New Category
                                </label>
                                <input type="text" value={editedCategory} onChange={(e) => setEditedValue(e.target.value)} className='form-control' />
                            </div>

                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" size='sm' onClick={handleCloseEditModal}>
                        Close
                    </Button>
                    <Button variant="primary" size='sm' onClick={hanldeUpdateCategory}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddCategoryScreen