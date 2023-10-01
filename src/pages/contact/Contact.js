import React from 'react'
import ContactScreen from "../../Components/contact/ContactScreen";
import MapScreen from "../../Components/contact/MapScreen";
import BreadcrumScreen from "../../Components/breadcrum/BreadcrumScreen";



const Contact = () => {
  return (
    <>
    <BreadcrumScreen url="Contact Us"/>
      <ContactScreen />

      <MapScreen />
    </>
  )
}

export default Contact