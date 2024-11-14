import React from 'react'

import TestimonailSlide from './testimonailSlide';
import {  FaQuoteRight } from 'react-icons/fa6';
import BounceRight from '../../../utils/animations/bounceRight';
import SlideRight from '../../../utils/animations/slideRight';

const TestimonialTwo = () => {
    return (
        <section className="testimonial testimonial-two sub-bg section-padding">
            <div className="bg-image d-none d-lg-block" style={{ backgroundImage: `url('/images/testimonial/shape2.png')` }}></div>
            <BounceRight className="women d-none d-lg-block" delay={3}>
                <div className="wrp">
                    <i><FaQuoteRight/></i>
                    <img src={'/images/testimonial/a1.png'} alt="" />
                </div>
            </BounceRight>
            <SlideRight className="stroke-text d-none d-lg-block">
                <img src={'/images/testimonial/text.png'} alt="" />
            </SlideRight>
            <div className="gaps-primary2 d-none d-sm-block float-bob-x">
                <img src={'images/shape/gaps-primary-fade.png'} alt="" />
            </div>
            <div className="container">
                <div className="row">
                    <TestimonailSlide />
                    <div className="col-lg-5">
                    </div>
                </div>
            </div>
        </section >
    )
}

export default TestimonialTwo