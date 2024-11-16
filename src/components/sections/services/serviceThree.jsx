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
                        productAllData.map(({id, service_name, src}) => <Card key={id} id={id} src={src} service_name={service_name}/>)
                    }
                </div>
            </div>
        </section>
    )
}

export default ServiceThree

const Card = ({ id, src, service_name }) => {
    return (
        <SlideUp delay={id} className="col-xl-4 col-lg-6" >
            <div className="item">
                <h3><Link to="/service-single">{service_name}</Link></h3>
                <Link to="/service-single" className="image d-block">
                    <img src={src} alt="image" />
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