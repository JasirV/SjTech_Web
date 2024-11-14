import React from 'react'
import ExperienceContent from './experienceContent'
import SlideLeft from '../../../utils/animations/slideLeft'
import SlideRight from '../../../utils/animations/slideRight'

const ExperienceThree = () => {
    return (
        <section className="experience section-padding">
            <div className="soft-star scale-animation d-none d-lg-block">
                <img src="/images/shape/soft-star.png" alt="star" />
            </div>
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-6">
                        <div className="left-item">
                            <div className="row g-4">
                                <SlideLeft className="col-6">
                                    <div className="image">
                                        <img src="/images/experience/c1.jpg" alt="image" />
                                    </div>
                                </SlideLeft>
                                <div className="col-6">
                                    <div className='overflow-hidden'>
                                        <SlideRight className="image mb-4 ">
                                            <img src="/images/experience/c2.jpg" alt="image" />
                                        </SlideRight>
                                    </div>
                                    <div className='overflow-hidden'>
                                        <SlideRight className="image">
                                            <img src="/images/experience/c3.jpg" alt="image" />
                                        </SlideRight>
                                    </div>
                                </div>
                            </div>
                            <div className="gear">
                                <img className="star-rotare" src="/images/shape/gear.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <ExperienceContent />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExperienceThree