import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import { productAllData } from '../../utils/fackData/productallData';
import SlideUp from '../../utils/animations/slideUp';

const ProductList = () => {
    return (
        <section className="product-list section-padding">
            <div className="container">
                <div className="row g-4">
                    {productAllData.map(({ id, product_name, src }) => (
                        <ProductCard key={id} id={id} src={src} product_name={product_name} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductList;

const ProductCard = ({ id, src, product_name }) => {
    return (
        <SlideUp delay={id} className="col-xl-4 col-lg-6">
            <div className="product-item">
                <h3>
                    <Link to={`/product/product-details/${id}`}>{product_name}</Link>
                </h3>
                <Link to={`/product/product-details/${id}`} className="product-image d-block">
                    <img src={src} alt={product_name} />
                    <div className="gaps-right d-none d-sm-block float-bob-x">
                        {/* Add content or styling for gaps-right if needed */}
                    </div>
                    <div className="gaps-left d-none d-sm-block float-bob-x">
                        {/* Add content or styling for gaps-left if needed */}
                    </div>
                </Link>
                <Link className="btn-three" to={`/product/product-details/${id}`}>
                    Product Details <i><FaArrowRight /></i>
                </Link>
            </div>
        </SlideUp>
    );
};
