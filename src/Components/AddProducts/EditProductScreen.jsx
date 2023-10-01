import React, { useState } from 'react'
import { BsImage, BsInfoCircle } from 'react-icons/bs'
import EditProductImage from './EditProductImage'
import EditProductInfo from './EditProductInfo'
import { useParams } from 'react-router-dom'
import { getSingleProduct } from '../../ApiConstant/api'
import { useEffect } from 'react'

const EditProductScreen = () => {

    const [tabs, setTabs] = useState("Info")
    const { id } = useParams()
    const [body, setBody] = useState(null)

    const getDetails = () => {
        getSingleProduct("products", id)
            .then((res) => {
                setBody(res?.data)
                // console.log("res from edit screen========= ", res)
            })
    }

    useEffect(() => {
        getDetails();
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h4>
                            Edit Products
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
                    {/* <div className="col-md-4">
                        <div
                            className={`card p-4 border-0 shadow-sm  ${tabs === "finish" ? "bg-success text-light" : ""}`}>
                            <div className="row align-items-center">

                                <p className='s-20  mb-0 text-center'>
                                    <BsCheckCircle /> Finish {" "}
                                </p>

                            </div>
                        </div>
                    </div> */}
                </div>

                <div className="row mt-4">
                    <div className="col-md-12">
                        {tabs === "Info" && (<EditProductInfo tabs={setTabs} data={body} />)}

                        {tabs === "image" && (<EditProductImage tabs={setTabs} data={body} />)}

                        {/* {tabs === "finish" && (<FinishScreen tabs={setTabs} />)} */}

                    </div>
                </div>
            </div >
        </>
    )
}

export default EditProductScreen