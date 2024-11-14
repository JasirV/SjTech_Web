import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const HeroOne = () => {
    return (
        <section className="banner">
            <div className="shape1 d-none d-md-block float-bob-y">
                <img src={'/images/shape/shapel2.png'} alt="shape" />
            </div>
            <div className="container">
                <div className="content-wrp pt-65 pb-30">
                    <Swiper
                        slidesPerView={1}
                        loop={true}
                        speed={2000}
                        effect="fade"
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            el: ".banner-pegi",
                            type: "fraction",
                        }}
                        modules={[Pagination, EffectFade, Autoplay]}
                    >
                        <SwiperSlide>
                            {({ isActive }) => <Card isActive={isActive} title1={"PROVIDING POWER"} title2={"SO YOU CAN GO HIGHER"} description={"Founded in 2024, SJ Tech Trading Contracting W.L.L. is a dynamic company based in Qatar, specializing in delivering innovative products and services to the civil construction industry. Our primary focus is on the Stainless Steel, Mild Steel, Aluminium, Mashrabiya, Glass work and civil sectors.."} />}
                        </SwiperSlide>
                        <SwiperSlide>
                            {({ isActive }) => <Card isActive={isActive} title1={"PROVIDING POWER"} title2={"SO YOU CAN GO HIGHER"} description={"Founded in 2024, SJ Tech Trading Contracting W.L.L. is a dynamic company based in Qatar, specializing in delivering innovative products and services to the civil construction industry. Our primary focus is on the Stainless Steel, Mild Steel, Aluminium, Mashrabiya, Glass work and civil sectors.."} />}
                        </SwiperSlide>
                        <SwiperSlide>
                            {({ isActive }) => <Card isActive={isActive} title1={"PROVIDING POWER"} title2={"SO YOU CAN GO HIGHER"} description={"Founded in 2024, SJ Tech Trading Contracting W.L.L. is a dynamic company based in Qatar, specializing in delivering innovative products and services to the civil construction industry. Our primary focus is on the Stainless Steel, Mild Steel, Aluminium, Mashrabiya, Glass work and civil sectors.."} />}
                        </SwiperSlide>

                    </Swiper>
                </div>
                <div className="image">
                    <Swiper
                        slidesPerView={1}
                        loop={true}
                        effect='fade'
                        speed={2000}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            el: ".banner-dot",
                            clickable: true,
                        }}
                        modules={[Pagination, EffectFade, Autoplay]}
                    >
                        <SwiperSlide> <img src={'/images/banner/01.jpg'} alt="image" /></SwiperSlide>
                        <SwiperSlide> <img src={'/images/banner/02.jpg'} alt="image" /></SwiperSlide>
                        <SwiperSlide> <img src={'/images/banner/03.jpg'} alt="image" /></SwiperSlide>
                    </Swiper>

                    <div className="slider-info">
                        <div className="dot banner-dot"></div>
                        <div className="banner-pegi"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroOne


const Card = ({ title1, title2, description, isActive }) => {
    return (
        <motion.div className="row align-items-center"
            initial={{  opacity: 0 }}
            animate={{ opacity: isActive ? 1 : 0 }}
        >
            <div className="col-lg-8">
                <motion.h2
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: isActive ? 0 : 50, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                >{title1}</motion.h2>
                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: isActive ? 0 : 50, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                >{title2}</motion.h1>
            </div>
            <div className="col-lg-4">
                <div className="content">
                    <motion.p
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: isActive ? 0 : 50, opacity: isActive ? 1 : 0 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                    >{description}</motion.p>
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: isActive ? 0 : 50, opacity: isActive ? 1 : 0 }}
                        transition={{ duration: 0.3, delay: 0.5 }}
                    ></motion.div>


                </div>
            </div>
        </motion.div>
    )
}