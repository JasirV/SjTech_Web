import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import { FaLocationArrow } from 'react-icons/fa6'
import { serviveDataTrading } from '../../../utils/fackData/serviceDataTrading'

const ServicesTrading = () => {
    return (
        <Swiper
            loop={true}
            spaceBetween={30}
            speed={1000}
            centeredSlides={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            breakpoints={{
                1440: {
                    slidesPerView: 5,
                },
                1200: {
                    slidesPerView: 4,
                },
                992: {
                    slidesPerView: 3,
                },
                575: {
                    slidesPerView: 2,
                },
            }}
            modules={[Autoplay]}
        >
            {
                serviveDataTrading.map(({ id, src, service_name }) => <SwiperSlide key={id}><Card service_name={service_name} src={src} /></SwiperSlide>)
            }
        </Swiper>
    )
}

export default ServicesTrading

const Card = ({ src, service_name }) => {
    return (
        <div className="item srvicesTrading" >
            <Link to="#0" className="location_icon"><i><FaLocationArrow /></i></Link>
            <Link to="/service-single" className="image d-block">
                <img src={src} alt="image" />
            </Link>
            <div className="content">
                <h3><Link to="/service-single">{service_name}</Link></h3>
            </div>
        </div>
    )
}