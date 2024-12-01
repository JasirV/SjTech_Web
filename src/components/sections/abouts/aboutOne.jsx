import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import ModalVideo from 'react-modal-video';
import { useInView } from 'react-intersection-observer';
import { FaArrowRight, FaPhoneVolume, FaBullseye, FaEye } from 'react-icons/fa6'; // Import icons
import SectionTitle from '../services/sectionTitle';
import BounceLeft from '../../../utils/animations/bounceLeft';
import SlideUp from '../../../utils/animations/slideUp';
import SlideLeft from '../../../utils/animations/slideLeft';

const AboutOne = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <section className="about section-padding">
            <div className="shape1">
                <img src={'/images/shape/start1.png'} alt="" />
            </div>
            <div className="shape2">
                <img src={'/images/shape/start2.png'} alt="" />
            </div>
            <div className="about-wrp">
                <div className="bg-image inline d-none d-lg-block" style={{ backgroundImage: `url('/images/about/shape4.png')` }}></div>
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="left-item">
                                <BounceLeft className="image">
                                    <img  src={'/images/about/04.jpeg'} alt="image" />
                                </BounceLeft>
                                {/* <h2 className="d-none d-xl-block">Since 2024</h2> */}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="right-item">
                                <SectionTitle>
                                    <SectionTitle.Name>ABOUT SJ TECH</SectionTitle.Name>
                                    {/* <SectionTitle.Title>We take you to the next level industry solutions</SectionTitle.Title> */}
                                    <SectionTitle.Description>
                                        Founded in 2024, SJ Tech Trading Contracting W.L.L. is a dynamic company based in Qatar, specializing in delivering innovative products and services to the civil construction industry. Our primary focus is on the Stainless Steel, Mild Steel, Aluminium, Mashrabiya, Glass work and civil sectors.
                                    </SectionTitle.Description>
                                </SectionTitle>
                                <div className="content pb-65 bor-bottom">
                                    <div className="row g-4">
                                        <Card heading="Mission"  icoun={<FaBullseye size={30} style={{ color: '#312D81' }} />} numberEnd="M+" description="To insulate the construction industry from supply woes as a trusted supplier of choice" />
                                        <Card heading="Vision" icoun={<FaEye size={30} style={{ color: '#312D81' }} />}  numberEnd="" description="Our vision is to transform SJ Tech into the premier destination for all construction-related needs, particularly in the Steel and Glass sectors. We aspire to be recognized not just as a supplier, but as a trusted partner who anticipates and fulfills the evolving needs of our clients. By consistently delivering exceptional products and services, we aim to earn our customers' loyalty and establish ourselves as their first choice for every project requirement." />
                                    </div>
                                </div>
                                {/* <SlideUp className="about_info pt-65">
                                    <div className="info">
                                        <i className="ring-animation"><FaPhoneVolume /></i>
                                        <div className="about_info_con">
                                            <span>call any time</span>
                                            <a href="tel:+0097433536239">+0097433536239</a>
                                        </div>
                                    </div>
                                    <span className="d-none d-sm-inline">Or</span>
                                    <Link to="/contact" className="btn-one"><span>Contact Us</span> <i><FaArrowRight /></i></Link>
                                </SlideUp> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutOne;

const Card = ({ heading, icoun, description, numberEnd }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0,
    });
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const renderDescription = () => {
        const words = description.split(' ');
        if (words.length <= 10) {
            return description;
        }
        return isExpanded ? description : words.slice(0, 15).join(' ') + '...';
    };

    return (
        <SlideLeft className="col-md-6">
            <div
                ref={ref}
                style={{
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    textAlign: 'center',
                    marginBottom: '20px',
                    display: 'flex',
                    flexDirection: 'column', // Stack content vertically
                    height: '100%', // Ensures cards stretch to the same height
                }}
            >
                {/* Icons Section */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                    {icoun}
                </div>

                <h3
                    style={{
                        fontSize: '22px',
                        color: '#312D81',
                        fontWeight: 'bold',
                        marginBottom: '10px',
                        flex: '0', // Prevents this from stretching
                    }}
                >
                    {heading}
                </h3>

                <p
                    style={{
                        fontSize: '16px',
                        fontWeight: 500,
                        color: '#333',
                        lineHeight: '1.6',
                        flex: '1', 
                    }}
                >
                    {renderDescription()}
                </p>

                {description.split(' ').length > 15 && (
                    <button onClick={toggleExpand} style={{ color: '#312D81' }}>
                        {isExpanded ? 'Show less' : 'Show more'}
                    </button>
                )}
            </div>
        </SlideLeft>
    );
};
