import React from 'react';
import SlideUp from '../../utils/animations/slideUp';

const DetailsBanner = ({ image, title }) => {
  return (
    <section
    className="page-banner section-padding"
    style={{
      position: 'relative',
      backgroundImage: image
        ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`
        : 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
      textTransform: 'capitalize',
      textAlign: 'center',
    }}
  >
      <div className="gaps-right d-none d-sm-block float-bob-x">
      <img src="/images/shape/gaps-primary.png" alt="img" />
      </div>
      <div className="gaps-left d-none d-sm-block float-bob-x">
      <img src="/images/shape/gaps-primary.png" alt="img" />      </div>
      <div className="container">
        <SlideUp>
          <h2>{title}</h2>
        </SlideUp>
      </div>
    </section>
  );
};

export default DetailsBanner;
