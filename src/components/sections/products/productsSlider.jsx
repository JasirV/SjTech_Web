import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import { TfiAngleLeft, TfiAngleRight } from 'react-icons/tfi'

import { productData } from '../../../utils/fackData/productData';
import SectionTitle from '../services/sectionTitle';
import ProductCard from './productCard';

const ProductsSlider = ({ bg_color, is_bg_img, title_sytle, shop_single_title }) => {
    // bg_color 'secondary-bg' from home page 1
    // is_bg_img 'ture' from home page 1
    // title_sytle 'white' from home page 1
    // bg_color 'light' from home page 2 and home page 3
    // bg_color 'sub-bg' from shop-single page
    // shop_single_title 'true' from shop-single page

    return (
        <section className={`product section-padding ${bg_color}`}>
            {is_bg_img && <div className="map">
                <img src={'/images/product/map.png'} alt="" />
            </div>}
            <div className="container">
                <SectionTitle className={"text-center position-relative"}>
                    {
                        shop_single_title ?
                            <SectionTitle.Title>Related Products</SectionTitle.Title>
                            :
                            <>
                                <SectionTitle.Name>Popular products</SectionTitle.Name>
                                <SectionTitle.Title className={title_sytle}>industrial products</SectionTitle.Title>
                            </>
                    }
                </SectionTitle>
                <Swiper
                    loop={true}
                    spaceBetween={30}
                    speed={500}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        nextEl: ".product-arry-next",
                        prevEl: ".product-arry-prev",
                    }}
                    breakpoints={{
                        1200: {
                            slidesPerView: 4,
                        },
                        992: {
                            slidesPerView: 3,
                        },
                        575: {
                            slidesPerView: 2,
                        },
                    }}
                    className='product-slider'
                    modules={[Navigation, Autoplay]}
                >
                    {
                        productData.map(({ discount_price, id, price, thumbnail, title }) => <SwiperSlide key={id}><ProductCard id={id} discount_price={discount_price} price={price} thumbnail={thumbnail} title={title} /></SwiperSlide>)
                    }
                    <button className="arry-prev product-arry-prev"><i><TfiAngleLeft /></i></button>
                    <button className="arry-next product-arry-next"><i><TfiAngleRight /></i></button>
                </Swiper>
            </div>
        </section >
    )
}

export default ProductsSlider