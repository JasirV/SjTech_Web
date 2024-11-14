import React, { useState } from 'react'
import { FaFacebookF, FaLinkedinIn, FaShareNodes, FaTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const TeamCardTwo = ({ name, src, position }) => {
    const [showSocalIcon, setShowSocalIcon] = useState(false)
    return (
        <div className="item">
            <div className="share">
                <i className="share-btn d-inline-block" onClick={() => setShowSocalIcon(!showSocalIcon)}><FaShareNodes /></i>
                <ul id="content1" className={`${showSocalIcon ? "d-block" : "d-none"}`}>
                    <li><Link to="#0"><i><FaFacebookF /></i></Link></li>
                    <li><Link to="#0"><i><FaTwitter /></i></Link></li>
                    <li><Link to="#0"><i><FaLinkedinIn /></i></Link></li>
                </ul>
            </div>
            <Link to="/team-single" className="image d-block">
                <img src={src} alt="image" />
            </Link>
            <div className="content">
                <h3><Link to="/team-single">{name}</Link></h3>
                <span>{position}</span>
            </div>
        </div>
    )
}

export default TeamCardTwo