import React from "react";
import RegistrationScreen from "../../Components/auth/RegistrationScreen";
import BreadcrumScreen from "../../Components/breadcrum/BreadcrumScreen";
const Registration = () => {
    return(
        <>
        <BreadcrumScreen url="Registration"/>
        <RegistrationScreen />
        </>
    )
}

export default Registration