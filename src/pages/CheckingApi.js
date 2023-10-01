import React, { useEffect, useState } from 'react'
import { category, fetchData } from '../ApiConstant/api'

const CheckingApi = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetchData(`category`)
            .then((result) => {
                setData(result)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    console.log("data from api function  ====== ", data)

    return (
        <>

            <h1>Checking Api</h1>

        </>
    )
}

export default CheckingApi