import React from 'react'
import PageBanner from '../components/sections/pageBanner'
import AboutFour from '../components/sections/abouts/aboutFour'
import Choose from '../components/sections/choose'
import ExperienceFour from '../components/sections/experiences/experienceFour'
import TeamOne from '../components/sections/teams/teamOne'
import TestimonialTwo from '../components/sections/testimoniales/testimonialTwo'
import PartnerTwo from '../components/sections/partners/partnerTwo'
import CarouselPage from '../components/sections/pageCarousel'

const AboutOne = () => {
  const slides = [
    { image: 'https://www.al-othman.com/uploads/real-estate-companies/construction111.jpg', heading: 'About Us' },
    { image: 'https://www.al-othman.com/uploads/real-estate-companies/construction111.jpg' },
    { image: 'https://www.al-othman.com/uploads/real-estate-companies/construction111.jpg', },
];
  return (
    <main>
        {/* <PageBanner breadcrumbTitle={"About Us"}/> */}
        <CarouselPage slides={slides} />
        <AboutFour/>
        <Choose/>
        {/* <ExperienceFour className={""}/> */}
        {/* <TeamOne/> */}
        {/* <TestimonialTwo/> */}
        {/* <PartnerTwo className={""}/> */}
    </main>
  )
}

export default AboutOne