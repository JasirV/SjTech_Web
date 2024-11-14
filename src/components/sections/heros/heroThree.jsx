import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { motion } from "framer-motion"
import { FaArrowRight } from 'react-icons/fa6'
import ConsultationForm from './consultationForm';
import BounceRight from '../../../utils/animations/bounceRight';

const HeroThree = () => {
    return (
        <section className="banner-three">
            <div className="slider-info">
                <div className="dot banner-dot d-none d-sm-block theme"></div>
            </div>
            <div className="soft-start scale-animation">
                <img src={'/images/shape/soft-star.png'} alt="star" />
            </div>
            <div className="soft-start-light scale-animation">
                <img src={'/images/shape/soft-star-light.png'} alt="star-light" />
            </div>
            <div className="gaps-theme d-none d-sm-block float-bob-x">
                <img src={'/images/shape/gaps-primary.png'} alt="" />
            </div>
            <div className="gaps-light d-none d-sm-block float-bob-x">
                <img src={'/images/shape/gaps-light.png'} alt="" />
            </div>
            <Swiper
                loop={true}
                slidesPerView={1}
                effect="fade"
                speed={3000}
                autoplay={{
                    delay: 7000,
                    disableOnInteraction: false,
                }}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                pagination={{
                    el: ".banner-dot",
                    clickable: true,
                }}
                modules={[Pagination, EffectFade, Autoplay]}
            >

                <SwiperSlide>
                    {({ isActive }) => <Card isActive={isActive} src={'/images/banner/c1.jpg'} title={"We Provide All Industri Solutions"} description={"Formed as a result of industrial enterprises in any field of activity (metallurgy, oil production, oil refining, food industry)"} />}
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive }) => <Card isActive={isActive} src={'/images/banner/c2.jpg'} title={"We Provide All Industri Solutions"} description={"Formed as a result of industrial enterprises in any field of activity (metallurgy, oil production, oil refining, food industry)"} />}
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive }) => <Card isActive={isActive} src={'/images/banner/c3.jpg'} title={"We Provide All Industri Solutions"} description={"Formed as a result of industrial enterprises in any field of activity (metallurgy, oil production, oil refining, food industry)"} />}
                </SwiperSlide>

            </Swiper>
            <div className='overflow-x-clip'>
                <BounceRight className='banner-form d-none d-lg-block '>
                    <ConsultationForm bg_color={"bg-white"} />
                </BounceRight>
            </div>
        </section>

    )
}

export default HeroThree

const Card = ({ src, title, description, isActive }) => {
    return (
        <>
            <div className="slide-bg" style={{ backgroundImage: `url(${src})` }}></div>
            <motion.div
                className="container"
                initial={{ opacity: 0 }}
                animate={{ opacity: isActive ? 1 : 0 }}
            >
                <div className="content">
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: isActive ? 0 : 50, opacity: isActive ? 1 : 0 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                        style={{ maxWidth: "700px" }}
                    >
                        {title}
                        <img src={'/images/banner/line.png'} alt="" />
                    </motion.h1>
                    <motion.p
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: isActive ? 0 : 50, opacity: isActive ? 1 : 0 }}
                        transition={{ duration: 0.3, delay: 0.5 }}
                        style={{ maxWidth: "600px" }}
                    >
                        {description}
                    </motion.p>
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: isActive ? 0 : 50, opacity: isActive ? 1 : 0 }}
                        transition={{ duration: 0.3, delay: 0.7 }}
                    >
                        <Link to="#0" className="btn-one mt-65"> <span>Our Solutions</span> <i><FaArrowRight /></i></Link>
                    </motion.div>
                </div>
            </motion.div>
        </>
    )
}