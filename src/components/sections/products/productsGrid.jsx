import React from 'react'
import Pagination from '../../ui/pagination'
import { productData } from '../../../utils/fackData/productData'
import ProductCard from './productCard'
import ProductSidebar from './productSidebar'
import CustomSelect from '../../ui/customSelect'

const options = [
    { value: 'latest', label: 'Short by latest' },
    { value: 'ubdate', label: 'Short by Ubdate' },
    { value: 'new', label: 'Short by New' }
];
const ProductsGrid = () => {
    return (
        <div className="shop section-padding">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-8">
                        <div className="top-bar sub-bg mb-4 d-flex flex-wrap justify-content-between align-items-center main-bg radius10 px-4 py-3">
                            <span>Showing 1–12 of 15 results</span>
                            <CustomSelect options={options} placeholder={"Short by latest"}/>
                        </div>
                        <div className="product light">
                            <div className="container">
                                <div className="row g-4">
                                    {
                                        productData.map(({ discount_price, id, price, thumbnail, title }) => <div className="col-md-4" key={id}> <ProductCard discount_price={discount_price} price={price} thumbnail={thumbnail} title={title} /> </div>)
                                    }
                                </div>
                                <Pagination />
                            </div>
                        </div>
                    </div>
                    <ProductSidebar/>
                </div>
            </div>
        </div>
    )
}

export default ProductsGrid