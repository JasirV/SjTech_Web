import { useState } from 'react';
import { FaBuilding, FaHandshake } from 'react-icons/fa';

const PartnerOne = () => {
    const [showMoreTrading, setShowMoreTrading] = useState(false);
    const [showMoreContracting, setShowMoreContracting] = useState(false);

    return (
        <section className="trust section-padding">
            <div className="container">
                <h4 className="mb-65 text-center title">Our Core Areas of Expertise</h4>

                <div className="content-section">
                    <div className="content-item">
                        <div className="shape1 floating-shape" style={{ backgroundImage: `url('/images/shape/start2.png')` }}></div>
                        <div className="icon">
                            <FaBuilding size={40} color="#312D81" />
                        </div>
                        <h5>Trading</h5>
                        <span style={{ width: '85%' }}>
                            {showMoreTrading
                                ? `As a forward-thinking trading enterprise, SJ Tech has formed strategic partnerships with leading manufacturers to meet the specialized needs of civil contractors. Our collaborations are backed by our principals, ensuring comprehensive technical support and high-quality products at competitive prices.`
                                : `As a forward-thinking trading enterprise, SJ Tech has formed strategic partnerships with leading manufacturers to meet the specialized needs of civil contractors.`}
                        </span>
                        <button onClick={() => setShowMoreTrading(!showMoreTrading)} className="show-more-btn">
                            {showMoreTrading ? 'Show Less' : 'Show More'}
                        </button>
                    </div>

                    <div className="content-item">
                        <div className="shape1 floating-shape" style={{ backgroundImage: `url('/images/shape/start2.png')` }}></div>
                        <div className="icon">
                            <FaHandshake size={40} color="#312D81" />
                        </div>
                        <h5>Contracting</h5>
                        <span style={{ width: '80%' }}>
                            {showMoreContracting
                                ? `At SJ Tech, we are committed to insulating the construction industry from supply chain challenges by fostering strong relationships with suppliers and improving operational capabilities. We aim to be the preferred partner for civil contractors, offering resources to succeed in their projects with quality and innovation.`
                                : `At SJ Tech, we are committed to insulating the construction industry from supply chain challenges by fostering strong relationships with suppliers.`}
                        </span>
                        <button onClick={() => setShowMoreContracting(!showMoreContracting)} className="show-more-btn">
                            {showMoreContracting ? 'Show Less' : 'Show More'}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnerOne;
