import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6'
import FooterCommonLink from './footerCommonLink'
import { Link } from 'react-router-dom'
import SlideUp from '../../../utils/animations/slideUp'

const FooterTwo = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="secondary-bg">
            <div className="map">
                <img src="/images/footer/map.png" alt="" />
            </div>
            <div className="container">
                <div className="pt-65 pb-65">
                    <div className="row g-4">
                        <SlideUp className="col-lg-3 col-md-6">
                            <div className="item">
                                <div className="logo pb-3">
                                    <Link to="#0">
                                        <img src="/images/logo/SJ_Tech_Logo-01w2.png" alt="logo" />
                                    </Link>
                                </div>
                                <p>SJ Tech Trading Contracting W.L.L. delivers top solutions in Steel, Aluminum, Glass, and Refractory Construction</p>
                                <div className="social-icon">
                                    <Link to="#0"><i><FaFacebookF /></i></Link>
                                    <Link to="#0"><i><FaTwitter /></i></Link>
                                    <Link to="#0"><i><FaYoutube /></i></Link>
                                    <Link to="#0"><i><FaInstagram /></i></Link>
                                </div>
                            </div>
                        </SlideUp>
                        <FooterCommonLink/>
                    </div>
                </div>
                <div className="copyright">
                    <p>Copyright {year} <strong>SJ TECH</strong>. Design By <Link to="#">ultradevs</Link></p>
                </div>
            </div>
        </footer>
    )
}

export default FooterTwo