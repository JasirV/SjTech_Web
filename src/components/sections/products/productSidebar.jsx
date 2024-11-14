import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ProductSidebar = () => {
    return (
        <div className="col-lg-4">
            <div className="blog-slingle">
                <div className="right-item sub-bg">
                    <h4 className="mb-30">Search</h4>
                    <div className="search mb-40">
                        <input type="text" placeholder="Search here. . ." />
                        <button><i><FaSearch /></i></button>
                    </div>
                    <h4 className="mb-30">Categories</h4>
                    <ul className="right_list mb-40">
                        <li><a className="d-block pb-1 mb-2" href="#0">Business</a></li>
                        <li><a className="d-block pb-1 mb-2" href="#0">Job Market</a></li>
                        <li><a className="d-block pb-1 mb-2" href="#0">Marketing</a></li>
                        <li><a className="d-block pb-1 mb-2" href="#0">News</a></li>
                        <li><a className="d-block pb-1 mb-2" href="#0">Social Media</a></li>
                        <li><a className="d-block pb-1 mb-2" href="#0">Trends</a></li>
                        <li><a className="d-block" href="#0">Writing</a></li>
                    </ul>
                    <h4 className="mb-30">Popular Products</h4>
                    <RecentPostCard price={"299"} title={"Inverter Power Generator"} src={"/images/product/01.png"} />
                    <RecentPostCard price={"189"} title={"Compact Drill Cordless"} src={"/images/product/02.png"} />
                    <RecentPostCard price={"150"} title={"Compound Saw Makita"} src={"/images/product/03.png"} />
                    <h4 className="mb-30 mt-40">Hot Item</h4>
                    <div className="image">
                        <img src="/images/product/03.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductSidebar

const RecentPostCard = ({ src, title, price }) => {
    return (
        <div className="recent-post p-0 bor-bottom pb-4 mb-4 sub-bg">
            <div className="img"><img src={src} alt="image" /></div>
            <div className="con">
                <h5><Link to="/shop-single">{title}</Link></h5>
                <span>${price}</span>
            </div>
        </div>
    )
}