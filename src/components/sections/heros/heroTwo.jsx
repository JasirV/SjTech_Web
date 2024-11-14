import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const HeroTwo = () => {
    return (
        <div className="banner-two">
            <div className="bg-image d-none d-md-block"></div>
            <div className="stroke-text d-none d-md-block">
                <img src={'/images/banner/text.png'} alt="stroke text" />
            </div>
            <div className="container-fluid p-0">
                <Swiper
                    spaceBetween={30}
                    speed={300}
                    centeredSlides={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        nextEl: ".banner2-arry-next",
                        prevEl: ".banner2-arry-prev",
                    }}
                    breakpoints={{
                        1200: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 2,
                        }
                    }
                    }
                    loop={true}
                    modules={[Navigation]}
                >
                    <SwiperSlide><Card src={'/images/banner/a1.jpg'} title={"Building Renovation"} /></SwiperSlide>
                    <SwiperSlide><Card src={'/images/banner/a2.jpg'} title={"Building Renovation"} /></SwiperSlide>
                    <SwiperSlide><Card src={'/images/banner/a3.jpg'} title={"Building Renovation"} /></SwiperSlide>
                    <SwiperSlide><Card src={'/images/banner/a2.jpg'} title={"Building Renovation"} /></SwiperSlide>
                </Swiper>
            </div>
            <div className="banner_two_brand">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3">
                            <div className="arry-btn">
                                <button className="arry-prev banner2-arry-prev"><i><TfiAngleLeft /></i></button>
                                <button className="ms-3 active arry-next banner2-arry-next"><i><TfiAngleRight /></i></button>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="brand_items mt-5 mt-lg-0">
                                <img className="ms-0 ms-xl-5" src={'/images/trust/01.png'} alt="image" />
                                <img className="mt-3 mt-lg-0" src={'/images/trust/02.png'} alt="image" />
                                <img className="mt-3 mt-lg-0" src={'/images/trust/03.png'} alt="image" />
                                <img className="mt-3 mt-lg-0" src={'/images/trust/04.png'} alt="image" />
                                <img className="mt-3 mt-lg-0" src={'/images/trust/05.png'} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeroTwo


const Card = ({ src, title }) => {
    return (
        <div className="item">
            <div className="image">
                <img src={src} alt="image" />
                <div className="content">
                    <h3><Link to="#0">{title}</Link></h3>
                    <Link to="#0">DISCOVER MORE <i><FaArrowRight/></i></Link>
                </div>
            </div>
        </div>
    )
}