import React from 'react'
import ProgressBar from '../../ui/progressBar'
import ExperienceTwo from '../experiences/experienceTwo'
import SectionTitle from '../services/sectionTitle'
import SlideRight from '../../../utils/animations/slideRight'

const AboutTwo = () => {
    return (
        <section className="about-two section-padding">
            <div className="drawing-compass scale-animation d-none d-lg-block">
                <img src={'/images/shape/drawing-compass.png'} alt="drawing-compass" />
            </div>
            <div className="compass d-none d-lg-block">
                <img src={'/images/shape/compass.png'} alt="compass" />
            </div>
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6">
                        <div className="left-item">
                            <SectionTitle className={"mb-5"}>
                                <SectionTitle.Name>ABOUT TO MISTRI</SectionTitle.Name>
                                <SectionTitle.Title>We Provide the Guaranteed Quality in Construction</SectionTitle.Title>
                                <SectionTitle.Description>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional click. It involves the process of planning, designing, and erecting structures that serve as homes.</SectionTitle.Description>
                            </SectionTitle>

                            <div className="experience-progress-wrapper">
                                <ProgressBar title={"Power & Energy Sector"} finalWidth={"80"} />
                                <ProgressBar title={"Mechanical Engineering"} finalWidth={"90"} />
                                <ProgressBar title={"Gas & Oil Refining"} finalWidth={"70"} />
                            </div>
                        </div>
                    </div>
                    <SlideRight className="col-lg-6">
                        <div className="image">
                            <img src={'/images/about/02.jpg'} alt="image" />
                        </div>
                    </SlideRight>
                </div>
                <ExperienceTwo />
            </div>
        </section>
    )
}

export default AboutTwo