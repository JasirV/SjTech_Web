import React, { useState } from 'react'
import { FaBasketShopping, FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaTwitter } from 'react-icons/fa6'
import Rating from '../../ui/rating'
import { useDispatch } from 'react-redux'
import { productData } from '../../../utils/fackData/productData'
import { addToCart } from '../../../redux/addToCartSlice'

const ProductInfo = () => {
    const {id, discount_price, price, thumbnail, title} = productData[0]
    const dispatch = useDispatch()
    const [productQuantity, setProductQuantity] = useState(1)
    const finalPrice = discount_price ? discount_price : price;

    const handleProdcutQuantity = (type) => {
        if (type === "increment") {
            setProductQuantity(productQuantity + 1)
        }
        else {
            if (productQuantity === 1) {
                return
            }
            setProductQuantity(productQuantity - 1)
        }
    }
    return (
        <div className="col-lg-7">
            <div className="content h24">
                <h3 className="pb-2 primary-color">{title}</h3>
                <div className="star primary-color pb-2">
                    <Rating star={4.5} />
                </div>
                <h2 className="pb-3">${discount_price}</h2>
                <h4 className="pb-2 primary-color">Product Description</h4>
                <p className="text-justify">Rapidiusly transform corporate expertise whereas enterprise-wide web services. Progressively whiteboard multifunctional networks for pandemic total linkage a Synergistically recaptiualize client and based methods of empowerment with sustainable bandwidth.</p>
            </div>
            <div className="row">
                <div className="col-lg-8">
                    <div className="details-area">
                        <div className="category flex-wrap mt-4 d-flex py-3 bor-top bor-bottom">
                            <h4 className="pe-3">Categories :</h4>
                            <a href="#0" className="primary-hover">Woman</a>
                            <span className="px-2">|</span>
                            <a href="#0" className="primary-hover">Man</a>
                            <span className="px-2">|</span>
                            <a href="#0" className="primary-hover">Kids</a>
                            <span className="px-2">|</span>
                            <a href="#0" className="primary-hover">Accessories</a>
                        </div>
                        <div className="d-flex flex-wrap py-3 bor-bottom">
                            <h4 className="pe-3">Tags :</h4>
                            <a href="#0" className="primary-hover">Fashion</a>
                            <span className="px-2">|</span>
                            <a href="#0" className="primary-hover">Lifestyle</a>
                            <span className="px-2">|</span>
                            <a href="#0" className="primary-hover">Travel</a>
                            <span className="px-2">|</span>
                            <a href="#0" className="primary-hover">Video</a>
                            <span className="px-2">|</span>
                            <a href="#0" className="primary-hover">Audio</a>
                        </div>
                        <div className="d-flex flex-wrap align-items-center py-3 bor-bottom">
                            <h4 className="pe-3">Share:</h4>
                            <div className="social-media">
                                <a href="#" className="mx-2 primary-color secondary-hover"><i><FaFacebookF /></i></a>
                                <a href="#" className="mx-2 primary-color secondary-hover"><i><FaTwitter /></i></a>
                                <a href="#" className="mx-2 primary-color secondary-hover"><i><FaLinkedinIn /></i></a>
                                <a href="#" className="mx-2 primary-color secondary-hover"><i><FaInstagram /></i></a>
                                <a href="#" className="mx-2 primary-color secondary-hover"><i><FaPinterestP /></i></a>
                            </div>
                        </div>
                        <div className="cart-wrp py-4">
                            <div className="cart-quantity">
                                <form id='myform' method='POST' className='quantity' action='#'>
                                    <input type='button' defaultValue='-' className='qtyminus minus' onClick={() => handleProdcutQuantity("decrement")} />
                                    <input type='text' name='quantity' value={productQuantity} readOnly className='qty' />
                                    <input type='button' defaultValue='+' className='qtyplus plus' onClick={() => handleProdcutQuantity("increment")} />
                                </form>
                            </div>
                            <div className="discount">
                                <input type="text" placeholder="Enter Discount Code" />
                            </div>
                        </div>
                        <div className="d-block text-center btn-two" onClick={() => dispatch(addToCart({ id, quantity: productQuantity, thumbnail, title, finalPrice }))}>
                            <i className="pe-2"><FaBasketShopping /></i> <span className="text-capitalize"> add to cart </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo