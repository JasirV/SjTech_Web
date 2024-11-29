import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";


const StyledCarousel = () => {
  const swiperRef = useRef(null);

  // Autoplay logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      image: "https://www.agoda.com/wp-content/uploads/2024/05/The-bay-of-Doha-Qatar.jpg",
      title: "Trading and Contracting",
      description: "Explore new worlds daily.",
    },
    {
      image: "https://arqpro.eu/wp-content/uploads/2019/12/112841604_l-scaled.jpg",
      title: "Steel, Stainless Aluminum, and Glass sectors",
      description: "Find tranquility in destinations.",
    },
    {
      image: "https://www.jeannouvel.com/wp-content/uploads/2017/04/7-ajn-dohatower-cscec-int-dome04.jpg",
      title: "Supporting Contractors",
      description: "Take steps toward dreams.",
    },
  ];

  return (
    <div className="styled-carousel">
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        loop={true}
        speed={1000}
        effect="fade"
        pagination={{ clickable: true }}
        modules={[Pagination, EffectFade]}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <SlideContent
                isActive={isActive}
                image={slide.image}
                title={slide.title}
                description={slide.description}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default StyledCarousel;

import { Link } from "react-router-dom";
const SlideContent = ({ image, title, description, isActive }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
  
      window.addEventListener('resize', handleResize);
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    // Define responsive styles based on window width
    const textStyles = {
      position: "absolute",
      left: windowWidth < 768 ? "10%" : "5%",  // Adjusted for small screens
      width: windowWidth < 768 ? "80%" : "35%", // Wider text on smaller screens
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      textAlign: windowWidth < 768 ? "center" : "left", // Center text on small screens
      padding: "1rem",
      borderRadius: "10px",
      color: "#fff",
    };
  
    const titleStyles = {
      fontSize: windowWidth < 768 ? "2rem" : "2.5rem",  // Smaller font on mobile
      fontWeight: "bold",
      marginBottom: "1rem",
      color: "white",
    };
  
    const descriptionStyles = {
      fontSize: windowWidth < 768 ? "1rem" : "1.2rem",  // Adjusted for mobile
      color: "#fff",
      marginBottom: "1.5rem",  // Space between description and button
    };
  
    const imageStyles = {
      width: "100%",
      filter: "brightness(0.7)",
      height: "100%",
      objectFit: "cover",
      borderRadius: "10px",
    };
  
    const buttonStyles = {
      padding: windowWidth < 768 ? "0.5rem 1rem" : "0.6rem 1.5rem", // Adjust padding for smaller screens
      fontSize: windowWidth < 768 ? "1rem" : "1.2rem", // Adjust font size for mobile
      color: "#fff",
      border: "1px solid white",
      borderRadius: "30px", // Pill shape button
      cursor: "pointer",
      marginTop: "1rem", // Space between description and button
      background: "transparent", // Transparent background by default
      transition: "background 0.3s ease, transform 0.3s ease", // Added transform transition for a nice effect
      alignSelf: "center", // Center the button horizontally
    };
  
    const handleHover = (e) => {
      e.target.style.transform = "scale(1.05)"; // Slightly enlarge on hover
    };
  
    const handleMouseLeave = (e) => {
      e.target.style.transform = "scale(1)"; // Reset size on hover leave
    };
  
    return (
      <div className={`slide-content ${isActive ? "active" : ""}`} style={{ position: "relative", height: "100%" }}>
        <img
          src={image}
          alt={title}
          className="carousel-image"
          style={imageStyles}
        />
        <motion.div
          className="slide-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: isActive ? 1 : 0,
            y: isActive ? 0 : -50
          }}
          transition={{
            opacity: { duration: 0.5 },
            y: { duration: 0.5 },
          }}
          style={textStyles}
        >
          <h2 className="slide-title" style={titleStyles}>
            {title}
          </h2>
          {/* Description below the title */}
          <p style={descriptionStyles}>
            {description}
          </p>
          <Link to="/contact">
          <button
            className="contact-button"
            style={buttonStyles}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
            
          >
            Contact More
          </button>
          </Link>
        </motion.div>
      </div>
    );
  };