import React from 'react'
import ProgressBar from '../../ui/progressBar'
import SectionTitle from '../services/sectionTitle'

const ExperienceContent = () => {
    return (
        <div className="right-item">
        <SectionTitle>
            <SectionTitle.Name>LEADERS IN EXCELLENCE</SectionTitle.Name>
            <SectionTitle.Title>Trading & Contracting Excellence for Industrial Solutions </SectionTitle.Title>
            <SectionTitle.Description>SJ Tech Trading Contracting W.L.L. specializes in high-quality solutions for the Steel, Aluminum, Glass, and Refractory Construction sectors. Our commitment to precision and reliability sets us apart in the industry.</SectionTitle.Description>
        </SectionTitle>
    
        <div className="experience-progress-wrapper">
            <ProgressBar title={"Steel & Metal Fabrication"} finalWidth={"85"} />
            <ProgressBar title={"Refractory Construction & Mechanical Services"} finalWidth={"90"} />
            <ProgressBar title={"Aluminum & Glass Installations"} finalWidth={"80"} />
            <ProgressBar title={"Comprehensive Civil Contractor Support"} finalWidth={"95"} />
        </div>
    </div>
    )
}

export default ExperienceContent