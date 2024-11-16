import React from 'react'
import ExperienceContent from './experienceContent'
import SlideRight from '../../../utils/animations/slideRight'

const ExperienceFour = ({className}) => {
    // className props get background image from service-2 page
    return (
        <section className={`experience section-padding ${className}`}>
            <div className="container overflow-hidden">
                <div className="row g-5">
                    <div className="col-lg-6">
                        <ExperienceContent />
                    </div>
                    <div className="col-lg-6">
                        <SlideRight className="image ps-0 ps-xl-4">
                            <img src="https://www.indigoqatar.com/wp-content/uploads/2022/05/civil-scaled.jpg" alt="image" />
                        </SlideRight>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExperienceFour