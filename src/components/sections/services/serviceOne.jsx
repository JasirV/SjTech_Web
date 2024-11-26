import React from 'react'
import SectionTitle from './sectionTitle';
import ServicesSwiper from './servicesSwiper';
import ServiceFocus from './serviceFouces';

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
                    <SectionTitle.name style={{color:'white'}}>OUR AWESOME SERVICES</SectionTitle.name>
                    {/* <SectionTitle.Title>provides the best service <br /> for sustainable progress</SectionTitle.Title> */}
                </SectionTitle>
                <ServiceFocus/>
                {/* <ServicesSwiper/> */}
            </div>
        </section >
    )
}

export default ServiceOne


