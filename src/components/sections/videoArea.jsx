import React, { useState } from 'react'
import { FaPlay } from 'react-icons/fa6'
import SlideDown from '../../utils/animations/slideDown'
import ModalVideo from 'react-modal-video'

const VideoArea = ({ bg_img }) => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <section className={`video-area bg-image section-padding ${bg_img}`}>
                <div className="container">
                    <SlideDown delay={2}> <h2 className="pt-65">Building Strong Foundations with Innovative Construction Solutions</h2></SlideDown>
                </div>
            </section>
        </>
    )
}

export default VideoArea