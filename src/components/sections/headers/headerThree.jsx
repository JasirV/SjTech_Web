import React, { useEffect, useState } from 'react'
import { FaPhoneVolume } from 'react-icons/fa6'
import { Link, useLocation } from 'react-router-dom'
import Menus from './menus'
import TopHeaderTwo from './topHeaderTwo'
import useStickyHeader from '../../../hooks/useStickyHeader'

const HeaderThree = () => {
    const pathName = useLocation().pathname
    useStickyHeader()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    useEffect(() => {
        setIsMobileMenuOpen(false)
    }, [pathName])
    
    return (
        <header className="header">
            <TopHeaderTwo />
            <div className="header-section">
                <div className="container">
                    <div className="header-wrapper">
                        <div className="logo-menu">
                            <Link to="/" className="logo"> <img src={'/images/logo/SJ_Tech_Logo-01w2.png'} alt="logo" /></Link>
                        </div>
                        <div className={`header-bar d-xl-none ${isMobileMenuOpen ? "active" : ""}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <ul className={`main-menu ${isMobileMenuOpen ? "active" : ""}`}>
                            <Menus />
                            <li className="m-0 menu_info ms-0 ms-xl-3 mt-4 mt-xl-0">
                                <i className="call_ico"><FaPhoneVolume /></i>
                                <div className="call_info">
                                    <span>Call Any Time</span>
                                    <a className="d-block p-0" href="tel:+0097433536239">+0097433536239</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderThree