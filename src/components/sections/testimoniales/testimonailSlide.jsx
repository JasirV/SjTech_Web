import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import SectionTitle from '../services/sectionTitle'
import { testimonialData } from '../../../utils/fackData/testimonialData'

const TestimonailSlide = () => {
    return (
        <div className="col-lg-7">
            <SectionTitle className="mb-5">
                <SectionTitle.Name>PUBLIC TESTIMONIAL</SectionTitle.Name>
                <SectionTitle.Title>public feedback about mistri</SectionTitle.Title>
            </SectionTitle>

            <div className="row">
                <div className="col-lg-10">
                    <Swiper
                        spaceBetween={30}
                        loop={true}
                        grabCursor={true}
                        pagination={{
                            el: ".testimonial-dot",
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        modules={[Pagination]}
                        className="arry-wrp">
                        {
                            testimonialData.map(({ id, name, position, review, src, title }) => {
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
                            <div className="slider-info">
                                <div className="dot theme testimonial-dot"></div>
                            </div>
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default TestimonailSlide