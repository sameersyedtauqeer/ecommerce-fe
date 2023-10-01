import React, { useState } from 'react'
import ViewProductScreen from '../Components/AddProducts/ViewProductScreen'
import { useParams } from 'react-router-dom'
import { getSingleProduct } from '../ApiConstant/api';

const ViewProducts = () => {
    return (
        <>
            <ViewProductScreen />
        </>
    )
}

export default ViewProducts