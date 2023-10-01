import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { TagsInput } from "react-tag-input-component";


const FormValidation = () => {

    const [validated, setValidated] = useState(false);
    const [colors, setColors] = useState([]);
    const [sizes, setSizes] = useState([]);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };


    return (
        <>


            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label className='fw-600 s-14'>Title</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="First name"
                        />
                        {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label className='fw-600 s-14'>Brand</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option >Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                        {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="validationCustom03">
                        <Form.Label className='fw-600 s-14'>Category</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option >Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                        {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                    </Form.Group>

                </Row>
                <Row className="mb-3">


                    <Form.Group as={Col} md="6" controlId="validationCustom05">
                        <Form.Label className='fw-600 s-14'>Add Colors</Form.Label>
                        <TagsInput
                            value={colors}
                            onChange={setColors}
                            name="fruits"
                            placeHolder="enter fruits"
                            required
                        />

                    </Form.Group>

                    <Form.Group as={Col} md="6" className='mb-3' controlId="validationCustom06">
                        <Form.Label className='fw-600 s-14'>Add Sizes</Form.Label>
                        <TagsInput
                            value={sizes}
                            onChange={setSizes}
                            name="fruits"
                            placeHolder="enter fruits"
                            required
                        />

                    </Form.Group>

                    <Form.Group as={Col} md="12" className='mb-3' controlId="validationCustom04">
                        <Form.Label className='fw-600 s-14'>Description</Form.Label>

                        <Form.Control as="textarea" rows={3} required />
                    </Form.Group>

                </Row>

                <Button type="submit">Submit form</Button>
            </Form>
        </>

    )
}

export default FormValidation