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
                                <SectionTitle.Title>Specialized Construction Services</SectionTitle.Title>
                            </SectionTitle>
                        </div>
                        <div className="col-xl-6">
                            <div className="content">
                                <SectionTitle.Description>
                                    At SJ Tech Trading Contracting W.L.L., we provide cutting-edge solutions 
                                    for Steel, Aluminum, Glass, and Refractory Construction. Our dedication 
                                    to high standards ensures each project’s success, from fabrication to final 
                                    installation, tailored precisely to industry demands.
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
                <ServicesTrading />
            </div>
        </section>
    )
}

export default ServiceFour