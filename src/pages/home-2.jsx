import React from 'react'
import HeroTwo from '../components/sections/heros/heroTwo'
import AboutTwo from '../components/sections/abouts/aboutTwo'
import ServiceTwo from '../components/sections/services/serviceTwo'
import ProjectsOne from '../components/sections/projects/projectsOne'
import { projectsTwoData } from '../utils/fackData/projectsTwoData'
import VideoArea from '../components/sections/videoArea'
import HeadeingSlider from '../components/sections/headeingSlider'
import TestimonialTwo from '../components/sections/testimoniales/testimonialTwo'
import BlogTwo from '../components/sections/blogs/blogTwo'
import PartnerTwo from '../components/sections/partners/partnerTwo'
import ProductsSlider from '../components/sections/products/productsSlider'

const HomeTwo = () => {
  return (
    <main>
      <HeroTwo />
      <AboutTwo />
      <ServiceTwo />
      <ProjectsOne data={projectsTwoData} />
      <HeadeingSlider bg_color={"primary-bg"} dir="to-left"/>
      <VideoArea bg_img={""} />
      <HeadeingSlider bg_color={"primary-bg"} dir="to-right" />
      <ProductsSlider bg_color={"light"}/>
      <TestimonialTwo/>
      <BlogTwo/>
      <PartnerTwo className={"pt-0"}/>
    </main>
  )
}

export default HomeTwo