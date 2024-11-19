import React from 'react'
import PageBanner from '../components/sections/pageBanner'
import ServiceFour from '../components/sections/services/serviceFour'
import ExperienceFour from '../components/sections/experiences/experienceFour'
import TestimonialOne from '../components/sections/testimoniales/testimonialOne'
import CarouselPage from '../components/sections/pageCarousel'
import TradingSection from '../components/sections/services/tradingSection'

const ServiceTwo = () => {
    const slides = [
        { image: 'https://www.al-othman.com/uploads/real-estate-companies/construction111.jpg', heading: 'Our Service' },
        { image: 'https://www.al-othman.com/uploads/real-estate-companies/construction111.jpg' },
        { image: 'https://www.al-othman.com/uploads/real-estate-companies/construction111.jpg', },
    ];
    return (
        <main>
            {/* <PageBanner breadcrumbTitle={"Our Services"} /> */}
            <CarouselPage slides={slides} />
            <ServiceFour/>
            <TradingSection/>
            {/* <ExperienceFour className={"page bg-image"}/> */}
            {/* <TestimonialOne/> */}
        </main>
    )
}

export default ServiceTwo