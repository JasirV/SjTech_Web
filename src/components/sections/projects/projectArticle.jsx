import React from 'react'
import { FaQuoteRight } from 'react-icons/fa6'

const ProjectArticle = () => {
    return (
        <section className="portfolio-single section-padding">
            <div className="container">
                <h3 className="mb-30 text-capitalize">We ensure best service</h3>
                <p>We have facility to produce advance work various industrial applications based on specially developed technol-ogy. We are also ready to developement by according to users changing. Cras enim urna, interdum nec porttitor vitae, sollicitudin eu eros. </p>
                <p className="mt-30 mb-30">Praesent eget mollis nulla, non lacinia urna. Donec sit amet neque auctor, ornare dui rutrum, condimentum justo. Duis dictum, ex accumsan eleifend eleifend, ex justo aliquam nunc, in ultrices ante quam eget massa. Sed scelerisque, odio eu tempor pulvinar, magna tortor finibus lorem, ut mattis tellus nunc ut quam. Curabitur quis ornare leo. Suspendisse bibendum nibh non turpis vestibulum pellentesque.</p>
                <div className="image">
                    <img src="/images/portfolio/single1.jpg" alt="image" />
                </div>
                <div className="portfoloi_single_items mt-30 pb-65 mb-65 bor-bottom">
                    <div className="row g-4">
                        <Card src={"/images/icon/ps1.png"} title={"Sectors"} para={"Roads & Highway"} />
                        <Card src={"/images/icon/ps2.png"} title={"Owner"} para={"Jone Deo"} />
                        <Card src={"/images/icon/ps3.png"} title={"Project Date"} para={"Started: 2021 - Ending: 2023"} />
                    </div>
                </div>
                <h3 className="mb-30 text-capitalize">The Challenge in Installation</h3>
                <p>We have facility to produce advance work various industrial applications based on specially developed technol-ogy. We are also ready to developement by according to users changing. Cras enim urna, interdum nec porttitor vitae, sollicitudin eu eros.</p>
                <ul className="mt-30">
                    <li><span></span> Greate Technology</li>
                    <li><span></span> Delivery Ontime</li>
                    <li><span></span> Certified Engineers</li>
                    <li><span></span> Greate Technology</li>
                    <li><span></span> Delivery Ontime</li>
                    <li><span></span> Certified Engineers</li>
                </ul>
                <ul className="mt-30 mb-30">
                    <li><span></span> Greate Technology</li>
                    <li><span></span> Delivery Ontime</li>
                    <li><span></span> Certified Engineers</li>
                    <li><span></span> Greate Technology</li>
                    <li><span></span> Delivery Ontime</li>
                    <li><span></span> Certified Engineers</li>
                </ul>
                <p>We have facility to produce advance work various industrial applications based on specially developed technol-ogy. We are also ready to developement by according to users changing. Cras enim urna, interdum nec porttitor vitae, sollicitudin eu eros. Praesent eget mollis nulla, non lacinia urna. Donec sit amet neque auctor, ornare dui rutrum, condimentum justo. Duis dictum, ex accumsan eleifend eleifend, ex justo aliquam nunc, in ultrices ante quam eget massa. Sed scelerisque, odio eu tempor pulvinar, magna</p>
                <div className="portfolio_testimonial sub-bg mt-40 mb-65">
                    <p>posuere luctus orci. Donec vitae mattis quam, vitae tempor arcu. Aenean non odio porttitor,
                        convallis erat sit amet,
                        facilisis velit. Nulla ornare convallis malesuada. Phasellus</p>
                    <i><FaQuoteRight /></i>
                </div>
                <h3 className="text-capitalize mb-30">The Final View of Project</h3>
                <div className="row g-4">
                    <Card2 src={"/images/portfolio/single2.jpg"} />
                    <Card2 src={"/images/portfolio/single3.jpg"} />
                    <Card2 src={"/images/portfolio/single4.jpg"} />
                </div>
                <p className="mt-3 mb-30">Praesent eget mollis nulla, non lacinia urna. Donec sit amet neque auctor, ornare dui rutrum, condimentum justo. Duis dictum, ex accumsan eleifend eleifend, ex justo aliquam nunc, in ultrices ante quam eget massa. Sed scelerisque, odio eu tempor pulvinar, magna tortor finibus lorem, ut mattis tellus nunc ut quam. Curabitur quis ornare leo. Suspendisse bibendum nibh non turpis vestibulum pellentesque.</p>
                <p>We have facility to produce advance work various industrial applications based on specially developed technol-ogy. We are also ready to developement by according to users changing. Cras enim urna, interdum nec porttitor vitae, sollicitudin eu eros. Praesent eget mollis nulla, non lacinia urna. Donec sit amet neque auctor, ornare dui rutrum, condimentum justo. Duis dictum, ex accumsan eleifend eleifend, ex justo aliquam nunc, in ultrices ante quam eget massa. Sed scelerisque, odio eu tempor pulvinar, magna</p>
            </div>
        </section>
    )
}

export default ProjectArticle

const Card = ({ src, title, para }) => {
    return (
        <div className="col-lg-4">
            <div className="item">
                <div className="content">
                    <h4><span></span>{title}</h4>
                    <span>{para}</span>
                </div>
                <div className="icon">
                    <img src={src} alt="icon" />
                </div>
            </div>
        </div>
    )
}

const Card2 = ({ src }) => {
    return (
        <div className="col-md-4">
            <div className="image">
                <img src={src} alt="image" />
            </div>
        </div>
    )
}