import React from 'react'
import BreadcrumScreen from "../../Components/breadcrum/BreadcrumScreen";
import CuteDog from "../../Components/cutedogprofile/CuteDog";


const CuteDogProfile = () => {
    return (
        <>
            <BreadcrumScreen url="CDC Pet Contest's profile"/>
            <CuteDog />
        </>
    )
}

export default CuteDogProfile