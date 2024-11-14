import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css';
import SectionTitle from '../services/sectionTitle'
import { teamData } from '../../../utils/fackData/teamData'
import { TfiAngleLeft, TfiAngleRight } from 'react-icons/tfi'
import TeamCardOne from './teamCardOne';

const TeamOne = () => {
    return (
        <section className="team-two team-slide-area secondary-bg section-padding">
            <div className="map">
                <img src="/images/team/map.png" alt="map" />
            </div>
            <div className="container">
                <SectionTitle className={"text-center position-relative"}>
                    <SectionTitle.Name>OUR PROFESSIONALS</SectionTitle.Name>
                    <SectionTitle.Title className={"text-white"}>Our Dedicated Team</SectionTitle.Title>
                </SectionTitle>
                <div className="wrp">
                    <Swiper
                        loop={true}
                        spaceBetween={30}
                        speed={500}
                        centeredSlides={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            nextEl: ".product-arry-next",
                            prevEl: ".product-arry-prev",
                        }}
                        breakpoints={{
                            992: {
                                slidesPerView: 3,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                        }}
                        modules={[Navigation]}
                    >
                        {
                            teamData.map(({ id, name, position, src }) => <SwiperSlide key={id}><TeamCardOne name={name} position={position} src={src} /></SwiperSlide>)
                        }
                    </Swiper>
                    <button className="arry-prev d-none d-lg-block product-arry-prev"><i ><TfiAngleLeft /></i></button>
                    <button className="arry-next d-none d-lg-block product-arry-next"><i ><TfiAngleRight /></i></button>
                </div>
            </div>
        </section >
    )
}

export default TeamOne
