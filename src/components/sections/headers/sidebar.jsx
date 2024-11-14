import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaLocationDot, FaPaperPlane, FaPhoneVolume, FaTwitter, FaXmark } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Sidebar = ({ isActiveSidebar, setIsActiveSidebar }) => {
    return (
        <div id="targetElement" className={`side_bar slideInRight ${isActiveSidebar ? "" : "side_bar_hidden"}`}>
            <div className="side_bar_overlay"></div>
            <div className="logo mb-30">
                <img src="/images/logo/SJ Tech Logo-01.png" alt="logo" />
            </div>
            <p className="text-justify">The foundation of any road is the subgrade, which provides a stable base for the road layers above. Proper compaction of the subgrade is crucial to prevent settling and ensure long-term road stability.</p>
            <ul className="info py-4 mt-65 bor-top bor-bottom">
                {/* <li><i className="primary-color"><FaLocationDot /></i> <Link to="#0">example@example.com</Link></li> */}
                <li className="py-4"><i className="primary-color"><FaPhoneVolume /></i> <Link href="tel:+912659302003">+0097433536236</Link></li>
                <li><i className="primary-color"><FaPaperPlane /></i> <Link to="mailto:info@sjtechqa.com">info@sjtechqa.com</Link></li>
            </ul>
            <div className="footer-one mt-65">
                <div className="social-icon">
                    <Link to="#0"><i><FaFacebookF /></i></Link>
                    <Link to="#0"><i></i><FaTwitter /></Link>
                    <Link to="#0"><i><FaLinkedinIn /></i></Link>
                    <Link to="#0"><i><FaInstagram /></i></Link>
                </div>
            </div>
            <button id="closeButton" onClick={()=>setIsActiveSidebar(false)} className="text-white"><i><FaXmark /></i></button>
        </div>
    )
}

export default Sidebar