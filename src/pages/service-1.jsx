import React from 'react'
import PageBanner from '../components/sections/pageBanner'
import HeadeingSlider from '../components/sections/headeingSlider'
import VideoArea from '../components/sections/videoArea'
import TestimonialOne from '../components/sections/testimoniales/testimonialOne'
import ServiceThree from '../components/sections/services/serviceThree'
import CarouselPage from '../components/sections/pageCarousel'

const ServiceOne = () => {
    const slides = [
        { image: 'https://www.al-othman.com/uploads/real-estate-companies/construction111.jpg', heading: 'Our Services' },
        { image: 'https://www.al-othman.com/uploads/real-estate-companies/construction111.jpg' },
        { image: 'https://www.al-othman.com/uploads/real-estate-companies/construction111.jpg', },
    ];
    return (
        <main>
            {/* <PageBanner breadcrumbTitle={"Our Services"} /> */}
            <CarouselPage slides={slides} />
            <ServiceThree />
            <HeadeingSlider bg_color={"primary-bg"} dir="to-left" />
            {/* <VideoArea /> */}
            <HeadeingSlider bg_color={"primary-bg"} dir="to-right" />
            {/* <TestimonialOne /> */}
        </main>
    )
}

export default ServiceOne