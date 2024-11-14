import React from 'react'
import { FaQuoteRight } from 'react-icons/fa6'
import TestimonailSlide from './testimonailSlide'
import BounceRight from '../../../utils/animations/bounceRight'
import BounceIn from '../../../utils/animations/bounceIn'

const TestimonialThree = () => {
    return (
        <section className="testimonial testimonial-three sub-bg section-padding">
            <BounceRight className="man d-none d-lg-block">
                <img src="/images/testimonial/01.png" alt="image" />
            </BounceRight>
            <div className="gaps-primary d-none d-sm-block float-bob-x">
                <img src="/images/shape/gaps-primary-fade.png" alt="gaps-primary-fade" />
            </div>
            <div className="gaps-primary2 d-none d-sm-block float-bob-x">
                <img src="/images/shape/gaps-primary-fade.png" alt="gaps-primary-fade" />
            </div>
            <div className="container">
                <div className="row g-4 align-items-center justify-content-between">
                    <TestimonailSlide />
                    <div className="col-lg-5">
                        <div className="testimonial-three-image d-none d-lg-block">
                            <img src="/images/testimonial/shape.png" alt="shape" />
                            <div className="img1 scale-animation">
                                <img src="/images/testimonial/02.png" alt="image" />
                            </div>
                            <div className="img2 scale-animation">
                                <img src="/images/testimonial/03.png" alt="image" />
                            </div>
                            <i><FaQuoteRight /></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestimonialThree