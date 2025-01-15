import React from "react";

const SkeletonServiceArtical = () => {
  return (
    <section className="service-single section-padding">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="left-item">
              {/* Skeleton for Main Image */}
              <div className="skeleton skeleton-main-image"></div>

              {/* Skeleton for About Section */}
              <div className="skeleton skeleton-title mt-40 mb-30"></div>
              <div className="skeleton skeleton-text"></div>
              <div className="skeleton skeleton-text mt-30 mb-40"></div>

              {/* Skeleton for Features List */}
              <ul className="skeleton-list">
                {Array(4)
                  .fill("")
                  .map((_, index) => (
                    <li key={index} className="skeleton skeleton-list-item"></li>
                  ))}
              </ul>

              {/* Skeleton for Modern Service Section */}
              <div className="skeleton skeleton-title mb-30"></div>
              <div className="row g-4">
                {Array(4)
                  .fill("")
                  .map((_, index) => (
                    <div className="col-md-6" key={index}>
                      <div className="skeleton skeleton-secondary-image"></div>
                    </div>
                  ))}
              </div>

              {/* Skeleton for PDF Download */}
              <div className="skeleton skeleton-pdf-download"></div>
            </div>
          </div>

          <div className="col-lg-4">
            {/* Skeleton for Sidebar */}
            <div className="skeleton skeleton-sidebar"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkeletonServiceArtical;