import React, { useState } from 'react'
import { FaPlay } from 'react-icons/fa6'
import SectionTitle from '../services/sectionTitle'
import ModalVideo from 'react-modal-video'
import SlideUp from '../../../utils/animations/slideUp'
import SlideDown from '../../../utils/animations/slideDown'

const AboutThree = ({ className }) => {
    const [isOpen, setOpen] = useState(false);
    return (
        <section className={`experience-two section-margin mb-0 experience-three section-padding ${className}`}>
            <div className="soft-star scale-animation d-none d-lg-block">
                <img src="/images/shape/soft-star.png" alt="" />
            </div>
            <div className="star star-rotare d-none d-lg-block">
                <img src="/images/shape/start2.png" alt="" />
            </div>
            <div className="container">
                <div className="about-three pb-65">
                    <div className="row g-5 align-items-center">
                        <div className="col-xl-6">
                            <SectionTitle className={"m-0"}>
                                <SectionTitle.Name>ABOUT TO MISTRI</SectionTitle.Name>
                                <SectionTitle.Title>We Are Here to Increase Your Knowledge With Experience</SectionTitle.Title>
                            </SectionTitle>
                        </div>
                        <div className="col-xl-6">
                            <div className="content">
                                <SectionTitle.Description>We have facility to produce advance work various industrial applications based on specially developed technol-ogy. We are also ready to developement by according to users changing.</SectionTitle.Description>
                                <SlideUp>
                                    <ul>
                                        <li><span></span> Greate Technology</li>
                                        <li><span></span> Delivery Ontime</li>
                                        <li><span></span> Certified Engineers</li>
                                    </ul>
                                </SlideUp>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-4">
                    <SlideDown className="col-lg-9">
                        <div className="image">
                            <img src="/images/experience/03.jpg" alt="image" />
                            <div className="stroke-text">
                                <h2>Since 1980</h2>
                            </div>
                            <div className="left-gap d-none d-sm-block float-bob-x"><img src="/images/shape/left-gap.png" alt="" /></div>
                            <div className="right-gap d-none d-sm-block float-bob-x"><img src="/images/shape/right-gap.png" alt="" />
                            </div>
                        </div>
                    </SlideDown>
                    <SlideDown className="col-lg-3">
                        <div className="item">
                            <div className="content bor-bottom pb-30">
                                <h2><span className="count">25</span>+</h2>
                                <span>Years Experience</span>
                            </div>
                            <div className="content pt-30">
                                <h2><span className="count">69</span>+</h2>
                                <span>Industries Served</span>
                            </div>
                        </div>
                        <div className="experience_video overlay50">
                            <img src="/images/experience/04.jpg" alt="image" />
                            <div className="video-btn-wrp">
                                <div className="video video-pulse">
                                    <div className="video-popup secondary-bg" onClick={() => setOpen(true)}><i className="fa-solid fa-play"><FaPlay /></i></div>
                                </div>
                            </div>
                        </div>
                    </SlideDown>
                </div>
            </div>
            <ModalVideo
                channel="youtube"
                youtube={{ mute: 0, autoplay: 0 }}
                isOpen={isOpen}
                videoId="TfU0qjuZkJ4"
                onClose={() => setOpen(false)}
            />
        </section>
    )
}

export default AboutThree