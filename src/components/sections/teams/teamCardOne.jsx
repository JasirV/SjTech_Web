import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'

const TeamCardOne = ({ src, name, position }) => {
    return (
        <div className="item">
            <Link to="team-single" className="image d-block">
                <img src={src} alt="image" />
            </Link>
            <div className="team-info">
                <Link className="d-block" to="#0"><i><FaFacebookF /></i></Link>
                <Link className="d-block" to="#0"><i ><FaTwitter /></i></Link>
                <Link className="d-block" to="#0"><i ><FaLinkedinIn /></i></Link>
            </div>
            <div className="content">
                <h3><Link to="team-single">{name}</Link></h3>
                <span>{position}</span>
            </div>
        </div>
    )
}

export default TeamCardOne