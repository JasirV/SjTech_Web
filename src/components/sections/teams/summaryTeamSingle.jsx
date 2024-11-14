import React from 'react'
import ProgressBar from '../../ui/progressBar'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const SummaryTeamSingle = () => {
    return (
        <section className="team-single section-padding pb-65">
            <div className="container">
                <div className="row g-4 justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="image">
                            <img src="/images/team/01.jpg" alt="image" />
                            <div className="team-info">
                                <Link className="d-block" href="#0"><i><FaFacebookF /></i></Link>
                                <Link className="d-block" href="#0"><i><FaTwitter /></i></Link>
                                <Link className="d-block" href="#0"><i><FaLinkedinIn /></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="team_single_info">
                            <div className="title pb-30 mb-30 bor-bottom">
                                <h3>Sana P. Lesh</h3>
                                <span className="primary-color mt-1">Senior Engineer</span>
                            </div>
                            <div className="info">
                                <h4 className="pb-3">About Me</h4>
                                <p>Proin ultricies ultricies est vitae cursus. Nulla sit amet suscipit tortor. Maecenas dui erat, ornare eget tristique vitae, rutrum pretium justo. Phasellus vitae consequat nisi, quis luctus nisl. Praesent faucibus sem id massa semper ornare. Nam eu magna at mi pellentesque.</p>
                                <div className="skills mt-65">
                                    <div className="row g-4">
                                        <div className="col-md-6">
                                            <div className="experience-progress-wrapper">
                                                <ProgressBar finalWidth={"90"} title={"Interior Design"} />
                                                <ProgressBar finalWidth={"98"} title={"Maching Learning"} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="experience-progress-wrapper">
                                                <ProgressBar finalWidth={"90"} title={"Consultant"} />
                                                <ProgressBar finalWidth={"98"} title={"Visual Concept"} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SummaryTeamSingle