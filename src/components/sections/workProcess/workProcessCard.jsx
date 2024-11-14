import React from 'react'
import { Link } from 'react-router-dom'
import SlideUp from '../../../utils/animations/slideUp'

const WorkProcessCard = ({ src, year, title, description, order, left_span, color, link }) => {
    return (
        <div className="main-item pb-65">
            <div className="row g-5 align-items-center">
                <div className={`col-lg-6 ${order}`}>
                    {
                        link ?
                            
                                <Link to={"/portfolio-details"} className="image d-block">
                                    <img src={src} alt="image" />
                                </Link>
                         
                            :
                            <div className="image">
                                <img src={src} alt="image" />
                            </div>
                    }
                </div>
                <SlideUp className="col-lg-6">
                    <div className="item">
                        <div className="title">
                            <span className={`primary-color pb-2 ${left_span}`}>{year}</span>
                            <h3 className={`text-capitalize ${color}`}> {link ? <Link to={"/portfolio-details"}>{title}</Link> : title }  </h3>
                            <p className={`pt-4 ${color}`}>{description}</p>
                        </div>
                    </div>
                </SlideUp>
            </div>
        </div>
    )
}

export default WorkProcessCard