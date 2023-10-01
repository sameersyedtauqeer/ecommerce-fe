import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { getBrand } from '../../Redux/Slices/brandSlice';
import { getCategory } from '../../Redux/Slices/categorySlice';
import { addProductInfo } from '../../Redux/Slices/productSlice';
import Row from 'react-bootstrap/Row';

import Col from 'react-bootstrap/Col';
import { TagsInput } from "react-tag-input-component";


const EditProductInfo = (props) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [brand, setBrand] = useState("");
    const [validated, setValidated] = useState(false);
    const [color, setColors] = useState([]);
    const [size, setSizes] = useState([]);

    const [titleError, setTitleError] = useState(false)
    const [priceError, setPriceError] = useState(false)
    const [descriptionError, setDescriptionError] = useState(false)
    const [brandError, setBrandError] = useState(false)
    const [categoryError, setCategoryError] = useState(false)

    console.log("props data", props?.data)

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     const obj = {
    //         title,
    //         description,
    //         price,
    //         category,
    //         brand,
    //         sizes,
    //         colors
    //     }
    //     // console.log(obj)
    //     dispatch(addProductInfo(obj))
    //     props.tabs("image")
    // }

    const hanldeSetValue = () => {

        if (props) {
            setTitle(props?.data?.title);
            setDescription(props?.data?.description)
            setCategory(props?.data?.category);
            setBrand(props?.data?.brand)
            setPrice(props?.data?.price)
            setColors(props?.data?.color)
            setSizes(props?.data?.size)
        }
    }



    const handleSubmit = (event) => {
        event.preventDefault();

        if (title.trim() == "") {
            setTitleError(true)
            return
        }
        if (brand.trim() == "") {
            setBrandError(true)
            return
        }
        if (category.trim() == "") {
            setCategoryError(true)
            return
        }
        if (price.trim() == "") {
            setPriceError(true)
            return
        }

        if (description.trim() == "") {
            setDescriptionError(true)
            return
        }

        else {
            const obj = {
                title,
                description,
                price,
                category,
                brand,
                size,
                color
            }
            console.log("color", color)
            dispatch(addProductInfo(obj))
            props.tabs("image")
            console.log("obj ======== ", obj)
        }

        // setValidated(true);

    };

    const dispatch = useDispatch();
    const { brandList } = useSelector((state) => state.brand)
    const { categoryList } = useSelector((state) => state.category)

    useEffect(() => {
        dispatch(getBrand())
        dispatch(getCategory())
        // console.log("first", categoryList)
        hanldeSetValue()
    }, [props])

    return (

        <>


            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="12" className='mb-3' controlId="validationCustom01">
                        <Form.Label className='fw-600 s-14'>Title </Form.Label>
                        <sup className='text-danger '>*</sup>
                        <Form.Control
                            onChange={(e) => setTitle(e.target.value) + setTitleError(false)}
                            value={title}
                            required
                            type="text"
                            placeholder="First name"
                        />
                        {
                            titleError && (<small className='text-danger fw-600'> Title is Required!</small>)
                        }

                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label className='fw-600 s-14'>Brand</Form.Label>
                        <sup className='text-danger '>*</sup>

                        <Form.Select value={brand} onChange={(e) => setBrand(e.target.value) + setBrandError(false)} aria-label="Default select example" required>
                            <option selected disabled>{brand}</option>
                            {brandList?.map((brand) => {
                                return (
                                    <>
                                        <option>{brand.brandName}</option>
                                    </>
                                )
                            })}

                        </Form.Select>
                        {
                            brandError && (<small className='text-danger fw-600'> Brand is Required!</small>)
                        }
                    </Form.Group>


                    <Form.Group as={Col} md="4" controlId="validationCustom03">
                        <Form.Label className='fw-600 s-14'>Category</Form.Label>
                        <sup className='text-danger '>*</sup>

                        <Form.Select value={category} onChange={(e) => setCategory(e.target.value) + setCategoryError(false)} aria-label="Default select example" required>
                            <option selected disabled>{category}</option>
                            {categoryList.map((category) => {
                                return (
                                    <>
                                        <option >{category.category}</option>
                                    </>
                                )
                            })}
                        </Form.Select>
                        {
                            categoryError && (<small className='text-danger fw-600'> Category is Required!</small>)
                        }
                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label className='fw-600 s-14'>Price</Form.Label>
                        <sup className='text-danger '>*</sup>

                        <Form.Control
                            value={price}
                            onChange={(e) => setPrice(e.target.value) + setPriceError(false)}
                            required
                            type="text"
                            placeholder="First name"
                        />
                        {
                            priceError && (<small className='text-danger fw-600'> Price is Required!</small>)
                        }
                    </Form.Group>

                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom05">
                        <Form.Label className='fw-600 s-14'>Add Colors</Form.Label>
                        {Array.isArray(color) && (

                            <TagsInput
                                value={color}
                                onChange={setColors}
                                // name="fruits"
                                placeHolder="enter fruits"
                                required
                            />
                        )}

                    </Form.Group>

                    <Form.Group as={Col} md="6" className='mb-3' controlId="validationCustom06">
                        <Form.Label className='fw-600 s-14'>Add Sizes</Form.Label>
                        {Array.isArray(size) && (

                            <TagsInput
                                value={size}
                                onChange={setSizes}
                                // name="fruits"
                                placeHolder="enter fruits"
                                required
                            />
                        )}

                        {/* {
                            sizeError && (<small className='text-danger fw-600'> size is Required!</small>)
                        } */}

                    </Form.Group>

                    <Form.Group as={Col} md="12" className='mb-3' controlId="validationCustom04" >
                        <Form.Label className='fw-600 s-14'>Description</Form.Label>
                        <sup className='text-danger '>*</sup>


                        <Form.Control
                            value={description}
                            onChange={(e) => setDescription(e.target.value) + setDescriptionError(false)} as="textarea"
                            rows={3} required />
                        {
                            descriptionError && (<small className='text-danger fw-600'> Description is Required!</small>)
                        }
                    </Form.Group>

                </Row>

                <Button type="submit">Submit form</Button>
            </Form>
        </>

        // <div className="container">
        //     <div className="row">
        //         <div className="card border-0 shadow-sm p-5">
        //             <Form onSubmit={hanldeSubmit}>
        //                 <div className="row">
        //                     <div className="col-md-6">
        //                         <Form.Group className="mb-3" controlId="formBasicText">
        //                             <Form.Label className='fw-600 s-14'>Title</Form.Label>
        //                             <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Enter email" />

        //                         </Form.Group>
        //                     </div>

        //                     <div className="col-md-6">
        //                         <Form.Group className="mb-3" controlId="formBasicText">
        //                             <Form.Label className='fw-600 s-14'>Price</Form.Label>
        //                             <Form.Control value={price} onChange={(e) => setPrice(e.target.value)} type="text" placeholder="Enter email" />

        //                         </Form.Group>
        //                     </div>

        //                     <div className="col-md-6">
        //                         <Form.Group className="mb-3" controlId="formBasicText">
        //                             <Form.Label className='fw-600 s-14'>Size</Form.Label>
        //                             <Form.Control value={size} onChange={(e) => setSize(e.target.value)} type="text" placeholder="Enter email" />

        //                         </Form.Group>
        //                     </div>

        //                     <div className="col-md-6">
        //                         <Form.Group className="mb-3" controlId="formBasicText">
        //                             <Form.Label className='fw-600 s-14'>Color</Form.Label>
        //                             <Form.Control value={color} onChange={(e) => setColor(e.target.value)} type="text" placeholder="Enter email" />

        //                         </Form.Group>
        //                     </div>

        //                     <div className="col-md-6">
        //                         <Form.Group className="mb-3">
        //                             <Form.Label className='fw-600 s-14'>Category</Form.Label>
        //                             <Form.Select value={category} onChange={(e) => setCategory(e.target.value)} >
        //                                 <option disabled>Select Category</option>
        //                                 {categoryList.map((val) => (
        //                                     <>
        //                                         <option>{val.category}</option>
        //                                     </>
        //                                 ))}
        //                             </Form.Select>
        //                         </Form.Group>
        //                     </div>

        //                     <div className="col-md-6">
        //                         <Form.Group className="mb-3">
        //                             <Form.Label className='fw-600 s-14'>Brand</Form.Label>

        //                             <Form.Select value={brand} onChange={(e) => setBrand(e.target.value)}>
        //                                 <option disabled>Select Brand</option>
        //                                 {brandList.map((val) => (
        //                                     <>
        //                                         <option>{val.brandName}</option>
        //                                     </>
        //                                 ))}
        //                             </Form.Select>
        //                         </Form.Group>
        //                     </div>

        //                     <div className="col-md-12">
        //                         <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        //                             <Form.Label className='fw-600 s-14'>Description</Form.Label>
        //                             <Form.Control value={description} onChange={(e) => setDeccription(e.target.value)} as="textarea" rows={3} />
        //                         </Form.Group>
        //                     </div>
        //                 </div>



        //                 <div className='text-end'>
        //                     <Button variant="primary" type="submit">
        //                         Submit
        //                     </Button>
        //                 </div>
        //             </Form>
        //         </div>
        //     </div>
        // </div>
    )
}

export default EditProductInfo