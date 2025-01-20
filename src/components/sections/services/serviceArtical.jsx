import React from "react";

const ServiceArtical = ({ product }) => {
  const {
    mainImage,
    service_name,
    aboutText,
    additionalText,
    featuresList,
    modernTitle,
    secondaryImages,
    Image,
    pdf,
  } = product;

  return (
    <section className="service-single section-padding">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="left-item">
              {/* Main Image */}
              <div className="image">
                <img className="main-image" src={Image} alt={service_name} />
              </div>

              {/* About Section */}
              {service_name && (
                <h3 className="text-capitalize mt-40 mb-30">
                  About {service_name}
                </h3>
              )}
              <p>{aboutText}</p>
              <p className="mt-30 mb-40">{additionalText}</p>

              {/* Features List */}
              <ul>
                {featuresList?.map((feature, index) => (
                  <li key={index}>
                    <span></span> {feature}
                  </li>
                ))}
              </ul>

              {/* Modern Service Section */}
              <h3 className="text-capitalize mb-30">{modernTitle}</h3>
              <div className="row g-4">
                {secondaryImages?.map((image, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="image">
                      <img
                        className="secondary-image"
                        src={image}
                        alt={`Service detail ${index + 1}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
              {pdf&&(
              <div className="pdf-download-container">
                <a
                  href={pdf}
                  download
                  target="_blank"
                  className="pdf-download-link"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png"
                    alt="Download PDF"
                    className="pdf-download-image"
                  />
                </a>
              </div>
              )}
            </div>
          </div>

          <div className="col-lg-4">
            {/* Add additional sidebar component or content here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArtical;
