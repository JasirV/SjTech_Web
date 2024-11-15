import React, { useState } from "react";
import { FaArrowRight, FaGear, FaPhoneVolume, FaPlay } from "react-icons/fa6";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import SectionTitle from "../services/sectionTitle";
import ModalVideo from "react-modal-video";
import SlideLeft from "../../../utils/animations/slideLeft";
import SlideRight from "../../../utils/animations/slideRight";
import SlideUp from "../../../utils/animations/slideUp";

const AboutFour = () => {
  const [isOpen, setOpen] = useState(false);
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <section className="page-about section-padding">
      <div className="shape1 d-none d-lg-block float-bob-y">
        <img src="/images/shape/shaper1.png" alt="img" />
      </div>
      <div className="shape2 d-none d-lg-block float-bob-y">
        <img src="/images/shape/shapel2.png" alt="img" />
      </div>
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="image">
              <img src="/images/about/01.jpg" alt="image" />
              <div className="sm-image d-none d-sm-block">
                <img src="/images/about/02.png" alt="image" />
              </div>
              <div className="video-btn-wrp d-none d-sm-block"></div>
              <div className="stroke-text d-none d-sm-block">
                <h2>since 2024</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="right-item">
              <SectionTitle className="mb-5">
                <SectionTitle.Name>
                  Trading CONSTRUCTION COMPANY
                </SectionTitle.Name>
                <SectionTitle.Title>
                  We Are Here to Increase Your Knowledge with Experience
                </SectionTitle.Title>
                <SectionTitle.Description>
                  SJ Tech Trading Contracting W.L.L. excels in providing
                  high-quality construction services across a range of
                  industrial applications. With our advanced technology and
                  commitment to continuous development, we ensure our solutions
                  evolve with changing user needs.
                </SectionTitle.Description>
              </SectionTitle>

              {/* Key Features Section */}
              <div className="row g-4">
                {/* Left Slide */}
                <SlideLeft className="col-sm-6">
                  <ul>
                    <li>
                      <span className="mb-4 me-2 primary-color">
                        <FaGear />
                      </span>{" "}
                      Best Quality Support
                    </li>
                    <li>
                      <span className="me-2 primary-color">
                        <FaGear />
                      </span>{" "}
                      Professional Expertise
                    </li>
                  </ul>
                </SlideLeft>

                {/* Right Slide */}
                <SlideRight className="col-sm-6">
                  <ul>
                    <li>
                      <span className="mb-4 me-2 primary-color">
                        <FaGear />
                      </span>{" "}
                      100% Quality Design
                    </li>
                    <li>
                      <span className="me-2 primary-color">
                        <FaGear />
                      </span>{" "}
                      24/7 On Time Support
                    </li>
                  </ul>
                </SlideRight>
              </div>

              {/* Contact Info Section */}
              <SlideUp className="about_info d-flex align-items-center pt-65">
                <Link to="/contact" className="btn-one">
                  <span>Contact Us</span>{" "}
                  <i>
                    <FaArrowRight />
                  </i>
                </Link>
                <span className="bor-left d-none d-sm-block mx-4"></span>
                <div className="info d-flex flex-wrap align-items-center">
                  <i className="ring-animation">
                    <FaPhoneVolume />
                  </i>
                  <div className="about_info_con">
                    <span className="d-block text-capitalize">
                      Call Us Anytime
                    </span>
                    <Link to="tel:+912659302003">+0097433536239</Link>
                  </div>
                </div>
              </SlideUp>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFour;
