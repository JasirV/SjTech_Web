import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';

const productImage = [
    {
        thumbnail: "/images/shop/01.jpg"
    },
    {
        thumbnail: "/images/shop/02.jpg"
    },
    {
        thumbnail: "/images/shop/03.jpg"
    },
    {
        thumbnail: "/images/shop/04.jpg"
    },
    {
        thumbnail: "/images/shop/02.jpg"
    }
]
const ProductThumds = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className="col-lg-5">
            <div className="image img">
                <Swiper
                    speed={1000}
                    loop={true}
                    grabCursor={true}
                    navigation={{
                        nextEl: ".right-arry",
                        prevEl: ".left-arry",
                    }}
                    modules={[Thumbs, Navigation]}
                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                >
                    {
                        productImage.map(({ thumbnail }, index) => <SwiperSlide key={index}> <img src={thumbnail} alt="image" /></SwiperSlide>)
                    }
                </Swiper>

                <div className="mt-3">
                    <Swiper
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        navigation={{
                            nextEl: ".right-arry",
                            prevEl: ".left-arry",
                        }}
                        onSwiper={setThumbsSwiper}
                        modules={[Thumbs, Navigation]}
                        className='shop-slider-thumb'
                    >
                        {
                            productImage.map(({ thumbnail }, index) => <SwiperSlide key={index} className="slide-smoll"> <img src={thumbnail} alt="image" /></SwiperSlide>)
                        }
                    </Swiper>
                </div>
            </div>
        </div >
    )
}

export default ProductThumds