import React from 'react'
import PageBanner from '../components/sections/pageBanner'
import HeadeingSlider from '../components/sections/headeingSlider'
import VideoArea from '../components/sections/videoArea'
import TestimonialOne from '../components/sections/testimoniales/testimonialOne'
import ServiceThree from '../components/sections/services/serviceThree'

const ServiceOne = () => {
    return (
        <main>
            <PageBanner breadcrumbTitle={"Our Services"} />
            <ServiceThree />
            <HeadeingSlider bg_color={"primary-bg"} dir="to-left" />
            <VideoArea />
            <HeadeingSlider bg_color={"primary-bg"} dir="to-right" />
            {/* <TestimonialOne /> */}
        </main>
    )
}

export default ServiceOne