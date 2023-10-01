import React from 'react'
import CutePetScreen from "../Components/petcontest/CutePetScreen";
import OurSponsorsScreen from "../Components/petcontest/OurSponsorsScreen";
import BreadcrumScreen from "../Components/breadcrum/BreadcrumScreen";



const CutePetContest = () => {
  return (
    <>
      <BreadcrumScreen url="CDC Pet Contest"/>
      <CutePetScreen />
      <OurSponsorsScreen />
    </>
  )
}

export default CutePetContest