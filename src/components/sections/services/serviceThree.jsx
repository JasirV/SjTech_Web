import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'
// import { serviceThreeData } from '../../../utils/fackData/serviceThreeData'
import { productAllData } from '../../../utils/fackData/productallData'
import SlideUp from '../../../utils/animations/slideUp'
const ServiceThree = () => {
    
    return (
        <section className="page-service section-padding">
            <div className="container">
                <div className="row g-4">
                    {
                        productAllData.map(({id, Title, ProductImage}) => <Card key={id} id={id} ProductImage={ProductImage} Title={Title}/>)
                    }
                </div>
            </div>
        </section>
    )
}

export default ServiceThree

const Card = ({ id, ProductImage, Title }) => {
    return (
        <SlideUp delay={id} className="col-xl-4 col-lg-6" >
            <div className="item">
                <h3><Link to={`/service/service-details/${id}`}>{Title}</Link></h3>
                <Link to={`/service/service-details/${id}`} className="image d-block">
                    <img src={ProductImage} alt={Title}/>
                    <div className="gaps-right d-none d-sm-block float-bob-x">
                        <img src="/images/shape/gaps-primary.png" alt="gaps-primary" />
                    </div>
                    <div className="gaps-left d-none d-sm-block float-bob-x">
                        <img src="/images/shape/gaps-primary.png" alt="gaps-primary" />
                    </div>
                </Link>
                <Link className="btn-three" to="/service-single">Service Details <i><FaArrowRight /></i></Link>
            </div>
        </SlideUp>
    )
}