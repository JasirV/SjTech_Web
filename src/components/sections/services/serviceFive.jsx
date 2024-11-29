import React from 'react'
import { FaGear, FaPlay } from 'react-icons/fa6'
// import SectionTitle from '../../ui/sectionTitle'
import SlideLeft from '../../../utils/animations/slideLeft'
import SlideRight from '../../../utils/animations/slideRight'

const ServiceFive = () => {
    return (
        <section className="page-about page-service-single sub-bg section-padding">
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-7">
                        <div className="right-item">
                            {/* <SectionTitle className={"mb-5"}>
                                <SectionTitle.Name>SERVICE BENEFITS</SectionTitle.Name>
                                <SectionTitle.Title>Benefit of Service</SectionTitle.Title>
                                <SectionTitle.Description>Praesent eget mollis nulla, non lacinia urna. Donec sit amet neque auctor, ornare dui rutrum, condimentum justo. Duis dictum, ex accumsan eleifend eleifend, ex justo aliquam nunc, in ultrices ante quam eget massa. Sed scelerisque, odio eu tempor pulvinar, magna tortor finibus lorem, ut mattis tellus.</SectionTitle.Description>
                            </SectionTitle> */}

                            <div className="row g-4">
                                <SlideLeft className="col-sm-6">
                                    <ul>
                                        <li><span className="mb-4 me-2 primary-color"><FaGear /></span> Make strond your roof</li>
                                        <li><span className="mb-4 me-2 primary-color"><FaGear /></span> Door and Windows will good</li>
                                        <li><span className="mb-4 me-2 primary-color"><FaGear /></span> Make strond your roof</li>
                                        <li><span className="mb-4 me-2 primary-color"><FaGear /></span> Door and Windows will good</li>
                                    </ul>
                                </SlideLeft>
                                <SlideRight className="col-sm-6">
                                    <ul>
                                        <li><span className="mb-4 me-2 primary-color"><FaGear /></span> Door and Windows will good</li>
                                        <li><span className="mb-4 me-2 primary-color"><FaGear /></span> Make strond your roof</li>
                                        <li><span className="mb-4 me-2 primary-color"><FaGear /></span> Door and Windows will good</li>
                                        <li><span className="mb-4 me-2 primary-color"><FaGear /></span> Make strond your roof</li>
                                    </ul>
                                </SlideRight>
           
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="image">
                            <img src="/images/about/01.jpg" alt="image" />
                            <div className="video-btn-wrp d-none d-sm-block">
                                <div className="video video-pulse">
                                    <a className="video-popup secondary-bg" href="https://www.youtube.com/watch?v=13qOE2N_AKs"><i className="fa-solid fa-play"><FaPlay /></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceFive
