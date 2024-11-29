import React from 'react'
import PageBanner from '../components/sections/pageBanner'
import ServiceFour from '../components/sections/services/serviceFour'
import ExperienceFour from '../components/sections/experiences/experienceFour'
import TestimonialOne from '../components/sections/testimoniales/testimonialOne'
import CarouselPage from '../components/sections/pageCarousel'
import TradingSection from '../components/sections/services/tradingSection'

const ServiceTwo = () => {
    const slides = [
        { image: 'https://assets.hrewards.com/assets/jpg.xxlarge_Adobe_Stock_64982026_10ba1a152b.jpg?optimize', heading: 'Our Service' },
        { image: 'https://avatars.mds.yandex.net/get-altay/13581124/2a0000018f38fd0680a754c66ea3c48b4466/XXL_height',heading:"Aluminium" },
        { image: 'https://i.pinimg.com/originals/b5/50/ef/b550ef73abfd2e07e9da96fe7e45e139.jpg',heading:"Mashrabiya" },
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