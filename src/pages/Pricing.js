import React from 'react'
import PricingPetOwner from "../Components/pricing/PricingPetOwner";
import PricingServiceProvider from "../Components/pricing/PricingServiceProvider";
import PricingPropertyManager from "../Components/pricing/PricingPropertyManager";
import BreadcrumScreen from "../Components/breadcrum/BreadcrumScreen";



const Pricing = () => {
    return (
        <>
            <BreadcrumScreen url="Pricing" />
            <PricingPetOwner />
            <PricingServiceProvider />
            <PricingPropertyManager />

        </>
    )
}

export default Pricing