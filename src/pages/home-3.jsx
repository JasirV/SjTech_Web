import React from 'react'
import HeroThree from '../components/sections/heros/heroThree'
import AboutThree from '../components/sections/abouts/aboutThree'
import ServiceOne from '../components/sections/services/serviceOne'
import ProjectsTwo from '../components/sections/projects/projectsTwo'
import VideoArea from '../components/sections/videoArea'
import HeadeingSlider from '../components/sections/headeingSlider'
import ExperienceThree from '../components/sections/experiences/experienceThree'
import BlogThree from '../components/sections/blogs/blogThree'
import TestimonialThree from '../components/sections/testimoniales/testimonialThree'
import ConsultationForm from '../components/sections/heros/consultationForm'
import ProductsSlider from '../components/sections/products/productsSlider'

const HomeThree = () => {
  return (
    <main>
      <HeroThree />
      <div className="banner-form-lg d-block d-lg-none section-padding pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <ConsultationForm bg_color="sub-bg" />
            </div>
          </div>
        </div>
      </div>
      <AboutThree />
      <ServiceOne />
      <ProjectsTwo />
      <ProductsSlider bg_color={"light"} />
      <HeadeingSlider bg_color={"primary-bg"} dir="to-left" />
      <VideoArea bg_img={"bg-2"} />
      <HeadeingSlider bg_color={"primary-bg"} dir="to-right" />
      <ExperienceThree />
      <TestimonialThree />
      <BlogThree />
    </main>
  )
}

export default HomeThree