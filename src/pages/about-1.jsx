import React from 'react'
import PageBanner from '../components/sections/pageBanner'
import AboutFour from '../components/sections/abouts/aboutFour'
import Choose from '../components/sections/choose'
import ExperienceFour from '../components/sections/experiences/experienceFour'
import TeamOne from '../components/sections/teams/teamOne'
import TestimonialTwo from '../components/sections/testimoniales/testimonialTwo'
import PartnerTwo from '../components/sections/partners/partnerTwo'

const AboutOne = () => {
  return (
    <main>
        <PageBanner breadcrumbTitle={"About Us"}/>
        <AboutFour/>
        <Choose/>
        <ExperienceFour className={""}/>
        <TeamOne/>
        {/* <TestimonialTwo/> */}
        {/* <PartnerTwo className={""}/> */}
    </main>
  )
}

export default AboutOne