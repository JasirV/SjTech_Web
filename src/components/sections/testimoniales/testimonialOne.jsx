import React from 'react'
import { FaQuoteRight } from 'react-icons/fa6';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import { TfiAngleLeft, TfiAngleRight } from 'react-icons/tfi'

import { testimonialData } from '../../../utils/fackData/testimonialData'
import SectionTitle from '../services/sectionTitle';
import SlideDown from '../../../utils/animations/slideDown';

const TestimonialOne = () => {
    const setting = {
        spaceBetween: 30,
        loop: "true",
        simulateTouch: false,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".testimonial-arry-next",
            prevEl: ".testimonial-arry-prev",
        },
    }
    return (
        <section className="testimonial section-padding">
            <div className="container">
                <SlideDown className="testimonial-wrp bor">
                    <div className="row justify-content-between">
                        <div className="col-lg-7 mb-5 mb-lg-0">
                            <SectionTitle className="mb-5">
                                <SectionTitle.Name>PUBLIC TESTIMONIAL</SectionTitle.Name>
                                <SectionTitle.Title>public feedback about mistri</SectionTitle.Title>
                            </SectionTitle>
                            <div className="row">
                                <div className="col-lg-10">
                                    <Swiper
                                        {...setting}
                                        modules={[Navigation, Autoplay]}
                                        className="arry-wrp"
                                    >
                                        {
                                            testimonialData.map(({ id, name, position, review, title }) => {
                                                return (
                                                    <SwiperSlide key={id}>
                                                        <div className="item">
                                                            <h3>{title}</h3>
                                                            <p>{review}</p>
                                                            <div className="author">
                                                                <h4>{name}</h4>
                                                                <span>{position}</span>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                )
                                            })
                                        }
                                        <div className="arry-btn">
                                            <button className="arry-prev testimonial-arry-prev"><i><TfiAngleLeft /></i></button>
                                            <button className="ms-3 active arry-next testimonial-arry-next"><i><TfiAngleRight /></i></button>
                                        </div>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="image">
                                <Swiper
                                    {...setting}
                                    modules={[Navigation, Autoplay]}
                                >
                                    {
                                        testimonialData.map(({ id, src }) => {
                                            return (
                                                <SwiperSlide key={id}>
                                                    <img src={src} alt="image" />
                                                </SwiperSlide>
                                            )
                                        })
                                    }
                                </Swiper>
                                <span></span>
                                <i className="fa-solid fa-quote-right"><FaQuoteRight /></i>
                            </div>
                        </div>
                    </div>
                </SlideDown>
            </div>
        </section>
    )
}

export default TestimonialOne