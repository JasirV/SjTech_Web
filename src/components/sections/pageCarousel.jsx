import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';


const CarouselPage = ({slides}) => {
    const swiperRef = useRef(null);

    // Autoplay logic using useRef
    useEffect(() => {
        const interval = setInterval(() => {
            if (swiperRef.current && swiperRef.current.swiper) {
                swiperRef.current.swiper.slideNext(); // Move to the next slide
            }
        }, 5000); // 5 seconds delay

        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);


    return (
        <div className='casouselpagagound'>
                <Swiper
                    ref={swiperRef}
                    slidesPerView={1}
                    loop={true}
                    speed={2000}
                    effect="fade"
                    pagination={{
                        el: ".carousel-pagination",
                        clickable: true,
                    }}
                    modules={[Pagination, EffectFade]}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            {({ isActive }) => (
                                <SlideContent
                                    isActive={isActive}
                                    image={slide.image}
                                    heading={slide.heading}
                                />
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Pagination */}
                {/* <div className="carousel-pagination"></div> */}
                </div>
    );
};

export default CarouselPage;

const SlideContent = ({ image, heading, isActive }) => {
    return (
        <div className={`slide-content ${isActive ? 'active' : ''}`}>
            <img src={image} alt={heading} className="slide-image" />
            <h1 className="slide-heading">{heading}</h1>
        </div>
    );
};
