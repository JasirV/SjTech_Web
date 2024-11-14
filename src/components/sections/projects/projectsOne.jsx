import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { TfiAngleLeft, TfiAngleRight } from 'react-icons/tfi';
import SectionTitle from '../services/sectionTitle';

const ProjectsOne = ({ data }) => {
    const setting = {
        spaceBetween: 30,
        speed: 500,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".pegi-number",
            type: "fraction",
        },
        navigation: {
            nextEl: ".project-arry-next",
            prevEl: ".project-arry-prev",
        },
    }
    console.log(data,'thisdata');
    
    return (
        <section className="project section-padding">
            <div className="project-wrp">
                <div className="shape1 d-none d-md-block float-bob-y">
                    <img src={'/images/shape/shaper1.png'} alt="shape1" />
                </div>
                {/* Main Swiper for desktop */}
                <Swiper
                    {...setting}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="have-bg d-none d-lg-block"
                >
                    {
                        data.map((value) => (
                            <SwiperSlide key={value.id}>
                                    <div className="project-image bg-image" style={{ backgroundImage: `url(${value.imageSrc})` }}></div>
                                </SwiperSlide>
                        ))
                    }
                </Swiper>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 bor-right py-lg-5">
                            <SectionTitle>
                                <SectionTitle.Name>OUR VALUES</SectionTitle.Name>
                                <SectionTitle.Title>Guiding Principles That Define SJ Tech</SectionTitle.Title>
                                <SectionTitle.Description>We are driven by values that guide us in redefining excellence in the construction industry.</SectionTitle.Description>
                            </SectionTitle>

                            {/* Navigation buttons for mobile */}
                            <div className="arry-btn mb-4 d-block d-lg-none">
                                <button className="arry-prev project-arry-prev"><i><TfiAngleLeft /></i></button>
                                <button className="ms-3 active arry-next project-arry-next"><i><TfiAngleRight /></i></button>
                            </div>

                            <div className="row g-3">
                                <div className="col-sm-4">
                                    <div className="wrp">
                                        <div className="pegi-number pt-4">
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-8">
                                    {/* Inner Swiper for values description */}
                                    <Swiper
                                        {...setting}
                                        modules={[Pagination, Navigation, Autoplay]}
                                    >
                                        {
                                            data.map(({ id, value_name, value_description }) => (
                                                <SwiperSlide key={id}>
                                                    <div className="item">
                                                        <h3>{value_name}</h3>
                                                        <p>{value_description}</p>
                                                    </div>
                                                </SwiperSlide>
                                            ))
                                        }
                                    </Swiper>
                                </div>
                            </div>

                            {/* Navigation buttons for desktop */}
                            <div className="arry-btn mt-65 d-none d-lg-block">
                                <button className="arry-prev project-arry-prev"><i><TfiAngleLeft /></i></button>
                                <button className="ms-3 active arry-next project-arry-next"><i><TfiAngleRight /></i></button>
                            </div>
                        </div>

                        {/* Mobile Swiper for images */}
                        <div className="col-lg-6">
                            <Swiper
                                {...setting}
                                modules={[Pagination, Navigation, Autoplay]}
                                className="mt-5 d-block d-lg-none"
                            >
                                {
                                    data.map(({ id, imageSrc }) => (
                                        <SwiperSlide key={id}>
                                            <div className="image">
                                                <img src={imageSrc} alt={`${id}-img`} />
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectsOne;
