import React from "react";
import VitalDocument from "../../Components/vitaldocuments/VitalDocument";
import BreadcrumScreen from "../../Components/breadcrum/BreadcrumScreen";


const VitalDocumentScreen = () => {
    return (
        <>
        <BreadcrumScreen url="Vital Document"/>
        <VitalDocument />
        </>
    )
}

export default VitalDocumentScreen