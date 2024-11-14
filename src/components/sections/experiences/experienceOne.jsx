import React from 'react'
import ExperienceContent from './experienceContent'
import SlideRight from '../../../utils/animations/slideRight'
import SlideLeft from '../../../utils/animations/slideLeft'

const ExperienceOne = () => {
  return (
    <section className="experience section-padding pt-0">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="left-item">
              <div className="row g-4">
                <SlideLeft className="col-6">
                  <div className="image">
                    <img src={'/images/experience/1.png'} alt="image" />
                  </div>
                </SlideLeft>
                <div className="col-6 overflow-hidden">
                 
                    <SlideRight className="image mb-4">
                      <img src={'/images/experience/2.png'} alt="image" />
                    </SlideRight>
                  
               
                    <SlideRight delay={2} className="image">
                      <img src={'/images/experience/3.png'} alt="image" />
                    </SlideRight>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <ExperienceContent />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceOne