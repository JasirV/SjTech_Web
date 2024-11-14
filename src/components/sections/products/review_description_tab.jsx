import React from 'react'
import ProductDesciption from './productDesciption'
import ProductReview from './productReview'
import { productReviewData } from '../../../utils/fackData/productReviewData'

const Review_description_tab = () => {
    return (
        <div className="shop-singe-tab">
            <ul className="nav nav-pills mb-4 bor-top bor-bottom py-2">
                <li className="nav-item">
                    <a href="#description" data-bs-toggle="tab" className="nav-link ps-0 active">
                        <h4 className="text-uppercase">description</h4>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#review" data-bs-toggle="tab" className="nav-link">
                        <h4 className="text-uppercase">reviews ({productReviewData.length})</h4>
                    </a>
                </li>
            </ul>
            <div className="tab-content">
                <ProductDesciption />
                <ProductReview />
            </div>
        </div>
    )
}

export default Review_description_tab