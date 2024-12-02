import React from 'react';
import SectionTitle from './sectionTitle';
import SlideUp from '../../../utils/animations/slideUp';

const ServiceSix = () => {
    return (
        <section className="service page">
            <div className="container-fluid p-0">
                <div className="container about-three">
                    <div className="row g-5 mb-65 align-items-center">
                        <div className="col-xl-6">
                            <SectionTitle className={"m-0"}>
                                <SectionTitle.Name>OUR EXPERTISE</SectionTitle.Name>
                                <SectionTitle.Title>Contracting</SectionTitle.Title>
                            </SectionTitle>
                        </div>
                        <div className="col-xl-6">
                            <div className="content">
                                <SectionTitle.Description>
                                    At SJ Tech, we are committed to insulating the construction industry from 
                                    supply chain challenges by fostering strong relationships with suppliers and 
                                    continuously improving our operational capabilities. Our goal is to be the 
                                    preferred partner for civil contractors, providing them with the resources they 
                                    need to succeed in their projects. With a focus on quality, innovation, and 
                                    customer satisfaction, SJ Tech Trading Contracting W.L.L. is poised to make a 
                                    significant impact in Qatar's civil construction landscape. We invite you to 
                                    partner with us as we build a future of excellence together.
                                </SectionTitle.Description>
                                <SlideUp>
                                    <ul>
                                        <li><span></span> Advanced Engineering & Technology</li>
                                        <li><span></span> Timely Project Delivery</li>
                                        <li><span></span> Certified and Skilled Workforce</li>
                                    </ul>
                                </SlideUp>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceSix;
