import React, { useState } from 'react'
import { projectsThreeData } from '../../../utils/fackData/projectsThreeData'
import SectionTitle from '../services/sectionTitle'
import { FaArrowRight } from 'react-icons/fa6'
import SlideLeft from '../../../utils/animations/slideLeft'
import SlideRight from '../../../utils/animations/slideRight'

const ProjectsTwo = () => {
    const [imgChange, setImgChange] = useState("/images/portfolio/01.jpg")
    return (
        <section className="portfolio bg-image section-padding">
            <div className="container">
                <div className="pb-65">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-5">
                            <SectionTitle className={"m-0"}>
                                <SectionTitle.Name>MISTRI TOP CASE STUDY</SectionTitle.Name>
                                <SectionTitle.Title>Our Portfolio</SectionTitle.Title>
                            </SectionTitle>
                        </div>
                        <div className="col-lg-7">
                            <SectionTitle.Description>We have facility to produce advance work various industrial applications based on specially developed technol-ogy. We are also ready to developement by according to users changing.</SectionTitle.Description>
                        </div>
                    </div>
                </div>
                <div className="row g-4">
                    <SlideLeft className="col-lg-4">
                        <div className="left-item">
                            <div className="accordion" id="accordionExample">
                                {
                                    projectsThreeData.map(({ id, project_description, project_name, src }) => {
                                        return (
                                            <div key={id} className="accordion-item">
                                                <h2 className={`accordion-header`} id={id} onClick={() => setImgChange(src)}>
                                                    <button className={`accordion-button d-flex justify-content-between align-items-center position-relative ${id === "one" ? "" : "collapsed"}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${id}`} aria-expanded={`${id === "one" ? "true" : "false"}`} aria-controls={`collapse${id}`}>
                                                        {project_name}
                                                        <i><FaArrowRight/></i>
                                                    </button>
                                                </h2>
                                                <div id={`collapse${id}`} className={`accordion-collapse collapse ${id === "one" ? "show" : ""}`} aria-labelledby={id} data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <p>{project_description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </SlideLeft>
                    <SlideRight className="col-lg-8">
                        <div className="image">
                            <img id="myImage" src={imgChange} alt="image" />
                            <div className="gaps-light d-none d-sm-block float-bob-x">
                                <img src="/images/shape/gaps-light.png" alt="" />
                            </div>
                            <div className="gaps-light2 d-none d-sm-block float-bob-x">
                                <img src="/images/shape/gaps-light.png" alt="" />
                            </div>
                        </div>
                    </SlideRight>
                </div>
            </div>
        </section>
    )
}

export default ProjectsTwo