import React from 'react'
import SlideUp from '../../../utils/animations/slideUp'

const SectionTitle = ({ children, className }) => {
    return (
        <div className={`section-header ${className}`}>
            {children}
        </div>
    )
}

SectionTitle.Name = Name
SectionTitle.Title = Title
SectionTitle.Description = Description

export default SectionTitle


function Name({ className, children, delay = 1 }) {
    return <SlideUp delay={delay}> <h5 className={`${className}`}>{children}</h5> </SlideUp>
}
function Title({ className, children, delay = 2 }) {
    return <SlideUp delay={delay}><h2 className={`${className}`}>{children}</h2></SlideUp>
}
function Description({ className, children, delay = 3 }) {
    return <SlideUp delay={delay}> <p className={`${className}`}>{children}</p></SlideUp>
}