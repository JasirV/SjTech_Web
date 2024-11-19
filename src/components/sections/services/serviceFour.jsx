import React from 'react'
import SectionTitle from './sectionTitle'
import SlideUp from '../../../utils/animations/slideUp'
import ServicesTrading from './serviceTrading'

const ServiceFour = () => {
    return (
        <section className="service page">
            <div className="container-fluid p-0">
                <div className="container about-three">
                    <div className="row g-5 mb-65 align-items-center">
                        <div className="col-xl-6">
                            <SectionTitle className={"m-0"}>
                                <SectionTitle.Name>OUR EXPERTISE</SectionTitle.Name>
                                <SectionTitle.Title>Trading</SectionTitle.Title>
                            </SectionTitle>
                        </div>
                        <div className="col-xl-6">
                            <div className="content">
                                <SectionTitle.Description>
                                Founded in 2024, SJ Tech Trading Contracting W.L.L. is a dynamic company based in Qatar, specializing in delivering innovative products and services to the civil construction industry. Our primary focus is on the Stainless Steel, Mild Steel, Aluminium, Mashrabiya, Glass work and civil sectors
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
                {/* <ServicesTrading /> */}
                
            </div>
        </section>
    )
}

export default ServiceFour