import React from 'react'
import TakeCare from "../Components/about/TakeCare";
import Achivement from "../Components/about/Achivement";
import AboutTeam from "../Components/about/AboutTeam";
import AboutTestimonils from "../Components/about/AboutTestimonils";
import BreadcrumScreen from "../Components/breadcrum/BreadcrumScreen";




const About = () => {
  return (
    <>
    <BreadcrumScreen url="About Us"/>
    <TakeCare />
    <Achivement />
    <AboutTeam />
    <AboutTestimonils />

    </>
  )
}

export default About