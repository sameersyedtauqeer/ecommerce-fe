import React, { useState } from 'react'
import { BsCheckCircle, BsFillFileEarmarkImageFill, BsImage, BsInfoCircle, BsInfoCircleFill, BsInfoSquare } from 'react-icons/bs'
import ProductInfo from './ProductInfo'
import ProductImage from './ProductImage'
import FinishScreen from './FinishScreen'

const CreateProductScreen = () => {
    const [tabs, setTabs] = useState("Info")



    return (

        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h4>
                            Add Products
                        </h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className={`card p-4 border-0 shadow-sm  ${tabs === "Info" ? "bg-primary text-light" : "" || tabs === "image" || "finish" ? "bg-success text-light" : ""}`}>
                            <div className="row align-items-center">

                                <p className='s-20  mb-0 text-center'>
                                    <BsInfoCircle /> Product Information {" "}
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div
                            className={`card p-4 border-0 shadow-sm  ${tabs === "image" ? "bg-primary text-light" : "" || tabs === "finish" ? "bg-success text-light" : ""}`}>
                            <div className="row align-items-center">

                                <p className='s-20  mb-0 text-center'>
                                    <BsImage /> Product Images {" "}
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div
                            className={`card p-4 border-0 shadow-sm  ${tabs === "finish" ? "bg-success text-light" : ""}`}>
                            <div className="row align-items-center">

                                <p className='s-20  mb-0 text-center'>
                                    <BsCheckCircle /> Finish {" "}
                                </p>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-md-12">
                        {tabs === "Info" && (<ProductInfo tabs={setTabs} />)}

                        {tabs === "image" && (<ProductImage tabs={setTabs} />)}

                        {tabs === "finish" && (<FinishScreen tabs={setTabs} />)}

                    </div>
                </div>
            </div >
        </>
    )
}

export default CreateProductScreen