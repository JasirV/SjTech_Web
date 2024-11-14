"use client"
import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

const ProgressBar = ({ duration = 1000, finalWidth, title }) => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
    });

    const [width, setWidth] = useState(0);

    useEffect(() => {
        const animationInterval = setInterval(() => {
            if (inView) {
                setWidth((prevWidth) => {
                    if (prevWidth < finalWidth) {
                        return prevWidth + 1;
                    } else {
                        clearInterval(animationInterval);
                        return finalWidth;
                    }
                });
            }
        }, duration / finalWidth);

        return () => clearInterval(animationInterval);
    }, [duration, finalWidth, inView]);


    return (

        <div className="experience-progress pb-4">
            <div className="experience-title-wrapper d-flex align-items-center justify-content-between">
                <h5 className="experience-title pb-2">{title}</h5>
                <span className="exp" style={{ left: `${width - 6}%` }}>{finalWidth}%</span>
            </div>
            <div className="progress" ref={ref}>
                <div className="progress-bar" style={{ width: `${width}%` }}></div>
            </div>
        </div>

    )
}

export default ProgressBar
