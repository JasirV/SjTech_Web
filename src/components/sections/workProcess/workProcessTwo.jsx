import React from 'react'
import { projectsFourData } from '../../../utils/fackData/projectsFourData'
import WorkProcessCard from './workProcessCard'
import SectionTitle from '../services/sectionTitle'

const WorkProcessTwo = () => {
    return (
        <section className="story section-padding sub-bg">
            <div className="container">
                <SectionTitle className={"text-center position-relative"}>
                    <SectionTitle.Name>our case study</SectionTitle.Name>
                    <SectionTitle.Title>Cour recent work</SectionTitle.Title>
                </SectionTitle>
                <div className="wrp">
                    <div className="line d-none d-lg-block"></div>
                    {projectsFourData.map(({ project_description, id, src, project_name }) => {
                        return (
                            id % 2 === 0 ?
                                <WorkProcessCard key={id} description={project_description} src={src} title={project_name} year={`Case 0${id}`} order={"order-lg-1"} left_span={"left-span"} link={true} />
                                :
                                <WorkProcessCard key={id} description={project_description} src={src} title={project_name} year={`Case 0${id}`} order={"order-lg-0"} left_span={""} link={true} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default WorkProcessTwo