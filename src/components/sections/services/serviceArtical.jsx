import React from 'react'
import ServiceSidebar from './serviceSidebar'

const ServiceArtical = () => {
    return (
        <section className="service-single section-padding">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-8">
                        <div className="left-item">
                            <div className="image">
                                <img src="/images/service/single1.jpg" alt="image" />
                            </div>
                            <h3 className="text-capitalize mt-40 mb-30">We ensure best service</h3>
                            <p>We have facility to produce advance work various industrial applications based on
                                specially developed technol-ogy. We
                                are also ready to developement by according to users changing.
                                Cras enim urna, interdum nec porttitor vitae, sollicitudin eu eros.</p>
                            <p className="mt-30 mb-40">Praesent eget mollis nulla, non lacinia urna. Donec sit amet neque
                                auctor, ornare dui
                                rutrum, condimentum justo. Duis
                                dictum, ex accumsan eleifend eleifend, ex justo aliquam nunc, in ultrices ante quam eget
                                massa. Sed scelerisque, odio eu
                                tempor pulvinar, magna tortor finibus lorem, ut mattis tellus nunc ut quam. Curabitur
                                quis ornare leo. Suspendisse
                                bibendum nibh non turpis vestibulum pellentesque.</p>
                            <ul>
                                <li><span></span> Greate Technology</li>
                                <li><span></span> Delivery Ontime</li>
                                <li><span></span> Certified Engineers</li>
                            </ul>
                            <ul className="mt-30 mb-40">
                                <li><span></span> Greate Technology</li>
                                <li><span></span> Delivery Ontime</li>
                                <li><span></span> Certified Engineers</li>
                            </ul>
                            <h3 className="text-capitalize mb-30">Modern Service Standard</h3>
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="image">
                                        <img src="/images/service/single2.jpg" alt="image" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="image">
                                        <img src="/images/service/single3.jpg" alt="image" />
                                    </div>
                                </div>
                            </div>
                            <p className="mt-3">Praesent eget mollis nulla, non lacinia urna. Donec sit amet neque auctor,
                                ornare dui
                                rutrum, condimentum justo. Duis
                                dictum, ex accumsan eleifend eleifend, ex justo aliquam nunc, in ultrices ante quam eget
                                massa. Sed scelerisque, odio eu
                                tempor pulvinar, magna tortor finibus lorem, ut mattis tellus nunc ut quam. Curabitur
                                quis ornare leo. Suspendisse
                                bibendum nibh non turpis vestibulum pellentesque.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <ServiceSidebar />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceArtical