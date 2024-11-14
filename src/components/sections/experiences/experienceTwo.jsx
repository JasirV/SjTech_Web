import React, { useState } from 'react'
import { FaPlay } from 'react-icons/fa6'
import SlideDown from '../../../utils/animations/slideDown'
import SlideUp from '../../../utils/animations/slideUp'
import ModalVideo from 'react-modal-video'

const ExperienceTwo = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className="experience-two pt-65">
            <div className="row g-4">
                <SlideDown className="col-lg-9">
                    <div className="image">
                        <img src={'/images/experience/01.jpg'} alt="image" />
                        <div className="info">
                            <div className="info_con">
                                <ul>
                                    <li>
                                        <img src={'/images/experience/info1.png'} alt="image" />
                                    </li>
                                    <li>
                                        <h4><a href="#0">Robert Joe Kerry</a></h4>
                                        <span>Founder</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="signature">
                                <img src={'/images/experience/signature.png'} alt="icon" />
                            </div>
                        </div>
                    </div>
                </SlideDown>
                <SlideUp className="col-lg-3">
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
                        <img src={'/images/experience/02.jpg'} alt="image" />
                        <div className="video-btn-wrp">
                            <div className="video video-pulse">
                                <div className="video-popup secondary-bg" onClick={() => setOpen(true)}><i className="fa-solid fa-play"><FaPlay /></i></div>
                            </div>
                        </div>
                    </div>
                </SlideUp>
            </div>
            <ModalVideo
                channel="youtube"
                youtube={{ mute: 0, autoplay: 0 }}
                isOpen={isOpen}
                videoId="TfU0qjuZkJ4"
                onClose={() => setOpen(false)}
            />
        </div>
    )
}

export default ExperienceTwo