import React from 'react';

const SkeletonServiceTradingProducts = () => {
    return (
        <section className="page-service section-padding page-tradingProdict">
            <div style={{ display: "flex", justifyContent: "center", marginTop: "-50px", marginBottom: "20px" }}>
            </div>
            <div className="container">
                <div className="row g-4">
                    {Array(6).fill("").map((_, index) => (
                        <SkeletonCard key={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkeletonServiceTradingProducts;

// Skeleton Card Component
const SkeletonCard = () => {
    return (
        <div className="col-xl-4 col-lg-6">
            <div className="item skeleton-item">
                <div className="skeleton skeleton-image"></div>
                <h3 className="skeleton skeleton-title"></h3>
                <div className="skeleton skeleton-button"></div>
            </div>
        </div>
    );
};
