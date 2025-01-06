import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import SlideUp from '../../../utils/animations/slideUp';
import { useCategoryProduct } from '../../../hooks/useapiHoooks';

const ServiceContractingProduct = () => {
    // Filter products by "Contacting" category
    const {data:Products}=useCategoryProduct('Contacting')
    
    return (
        <section className="page-service section-padding">
            <div className="container">
                <div className="row g-4">
                    {Products?.length > 0 ? (
                        Products?.map(({ _id, service_name, Image }) => (
                            <Card key={_id} id={_id} ProductImage={Image} Title={service_name} />
                        ))
                    ) : (
                        <p className="text-center">No products found in this category.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

const Card = ({ id, ProductImage, Title }) => {
    return (
        <SlideUp delay={id} className="col-xl-4 col-lg-6">
            <div className="item text-center">
                <Link to={`/service/service-details/${id}`} className="image d-block">
                    <img src={ProductImage} alt={Title} className="img-fluid" />
                </Link>
                <h3 className="mt-3">
                    <Link to={`/service/service-details/${id}`}>{Title}</Link>
                </h3>
                <Link className="btn-three mt-2 d-inline-block" to={`/service/service-details/${id}`}>
                    Service Details <i><FaArrowRight /></i>
                </Link>
            </div>
        </SlideUp>
    );
};

export default ServiceContractingProduct;
