import React from 'react'
import PageBanner from '../components/sections/pageBanner'
import ProductAllCard from '../components/sections/products/productAllCard'
import CarouselPage from '../components/sections/pageCarousel';

const Product = () => {
  const slides = [
    { image: 'https://www.al-othman.com/uploads/real-estate-companies/construction111.jpg', heading: 'Product' },
    { image: 'https://proest.com/wp-content/uploads/2022/11/Building-Construction-Process-From-Start-To-Finish.jpg' },
    { image: 'https://www.al-othman.com/uploads/real-estate-companies/construction111.jpg', },
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