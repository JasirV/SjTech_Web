import React from 'react';
import { FaLocationDot, FaPaperPlane, FaPhoneVolume } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const TopHeaderOne = () => {
    return (
        <div className="header-top d-none d-xl-block">
            <div className="container">
                <div className="header-top-wrp d-flex align-items-center justify-content-between">
                    {/* Logo Section */}
                    <div className="logo">
                        <Link to="/" className="logo">
                            <img
                                src="/images/logo/SJ_Tech_Logo-01w2.png"
                                alt="SJ Tech Logo"
                                style={{ maxHeight: '50px' }}
                            />
                        </Link>
                        <p
                            style={{
                                fontSize: '0.7rem',
                                marginTop: '-.5rem',
                                letterSpacing: '1px',
                                textTransform: 'uppercase',
                                textAlign: 'center',
                                fontWeight: '500',
                            }}
                        >
                            Trading and Contracting
                        </p>
                    </div>

                    {/* Contact Info Section */}
                    <ul className="info d-flex align-items-center">
                        <li className="me-4">
                            <i className="primary-color me-2">
                                <FaPaperPlane />
                            </i>
                            <a href="mailto:info@sjtechqa.com">info@sjtechqa.com</a>
                        </li>
                        <li className="bor-left fw-bold ps-4">
                            <i className="primary-color me-2">
                                <FaPhoneVolume />
                            </i>
                            <a href="tel:+0097433536239">+0097433536239</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TopHeaderOne;
