import React from 'react'
import PageBanner from '../components/sections/pageBanner'
import HeadeingSlider from '../components/sections/headeingSlider'
import VideoArea from '../components/sections/videoArea'
import TestimonialOne from '../components/sections/testimoniales/testimonialOne'
import ServiceThree from '../components/sections/services/serviceThree'
import CarouselPage from '../components/sections/pageCarousel'
import ServiceSix from '../components/sections/services/serviceSix'
import ServiceContractingProduct from '../components/sections/services/serviceContractingProduct'
import { Helmet } from 'react-helmet-async'

const ServiceOne = () => {
    const slides = [
        { image: 'https://thepointsguy.global.ssl.fastly.net/us/originals/2021/02/accor-fairmont-raffles-dubai.jpg?width=2048', heading: 'Our Services' },
        { image: 'https://images.prismic.io/belongtest/7155fb81-e597-4770-945a-182b09b1b3f7_9.jpg?ixlib=js-3.6.0&amp;auto=format',heading:"Glass Works" },
        { image: 'https://www.myddisplay.com/include/upload/kind/image/20180329/20180329185234_7019.jpg',heading:'LED Screen Works' },
    ];
    return (
        <>
        <Helmet>
        <title>Fabrication & Installation | SJ TECH</title>
        <meta
          name="description"
          content="Explore SJ TECH Trading Contracting W.L.L.'s expertise in steel, stainless steel, aluminum, and glass fabrication and installation. From bespoke handrails and glass balustrades to large-scale stainless steel projects, we ensure efficiency and quality at every stage."
        />
        <meta
          name="keywords"
          content="Fabrication, Installation, Steel Fabrication, Stainless Steel, Aluminum, Glass, Handrails, Glass Balustrades, Cladding, Skirting, SJ TECH, Construction Solutions"
        />
        <meta name="author" content="SJ Tech Trading Contracting W.L.L." />
        <link rel="canonical" href="" />
      </Helmet>
        <main>
            {/* <PageBanner breadcrumbTitle={"Our Services"} /> */}
            <CarouselPage slides={slides} />
            <ServiceSix/>
            {/* <ServiceThree /> */}
            <ServiceContractingProduct/>
            {/* <HeadeingSlider bg_color={"primary-bg"} dir="to-left" /> */}
            <VideoArea />
            {/* <HeadeingSlider bg_color={"primary-bg"} dir="to-right" /> */}
            {/* <TestimonialOne /> */}
        </main>
        </>
    )
}

export default ServiceOne