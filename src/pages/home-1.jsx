import React from 'react'
import HeroOne from '../components/sections/heros/heroOne'
import PartnerOne from '../components/sections/partners/partnerOne'
import AboutOne from '../components/sections/abouts/aboutOne'
import ServiceOne from '../components/sections/services/serviceOne'
import HeadeingSlider from '../components/sections/headeingSlider'
import ProjectsOne from '../components/sections/projects/projectsOne'
import ExperienceOne from '../components/sections/experiences/experienceOne'
import TestimonialOne from '../components/sections/testimoniales/testimonialOne'
import { projectsOneData } from '../utils/fackData/projectsOneData'
import ProductsSlider from '../components/sections/products/productsSlider'
import PartnerTwo from '../components/sections/partners/partnerTwo'


const HomeOne = () => {
  return (
    <main>
        <HeroOne/>
        <PartnerOne/>
        <HeadeingSlider bg_color={"secondary-bg"} dir={"to-left"}/>
        <AboutOne/>
        <ServiceOne/>
        <ProjectsOne data={projectsOneData}/>
        <ExperienceOne/>
        <ProductsSlider bg_color={"secondary-bg"} is_bg_img={true} title_sytle={"text-white"}/>
        {/* <TestimonialOne/> */}
        {/* <BlogOne/> */}
        {/* <PartnerTwo/> */}
    </main>
  )
}

export default HomeOne