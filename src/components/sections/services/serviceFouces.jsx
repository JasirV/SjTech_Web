import React from 'react';
import { FaCogs, FaIndustry } from 'react-icons/fa';


const ServiceFocus = () => {
  return (
    <div className="service-focus">
      {/* <div className="container"> */}

        {/* Trading Section */}
        <div className='focus-body'>

        <div className="focus-section">
          <div className="focus-content">
            <h3 className="focus-heading">Trading</h3>
            <div>

            <p>
              As a forward-thinking trading enterprise, SJ Tech has formed strategic partnerships with leading
              manufacturers to meet the specialized needs of civil contractors. Our collaborations are backed by our
              principals, ensuring that we provide comprehensive technical support.
            </p>
            <p>
              At SJ Tech, we are committed to insulating the construction industry from supply chain challenges by
              fostering strong relationships with suppliers and continuously improving our operational capabilities.
            </p>
            </div>
          </div>
        </div>

        {/* Contracting Section */}
        <div className="focus-section contracting">
          <div className="focus-content">
            <h3 className="focus-heading">Contracting</h3>
            <div>
            <p>
              Our contracting services are tailored to meet the dynamic demands of Qatar's civil construction landscape.
              We focus on providing end-to-end solutions for contractors in Steel, Aluminum, and Glass sectors,
              ensuring projects are delivered with quality and efficiency.
            </p>
            <p>
              With a strong emphasis on customer satisfaction, SJ Tech aims to be the preferred partner for civil
              contractors. Join us in building a future of excellence together.
            </p>
            </div>
          </div>
          <div className="rotating-icons">
            <FaCogs className="rotating-icon" />
            <FaIndustry className="rotating-icon" />
          </div>
        </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default ServiceFocus;
