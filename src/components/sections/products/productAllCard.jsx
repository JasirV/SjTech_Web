import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'
import SlideUp from '../../../utils/animations/slideUp'
import SkeletonServiceTradingProducts from '../../ui/skeletons/serviceTradingProducts'
import { useProduct } from '../../../hooks/useapiHoooks'

const ProductAllCard = () => {
    const {data:productAllData,isLoading}=useProduct()
    console.log(isLoading,'file')
    if(isLoading){
        return(<SkeletonServiceTradingProducts/>)
    }
    return (
        <section className="page-service section-padding">
            <div className="container">
                <div className="row g-4">
                    {
                        productAllData?.map(({_id, service_name, Image}) => <Card key={_id} id={_id} src={Image} service_name={service_name}/>)
                    }
                </div>
            </div>
        </section>
    )
}

export default ProductAllCard

const Card = ({ id, src, service_name }) => {
    return (
        <SlideUp delay={id} className="col-xl-4 col-lg-6" >
            <div className="item">
                <h3><Link to={`/service/service-details/${id}`}>{service_name}</Link></h3>
                <Link to={`/service/service-details/${id}`} className="image d-block">
                    <img src={src} alt="image" />
                    <div className="gaps-right d-none d-sm-block float-bob-x">
                        <img src="/images/shape/gaps-primary.png" alt="gaps-primary" />
                    </div>
                    <div className="gaps-left d-none d-sm-block float-bob-x">
                        <img src="/images/shape/gaps-primary.png" alt="gaps-primary" />
                    </div>
                </Link>
                <Link className="btn-three" to={`/service/service-details/${id}`}>Service Details <i><FaArrowRight /></i></Link>
            </div>
        </SlideUp>
    )
}