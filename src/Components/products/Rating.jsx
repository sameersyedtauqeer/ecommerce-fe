import React from 'react'

const Rating = (props) => {
    const rating = 3
    return (
        <>

            <div className=''>
                <span className=''>

                    {
                        props.rate === 1 && (
                            <>
                                <i className="fa-solid fa-star text-warning"></i>
                                <i className="fa-solid fa-star text-muted"></i>
                                <i className="fa-solid fa-star text-muted"></i>
                                <i className="fa-solid fa-star text-muted"></i>
                                <i className="fa-solid fa-star text-muted" ></i>
                            </>

                        )
                    }
                    {
                        props.rate === 2 && (
                            <>
                                <i className="fa-solid fa-star text-warning"></i>
                                <i className="fa-solid fa-star text-warning"></i>
                                <i className="fa-solid fa-star text-muted"></i>
                                <i className="fa-solid fa-star text-muted"></i>
                                <i className="fa-solid fa-star text-muted" ></i>
                            </>


                        )
                    }

                    {
                        props.rate === 3 && (
                            <>
                                <i className="fa-solid fa-star text-warning"></i>
                                <i className="fa-solid fa-star text-warning"></i>
                                <i className="fa-solid fa-star text-warning"></i>
                                <i className="fa-solid fa-star text-muted"></i>
                                <i className="fa-solid fa-star text-muted" ></i>
                            </>
                        )
                    }
                    {
                        props.rate === 4 && (
                            <>
                                <i className="fa-solid fa-star text-warning"></i>
                                <i className="fa-solid fa-star text-warning"></i>
                                <i className="fa-solid fa-star text-warning"></i>
                                <i className="fa-solid fa-star text-warning"></i>
                                <i className="fa-solid fa-star text-muted" ></i>
                            </>
                        )
                    }
                    {
                        props.rate === 5 && (
                            <>
                                <i className="fa-solid fa-star text-warning"></i>
                                <i className="fa-solid fa-star text-warning"></i>
                                <i className="fa-solid fa-star text-warning"></i>
                                <i className="fa-solid fa-star text-warning"></i>
                                <i className="fa-solid fa-star text-warning" ></i>
                            </>
                        )
                    }

                </span>
                {/* <span className='bg-text fw-600 s-18'>{data?.rating?.rate}</span> */}
            </div>

        </>
    )
}

export default Rating