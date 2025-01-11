import React from 'react'
import PageBanner from '../components/sections/pageBanner'
import ProductAllCard from '../components/sections/products/productAllCard'
import CarouselPage from '../components/sections/pageCarousel';

const Product = () => {
  const slides = [
    { image: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Souq_Waqif%2C_Doha%2C_Catar%2C_2013-08-05%2C_DD_112.JPG', heading: 'Product' },
    { image: 'https://www.rpfindia.com/images/forged-elbow-suppliers-in-mumbai.jpg',heading:"SS Fittings" },
    { image: 'https://lexarindustrial.com/content/hardware/58x5wedgeanchorzinc.jpg',heading:'Bolts'},
];

  return (
    <div>
        {/* <PageBanner breadcrumbTitle={"Our Products"} /> */}
        <CarouselPage slides={slides} />
        
        <ProductAllCard/>
    </div>
  )
}

export default Product