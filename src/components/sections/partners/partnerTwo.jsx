import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const PartnerTwo = ({className}) => {
    return (
        <div className={`brand section-padding text-center ${className}`}>
            <div className="container">
                <Swiper
                    loop={true}
                    spaceBetween={30}
                    speed={300}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        992: {
                            slidesPerView: 5,
                        },
                        425: {
                            slidesPerView: 3,
                        },
                    }}
                    modules={[Autoplay]}
                >
                    <SwiperSlide> <img src={'/images/icon/brand01.png'} alt="icon" /></SwiperSlide>
                    <SwiperSlide> <img src={'/images/icon/brand02.png'} alt="icon" /></SwiperSlide>
                    <SwiperSlide> <img src={'/images/icon/brand03.png'} alt="icon" /></SwiperSlide>
                    <SwiperSlide> <img src={'/images/icon/brand04.png'} alt="icon" /></SwiperSlide>
                    <SwiperSlide> <img src={'/images/icon/brand05.png'} alt="icon" /></SwiperSlide>
                    <SwiperSlide> <img src={'/images/icon/brand02.png'} alt="icon" /></SwiperSlide>
                    <SwiperSlide> <img src={'/images/icon/brand03.png'} alt="icon" /></SwiperSlide>
                </Swiper>
            </div>
        </div >
    )
}

export default PartnerTwo