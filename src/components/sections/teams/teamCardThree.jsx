import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'

const TeamCardThree = ({ src, name, position }) => {
    return (
        <div className="item">
            <h3><Link to="/team-single">{name}</Link></h3>
            <Link to="/team-single" className="image d-block">
                <img src={src} alt="image" />
            </Link>
            <div className="content">
                <span>{position}</span>
                <div className="team-info">
                    <Link to="#0"><i><FaFacebookF /></i></Link>
                    <Link to="#0"><i><FaTwitter /></i></Link>
                    <Link to="#0"><i><FaLinkedinIn /></i></Link>
                </div>
            </div>
        </div>
    )
}

export default TeamCardThree