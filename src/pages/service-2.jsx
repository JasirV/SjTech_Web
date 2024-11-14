import React from 'react'
import PageBanner from '../components/sections/pageBanner'
import ServiceFour from '../components/sections/services/serviceFour'
import ExperienceFour from '../components/sections/experiences/experienceFour'
import TestimonialOne from '../components/sections/testimoniales/testimonialOne'

const ServiceTwo = () => {
    return (
        <main>
            <PageBanner breadcrumbTitle={"Our Services"} />
            <ServiceFour/>
            <ExperienceFour className={"page bg-image"}/>
            {/* <TestimonialOne/> */}
        </main>
    )
}

export default ServiceTwo