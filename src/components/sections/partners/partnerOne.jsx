import { FaBuilding, FaHandshake } from 'react-icons/fa';

const PartnerOne = () => {
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
                        <p>
                            As a forward-thinking trading enterprise, SJ Tech has formed strategic 
                            partnerships with leading manufacturers to meet the specialized needs of civil 
                            contractors. Our collaborations are backed by our principals, ensuring that we 
                            provide comprehensive technical support. We are committed to supplying 
                            high-quality products at competitive prices, achieved through our prudent 
                            pricing strategy. Our trading operations are primarily geared towards 
                            supporting contractors in the Steel, Stainless Aluminum, and Glass sectors.
                        </p>
                    </div>

                    <div className="content-item">
                        <div className="shape1 floating-shape" style={{ backgroundImage: `url('/images/shape/start2.png')` }}></div>
                        <div className="icon">
                            <FaHandshake size={40} color="#312D81" />
                        </div>
                        <h5>Contracting</h5>
                        <p>
                            At SJ Tech, we are committed to insulating the construction industry from 
                            supply chain challenges by fostering strong relationships with suppliers and 
                            continuously improving our operational capabilities. Our goal is to be the 
                            preferred partner for civil contractors, providing them with the resources they 
                            need to succeed in their projects. With a focus on quality, innovation, and 
                            customer satisfaction, SJ Tech Trading Contracting W.L.L. is poised to make a 
                            significant impact in Qatar's civil construction landscape. We invite you to 
                            partner with us as we build a future of excellence together.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnerOne;
