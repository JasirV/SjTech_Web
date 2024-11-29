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
    { image: 'https://newsar.cgtn.com/n/BfJEA-CEA-BIA/BaAJAcA.jpg', heading: 'About Us' },
    { image: 'https://azarjam.co/en/wp-content/uploads/sites/2/2018/03/1-1.jpg' ,heading:'Glass Work'},
    { image: 'https://gubkinsk-r31.gosweb.gosuslugi.ru/netcat_files/32/115/article3641.jpg',heading:"Steel Work" },
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