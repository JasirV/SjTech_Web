import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { projectsFiveData } from '../../../utils/fackData/projectsFiveData'

const animations = ['slideIn', 'fadeIn', 'scaleUp'];
const getRandomAnimation = () => {
    const randomIndex = Math.floor(Math.random() * animations.length);
    return animations[randomIndex];
};

const ProjectsThree = () => {
    const [category, setCategory] = useState('All');
    const [animationClass, setAnimationClass] = useState('');

    const handleCategoryClick = (item) => {
        setCategory(item)
        const randomAnimation = getRandomAnimation();
        setAnimationClass(randomAnimation);
    }

    // ------ filter unique category
    const filteredCategory = ["All"]
    projectsFiveData.forEach(({ category }) => {
        if (!filteredCategory.includes(category)) {
            filteredCategory.push(category)
        }
    })
    // ------ filter unique category

    const filteredProjects = category === 'All' ? projectsFiveData : projectsFiveData.filter(image => image.category === category);


    return (
        <section className="page-portfolio team-one section-padding pb-0">
            <div className="container">
                <ul className="portfolio-list mb-65">
                    {filteredCategory.map((item, id) => <li key={id} onClick={() => handleCategoryClick(item)} className={item === category ? "active" : ""}>{item}</li>)}
                </ul>
                <div className="row g-0 portfolio-items">
                    {
                        filteredProjects.map(({ id, project_name, src }) => <Card key={id} src={src} project_name={project_name} animationClass={animationClass} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default ProjectsThree

const Card = ({ src, project_name, animationClass }) => {
    return (
        <div className={`col-lg-4 col-md-6 road renovation ${animationClass}`}>
            <div className="item">
                <div className="share">
                    <i className="fa-solid share-btn fa-location-arrow"></i>
                </div>
                <Link to="/portfolio-single" className="image d-block">
                    <img src={src} alt="image" />
                </Link>
                <div className="content">
                    <span className="text-capitalize pb-2">smart design</span>
                    <h3><Link to="portfolio-single">{project_name}</Link></h3>
                </div>
            </div>
        </div>
    )
}