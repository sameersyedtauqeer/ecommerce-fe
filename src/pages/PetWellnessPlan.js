import React from 'react'
import PetWellnessScreen from "../Components/petwellness/PetWellnessScreen";
import BreadcrumScreen from "../Components/breadcrum/BreadcrumScreen";

const PetWellnessPlan = () => {
  return (
    <>
    <BreadcrumScreen url="Pet Wellness Plan"/>
    <PetWellnessScreen />
    </>
  )
}

export default PetWellnessPlan