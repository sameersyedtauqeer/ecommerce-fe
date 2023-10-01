import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import add1 from "../../assets/Images/add1.svg";
import add2 from "../../assets/Images/add2.svg";
import card1 from "../../assets/Images/card1.svg";
import card2 from "../../assets/Images/card2.svg";
import card3 from "../../assets/Images/card3.svg";


import main from "../../assets/Images/main.svg";
import side1 from "../../assets/Images/side1.svg";
import side2 from "../../assets/Images/side2.svg";
import side3 from "../../assets/Images/side3.svg";
import side4 from "../../assets/Images/side4.svg";




const BlogScreen = () => {
    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-9">

                        <div className="text-center pb-3">
                            <h2 className="fw-600">
                                COVID19 & Pets (Special Edition)
                            </h2>

                            <p className="fw-500 pt-3 blog-text s-16">BY: Petacare.com / sep 26 2020 / 0 Comments</p>
                        </div>


                        <img width='100%' src={main} alt="" />

                        <div className="mt-5 pb-3">
                            <h2 className="fw-600">
                                COVID19 & Pets (Special Edition)
                            </h2>

                            <p className="fw-500 pt-3 l-height-25 blog-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

                            <a href="" className="bg-text fw-600 s-17 bor-bottom ">Read More</a>

                        </div>
                    </div>

                    <div className="col-md-3 mt-3">
                        <div>
                            <h6 className="text-uppercase fw-600 border-bottom pb-3">Search</h6>
                        </div>

                        <InputGroup size="lg" className="mb-3  mt-4">
                            <Form.Control
                                placeholder="Search..."
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                className="pt-3 pb-3 rounded-0 input-bg"
                            />
                            <Button variant="outline-secondary" id="button-addon2" className="bg-dark  rounded-0 px-4">
                                <i className="fas fa-search text-white"></i>
                            </Button>
                        </InputGroup>

                        <div>
                            <h6 className="text-uppercase fw-600 border-bottom pb-3 mt-5">Facebook Posts</h6>
                        </div>

                        <div className="media d-flex mt-4 mb-4 pb-2 border-bottom">
                            <div>

                                <img className="mr-3" src={side1} alt="Generic placeholder image" />
                            </div>

                            <div className="media-body ps-3">
                                <p className="m-0 s-14 blog-side">17.Sep.2020</p>
                                <h5 className="m-0 s-16 fw-500">The reason you should have a pet dog</h5>
                                <p className="p-0 s-14 blog-side">0 Comments</p>

                            </div>
                        </div>

                        <div className="media d-flex mt-4 mb-4 pb-2 border-bottom">
                            <div>

                                <img className="mr-3" src={side2} alt="Generic placeholder image" />
                            </div>

                            <div className="media-body ps-3">
                                <p className="m-0 s-14 blog-side">17.Sep.2020</p>
                                <h5 className="m-0 s-16 fw-500">The reason you should have a pet dog</h5>
                                <p className="p-0 s-14 blog-side">0 Comments</p>

                            </div>
                        </div>

                        <div className="media d-flex mt-4 mb-4 pb-2 border-bottom">
                            <div>

                                <img className="mr-3" src={side3} alt="Generic placeholder image" />
                            </div>

                            <div className="media-body ps-3">
                                <p className="m-0 s-14 blog-side">17.Sep.2020</p>
                                <h5 className="m-0 s-16 fw-500">The reason you should have a pet dog</h5>
                                <p className="p-0 s-14 blog-side">0 Comments</p>

                            </div>
                        </div>

                        <div className="media d-flex mt-4 mb-4 pb-2 border-bottom">
                            <div>

                                <img className="mr-3" src={side4} alt="Generic placeholder image" />
                            </div>

                            <div className="media-body ps-3">
                                <p className="m-0 s-14 blog-side">17.Sep.2020</p>
                                <h5 className="m-0 s-16 fw-500">The reason you should have a pet dog</h5>
                                <p className="p-0 s-14 blog-side">0 Comments</p>

                            </div>
                        </div>

                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-6">
                        <img width='100%' src={add1} alt="" />
                        <div className="text-end pt-2">
                            <p className="s-16">Sponsored</p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <img width='100%' src={add2} alt="" />
                        <div className="text-end pt-2">
                            <p className="s-16 ">Sponsored</p>
                        </div>
                    </div>
                </div>

                <div className="row mb-5">
                    <div className="col-md-12 mt-5 mb-4">
                        <h1 className="fw-600 text-center">
                            Petacare News
                        </h1>
                    </div>

                    <div className="col-md-4">
                        <img width='100%' src={card1} alt="" />

                        <h5 className="fw-600 pt-4">Little peace or dummy goodwill</h5>

                        <p className="s-15 blog-text fe-500">BY: Admin / 0 Comments </p>

                        <p className="fw-500 l-height blog-text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

                        <a href="" className="fw-600 bg-text s-16 bor-bottom"> Read More</a>
                    </div>

                    <div className="col-md-4">
                        <img width='100%' src={card2} alt="" />

                        <h5 className="fw-600 pt-4">Little peace or dummy goodwill</h5>

                        <p className="s-15 blog-text">BY: Admin / 0 Comments </p>

                        <p className="fw-500 l-height blog-text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

                        <a href="" className="fw-600 bg-text s-16 bor-bottom"> Read More</a>
                    </div>

                    <div className="col-md-4">
                        <img width='100%' src={card3} alt="" />

                        <h5 className="fw-600 pt-4">Little peace or dummy goodwill</h5>

                        <p className="s-15 blog-text">BY: Admin / 0 Comments </p>

                        <p className="fw-500 l-height blog-text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

                        <a href="" className="fw-600 bg-text s-16 bor-bottom"> Read More</a>
                    </div>
                </div>

                <div className="row align-items-center justify-content-center mb-5">
                    <div className="col-auto">
                        <p className="m-0">
                            <i className="fas fa-angle-left"></i>
                        </p>
                    </div>

                    <div className="col-auto bg-red">
                        <p className="s-18 m-0 text-white fw-600">
                            1
                        </p>
                    </div>

                    <div className="col-auto">
                        <p className="s-18 m-0 fw-600">
                            2
                        </p>
                    </div>

                    <div className="col-auto">
                        <p className="s-18 m-0 fw-600">
                            3
                        </p>
                    </div>

                    <div className="col-auto">
                        <p className="s-18 m-0 fw-600">
                            4
                        </p>
                    </div>

                    <div className="col-auto">
                        <p className="s-18 m-0 fw-600" >
                            5
                        </p>
                    </div>

                    <div className="col-auto">
                        <p className="m-0">
                            <i className="fas fa-angle-right"></i>
                        </p>
                    </div>
                </div>




            </div>
        </>
    )

}
export default BlogScreen


