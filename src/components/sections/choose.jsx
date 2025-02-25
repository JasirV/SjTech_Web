import React from 'react'
import SectionTitle from './services/sectionTitle'
import { GiTeamIdea } from "react-icons/gi";
import { FaHandshakeAngle } from 'react-icons/fa6';
import { TiSpanner } from "react-icons/ti";
import { TbHomeEco } from "react-icons/tb";

const Choose = () => {
    return (
        <section className="choose bg-image section-padding">
            <div className="shape d-none d-xl-block float-bob-x">
                <img src="/images/choose/shape.png" alt="sjtech"  />
            </div>
            <div className="container">
                <div className="row mb-5 mb-lg-0 ">
                    <div className="col-lg-6">
                        <SectionTitle>
                            <SectionTitle.Name>CORE FEATURES</SectionTitle.Name>
                            <SectionTitle.Title>Why Choose Us</SectionTitle.Title>
                        </SectionTitle>
                    </div>
                    <div className="col-lg-6">
                        <SectionTitle.Description>SJ Tech Trading Contracting W.L.L. is a leading company based in Qatar, specializing in providing innovative solutions to the civil construction industry. Our expertise spans across Stainless Steel, Mild Steel, Aluminium, Mashrabiya, Glass Work, and various civil sectors. We are committed to delivering high-quality fabrication and installation services to meet the evolving needs of our clients.</SectionTitle.Description>
                    </div>
                </div>
                <div className="row g-4">
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <Card src={<GiTeamIdea size={35} />} title={"Expert Teams"} />
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <Card src={<FaHandshakeAngle size={35}/>} title={"Commit to Clients"} />
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <Card src={<TiSpanner size={35} />} title={"Maintenance & Renovation"} />
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <Card src={<TbHomeEco size={35}/>} title={"Eco Power Technologies"} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Choose

const Card = ({ src, title }) => {
    return (
        <div className="item">
            {/* <img src={src} alt="" /> */}
            {src}
            <h4>{title}</h4>
        </div>
    )
}