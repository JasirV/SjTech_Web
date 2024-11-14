import React from 'react'
import PageBanner from '../components/sections/pageBanner'
import ProductAllCard from '../components/sections/products/productAllCard'

const Product = () => {
  return (
    <div>
        <PageBanner breadcrumbTitle={"Our Products"} />
        
        <ProductAllCard/>
    </div>
  )
}

export default Product