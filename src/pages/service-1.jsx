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
        { image: 'https://avatars.mds.yandex.net/get-altay/2022045/2a0000016bfecc3744a139533a43e7fe5427/XXL_height',heading:'Handrails' },
        { image: 'https://storage.yandexcloud.net/moskvichmag/uploads/2019/04/shutterstock_1186906468.jpg',heading:'Steel Works' },
        { image: 'https://avatars.mds.yandex.net/get-ydo/1649611/2a0000017110e376d39f44dd81e01a0f2a4e/diploma',heading:'Glass Partitions' },
        { image: 'https://img2.teletype.in/files/9d/0e/9d0ef844-740b-419b-847e-4131ad29c077.png',heading:'Curtain Wall' },
        { image: 'https://lindusconstruction.com/wp-content/uploads/2021/01/2-panel-Infinity-Sliding-French-Door-and-Casement-windows.jpg',heading:'Windows and Doors' },
        { image: 'https://i.pinimg.com/originals/f2/8b/12/f28b12b6f9069684727be8c3cf744c72.jpg',heading:'ACP Cladding' },
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
