import React from 'react'
import Allproducts from "../../Components/products/Allproducts";
import BreadcrumScreen from "../../Components/breadcrum/BreadcrumScreen";


const Product = () => {
  return (
    <>
    <BreadcrumScreen url="Products"/>

    <Allproducts />
    </>
  )
}

export default Product