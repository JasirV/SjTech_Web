import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import { productAllData } from '../../../utils/fackData/productallData';
import SlideUp from '../../../utils/animations/slideUp';

const ServiceTradingProducts = () => {
    // Filter products with the "trading" category
    const tradingProducts = productAllData.filter((item) => item.Category === "trading");
    console.log(tradingProducts); // Debugging the filtered data

    return (
        <section className="page-service section-padding page-tradingProdict">
            <div style={{display:"flex",justifyContent:"center",marginTop:"-50px",marginBottom:"20px"}}>
            <h2>Our Product</h2>
            </div>
            <div className="container">
                <div className="row g-4">
                    {tradingProducts.map(({ id, modernTitle, src }) => (
                        <Card 
                            key={id} 
                            id={id} 
                            ProductImage={src} 
                            Title={modernTitle} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceTradingProducts;

// Card Component
const Card = ({ id, ProductImage, Title }) => {
    return (
        <SlideUp delay={id} className="col-xl-4 col-lg-6">
            <div className="item">
                <h3>
                    <Link to={`/service-single/${id}`}>{Title}</Link>
                </h3>
                <Link to={`/service-single/${id}`} className="image d-block">
                    <img src={ProductImage} alt={Title || "Product"} />
                    <div className="gaps-right d-none d-sm-block float-bob-x">
                        <img 
                            src="/images/shape/gaps-primary.png" 
                            alt="Decorative gap right" 
                        />
                    </div>
                    <div className="gaps-left d-none d-sm-block float-bob-x">
                        <img 
                            src="/images/shape/gaps-primary.png" 
                            alt="Decorative gap left" 
                        />
                    </div>
                </Link>
                <Link className="btn-three" to={`/service-single/${id}`}>
                    Service Details <i><FaArrowRight /></i>
                </Link>
            </div>
        </SlideUp>
    );
};
