import React from 'react';
import { FaCogs, FaIndustry } from 'react-icons/fa';
import CoreAreasCarousel from '../abouts/coreAreaCasrol';
import StyledCarousel from '../../ui/styledCarousel';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const CoreAreas = () => {

  const coreAreas = [
    {
      title: "Trading",
      location:'/service/trading',
      description: [
        "As a forward-thinking trading enterprise, SJ Tech has formed strategic partnerships with leading manufacturers to meet the specialized needs of civil contractors. Our collaborations are backed by our principals, ensuring that we provide comprehensive technical support.",
      ],
      icons: [<FaCogs key="cogs" className="rotating-icon" />, <FaIndustry key="industry" className="rotating-icon" />],
    },
    {
      title: "Contracting",
      location:'/service/contracting',
      description: [
        "Our contracting services are tailored to meet the dynamic demands of Qatar's civil construction landscape. We focus on providing end-to-end solutions for contractors in Steel, Aluminum, and Glass sectors, ensuring projects are delivered with quality and efficiency.",
      ],
      icons: [<FaCogs key="cogs" className="rotating-icon" />, <FaIndustry key="industry" className="rotating-icon" />],
    },
  ];

  return (
    <>
    <Helmet>
    <title>SJ TECH | Innovative Construction Solutions</title>
    <meta name="description" content="SJ Tech Trading Contracting W.L.L. delivers top-tier products and services in Qatar's civil construction industry." />
    <meta name="keywords" content="Stainless Steel, Mild Steel, Aluminium, Glass Work, Civil Construction, Fabrication, Installation" />
    <meta name="author" content="SJ Tech Trading Contracting W.L.L." />
    <link rel="icon" href="/images/logo/SJ Tech Logo-01.png" />
  </Helmet>
    <div className="core-areas-container">
      <h2 className="core-areas-heading">Our Core Areas Of Expertise</h2>
      <div className='box-full'>
      <div className='rightsection'>
        <CoreAreasCarousel/>
        {/* <StyledCarousel/> */}
      </div>
      <div className='mobilescreen'>
        <img src="https://www.windowrepaircentre.com/wp-content/uploads/2023/05/windows-doors-conservatories-repairs-14.jpg" alt="" />
      </div>
      <div className="core-areas-list">
        {coreAreas.map((area, index) => (
          <Link key={index} to={area.location}>
          <div key={index} className="core-area-card">
            <h3 className="core-area-title">{area.title}</h3>
            {area.description.map((desc, i) => (
              <p key={i}  className="core-area-description">{desc}</p>
            ))}
            {area.icons && <div className="core-area-icons">{area.icons}</div>}
          </div>
          </Link>
        ))}
      </div>
      </div>
    </div>
    </>
  );
};

export default CoreAreas;
