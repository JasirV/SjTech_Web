import React from 'react'
import { ourStoryData } from '../../../utils/fackData/ourStoryData'
import SectionTitle from '../services/sectionTitle'
import WorkProcessCard from './workProcessCard'

const WorkProcessOne = () => {
    return (
        <section className="story section-padding secondary-bg">
            <div className="map">
                <img src="/images/story/map.png" alt="map" />
            </div>
            <div className="container">
                <SectionTitle className={"text-center position-relative"}>
                    <SectionTitle.Name>our story</SectionTitle.Name>
                    <SectionTitle.Title className={"text-white"}>Company history</SectionTitle.Title>
                </SectionTitle>

                <div className="wrp">
                    <div className="line d-none d-lg-block"></div>
                    {ourStoryData.map(({ description, id, src, title, year }) => {
                        return (
                            id % 2 === 0 ?
                                <WorkProcessCard key={id} description={description} src={src} title={title} year={year} color={"text-white"} order={"order-lg-1"} left_span={"left-span"} />
                                :
                                <WorkProcessCard key={id} description={description} src={src} title={title} year={year} color={"text-white"} order={"order-lg-0"} left_span={""} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default WorkProcessOne