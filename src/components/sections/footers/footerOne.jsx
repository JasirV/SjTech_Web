import React from 'react'
import FooterCommonLink from './footerCommonLink'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'
import SlideUp from '../../../utils/animations/slideUp'

const FooterOne = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="footer-one secondary-bg">
            <div className="map">
                <img src="/images/footer/map.png" alt="map" />
            </div>
            <div className="container">
                <div
                    className="footer_one_top position-relative d-flex flex-wrap align-items-center justify-content-between pt-65 pb-65">
                    <div className="logo">
                        <a href="#0">
                            <img src="/images/logo/SJ_Tech_Logo-01w2.png" alt="logo" />
                        </a>
                    </div>
                    <div className="social-icon mt-sm-0">
                        <a href="#0"><i><FaFacebookF /></i></a>
                        <a href="#0"><i><FaTwitter /></i></a>
                        <a href="#0"><i><FaLinkedinIn /></i></a>
                        <a href="#0"><i><FaInstagram /></i></a>
                    </div>
                </div>
                <div className="bor-top position-relative">
                    <div className="row g-4">
                        <SlideUp className="col-md-6">
                            <div className="item">
                                <div className="title">
                                    <h4>About Company</h4>
                                </div>
                                <p>SJ Tech Trading Contracting W.L.L. delivers top solutions in Steel, Aluminum, Glass, and Refractory Construction</p>
                            </div>
                        </SlideUp>
                        <FooterCommonLink />
                    </div>
                </div>
                <div className="copyright">
                    <p>Copyright {year} <strong>SJ Tech</strong>. Design By <Link to="#">ultradevs</Link></p>
                </div>
            </div>
        </footer>
    )
}

export default FooterOne