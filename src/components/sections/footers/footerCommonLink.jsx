import React, { useState } from 'react'
import { FaEnvelope, FaLocationArrow, FaLocationDot, FaPhoneVolume, FaPlus } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { footerGalleryImages } from '../../../utils/fackData/footerGalleryImages'
import ImagePopup from '../../ui/imagePopup'
import SlideUp from '../../../utils/animations/slideUp'

const FooterCommonLink = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openSlider = (index) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const closeSlider = () => {
        setIsOpen(false);
    };

    return (
        <>
            <SlideUp delay={2} className="col-lg-3 col-md-6">
                <div className="item g-4">
                    <div className="title">
                        <h4>Official info</h4>
                    </div>
                    <ul>
                        <li><Link to="#0"><i className="pe-1 text-white"><FaLocationDot /></i> PO BOX : 200163 Doha,Qatar
                        </Link>
                            <Link to="#0" className="map-popup">View Map <i><FaLocationArrow /></i></Link>
                        </li>
                        <li><Link to="tel:+0097433536239"><i className="pe-1 text-white"><FaPhoneVolume /></i>+0097433536239</Link></li>
                        <li><Link to="mailto:info@sjtechqa.com"><i className="pe-1 text-white"><FaEnvelope /></i> info@sjtechqa.com</Link></li>
                    </ul>
                </div>
            </SlideUp>
            <SlideUp delay={3} className="col-lg-3 col-md-6">
                <div className="item">
                    <div className="title">
                        <h4>main menu</h4>
                    </div>
                    <div className="row g-2">
                        <div className="col-6">
                            <ul>
                                <li><Link to="#0">Home</Link></li>
                                <li><Link to="#0">About Us</Link></li>
                                <li><Link to="#0">Services</Link></li>
                                <li><Link to="#0">Products</Link></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                {/* <li><Link to="#0">Career</Link></li>
                                <li><Link to="#0">Our Team</Link></li>
                                <li><Link to="#0">Latest News</Link></li> */}
                                <li><Link to="#0">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </SlideUp>
        </>
    )
}

export default FooterCommonLink
