import React from 'react'
import SectionTitle from './sectionTitle';
import ServicesSwiper from './servicesSwiper';

const ServiceOne = () => {
    return (
        <section className="service">
            {/* <div className="shape1">
                <img src={'/images/service/shape12.png'} alt="" />
            </div> */}
            <div className="service-bg bg-image">
            </div>
            <div className="container-fluid p-0">
                <SectionTitle className={"text-center"}>
                    <SectionTitle.Name>OUR AWESOME SERVICES</SectionTitle.Name>
                    <SectionTitle.Title>provides the best service <br /> for sustainable progress</SectionTitle.Title>
                </SectionTitle>
                <ServicesSwiper/>
            </div>
        </section >
    )
}

export default ServiceOne


