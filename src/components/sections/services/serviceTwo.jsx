import React from 'react'
import { Link } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa6'
import { serviceTwoData } from '../../../utils/fackData/serviceTwoData'
import SlideLeft from '../../../utils/animations/slideLeft'
import SlideUp from '../../../utils/animations/slideUp'
import SectionTitle from './sectionTitle'
// import { serviceTwoData } from '../../../utils/fackData/serviceTwoData'

const ServiceTwo = () => {
    return (
        <section className="service-two section-padding sub-bg">
            <div className="bulding d-none d-lg-block">
                <img src={'/images/shape/bulding.png'} alt="" />
            </div>
            <div className="container">
                <div className="row g-4 align-items-center">
                    <SlideLeft className="col-lg-6">
                        <div className="item-wrp">
                            <div className="left-item">
                                <div className="accordion" id="accordionExample">
                                    {
                                        serviceTwoData.map(({ id, service_details, service_name, src }) => {
                                            return (
                                                <div key={id} className="accordion-item">
                                                    <h2 className={`accordion-header ${id === "one" ? "pt-0" : ""}`} id={id}>
                                                        <button className={`accordion-button ${id === "one" ? "" : "collapsed"}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${id}`} aria-expanded={`${id === "one" ? "true" : "false"}`} aria-controls={`collapse${id}`}>
                                                            <i>{src}</i> {service_name}
                                                        </button>
                                                    </h2>
                                                    <div id={`collapse${id}`} className={`accordion-collapse collapse ${id === "one" ? "show" : ""}`} aria-labelledby={id} data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            <p>{service_details}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="shape d-none d-xl-block">
                                <img src={'/images/service/shape.png'} alt="shape" />
                            </div>
                        </div>
                    </SlideLeft>
                    <div className="col-lg-6">
                        <div className="right-item">
                            <SectionTitle>
                                <SectionTitle.Name>OUR AWESOME SERVICES</SectionTitle.Name>
                                <SectionTitle.Title>We provide all type of services in <span className="primary-color text-decoration-underline">architecture</span> & <span className="new-color">constrcution</span></SectionTitle.Title>
                            </SectionTitle>
                            <SlideUp><Link to="/service-single"> <i><FaPlus /></i> DISCORVER <br /> MORE </Link></SlideUp>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceTwo