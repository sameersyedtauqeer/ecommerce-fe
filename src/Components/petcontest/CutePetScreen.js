import React from 'react'
import petcontest from "../../assets/Images/pet-contest.svg";

const CutePetScreen = () => {
    return (

        <>
            <section>
                <div className="container mt-5 ">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className='text-center fw-600'>Cute Pet Contest</h1>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-3">
                            <div className="card text-center" >
                                <img className="card-img-top" src={petcontest} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title fw-600">Dog Name</h5>
                                    <p className="card-text text-grey  fw-500">23k Votes</p>
                                    <div>

                                        <button href="#" className="btn-pill mt-3 px-md-5 py-md-3 rounded-pill text-white border-0 text-uppercase">Vote</button>
                                    </div>

                                    <div className='s-16 fw-600 text-grey mt-3 text-uppercase' >

                                        <i className="fa-solid fa-share-nodes  me-2"></i>
                                        Share
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card text-center" >
                                <img className="card-img-top" src={petcontest} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title fw-600">Dog Name</h5>
                                    <p className="card-text text-grey  fw-500">23k Votes</p>
                                    <div>

                                        <button href="#" className="btn-pill mt-3 px-md-5 py-md-3 rounded-pill text-white border-0 text-uppercase">Vote</button>
                                    </div>

                                    <div className='s-16 fw-600 text-grey mt-3 text-uppercase' >

                                        <i className="fa-solid fa-share-nodes  me-2"></i>
                                        Share
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card text-center" >
                                <img className="card-img-top" src={petcontest} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title fw-600">Dog Name</h5>
                                    <p className="card-text text-grey  fw-500">23k Votes</p>
                                    <div>

                                        <button href="#" className="btn-pill mt-3 px-md-5 py-md-3 rounded-pill text-white border-0 text-uppercase">Vote</button>
                                    </div>

                                    <div className='s-16 fw-600 text-grey mt-3 text-uppercase' >

                                        <i className="fa-solid fa-share-nodes  me-2"></i>
                                        Share
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card text-center" >
                                <img className="card-img-top" src={petcontest} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title fw-600">Dog Name</h5>
                                    <p className="card-text text-grey  fw-500">23k Votes</p>
                                    <div>

                                        <button href="#" className="btn-pill mt-3 px-md-5 py-md-3 rounded-pill text-white border-0 text-uppercase">Vote</button>
                                    </div>

                                    <div className='s-16 fw-600 text-grey mt-3 text-uppercase' >

                                        <i className="fa-solid fa-share-nodes  me-2"></i>
                                        Share
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default CutePetScreen