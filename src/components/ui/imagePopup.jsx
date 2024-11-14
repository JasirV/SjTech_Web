import React, { useState, useEffect } from 'react';
import { RiCloseFill, RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

const ImagePopup = ({ images, isOpen, onClose, currentIndex }) => {
    const [currentSlide, setCurrentSlide] = useState(currentIndex);

    useEffect(() => {
        setCurrentSlide(currentIndex);
    }, [currentIndex]);

    if (!isOpen) return null;

    const nextSlide = () => {
        setCurrentSlide((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="slider-overlay">
            <button className="prev-button" onClick={prevSlide}> <RiArrowLeftSLine /> </button>
            <button className="next-button" onClick={nextSlide}><RiArrowRightSLine /></button>
            <div className="slider-container">
                <button className="close-button" onClick={onClose}> <RiCloseFill /> </button>
                <div className="slider">
                    <img src={images[currentSlide].src} alt="Slider" className="slider-image" />
                </div>
            </div>
        </div>
    );
};

export default ImagePopup;
