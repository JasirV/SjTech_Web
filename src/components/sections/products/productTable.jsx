import React from 'react'
import { productData } from '../../../utils/fackData/productData'
import { FaX } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux'
import { removeToCart } from '../../../redux/addToCartSlice'

const ProductTable = ({ className }) => {
    const { products } = useSelector((state) => state.addToCart)
    const totalPrice = products.reduce((total, product) => total + product?.finalPrice * product?.quantity, 0);

    return (
        <section className={`cart-page section-padding ${className}`}>
            <div className="container">

                <div className="shopping-cart bor sub-bg">
                    <div
                        className="column-labels py-3 px-4 d-flex justify-content-between align-items-center fw-bold text-white text-uppercase">
                        <label className="product-details">Product</label>
                        <label className="product-price">Price</label>
                        <label className="product-quantity">Quantity</label>
                        <label className="product-line-price">Total</label>
                        <label className="product-removal">Edit</label>
                    </div>

                    {
                        products.length ?
                            products.map(({ id, finalPrice, thumbnail, title, quantity }) => <CardMain key={id} id={id} thumbnail={thumbnail} price={finalPrice} title={title} quantity={quantity} />)
                            :
                            /* for demo data, if you add a product by clicking the add to cart functionality, then remove this code */
                            productData.slice(0, 2).map(({ id, price, thumbnail, title }) => <CardMain key={id} id={id} thumbnail={thumbnail} price={price} title={title} quantity={"1"} />)
                        /* for demo data, if you add a product by clicking the add to cart functionality, then remove this code */
                    }

                    <Price totalPrice={totalPrice} />
                </div>

                {/* <!-- shopping-cart-mobile --> */}
                <div className="shopping-cart mobile-view bor sub-bg">
                    {products.length ?
                        products.map(({ id, finalPrice, thumbnail, title, quantity }) => <CardMain key={id} id={id} thumbnail={thumbnail} price={finalPrice} title={title} quantity={quantity} />)
                        :
                        /* for demo data, if you add a product by clicking the add to cart functionality, then remove this code */
                        productData.slice(0, 2).map(({ id, price, thumbnail, title }) => <CardMain key={id} id={id} thumbnail={thumbnail} price={price} title={title} quantity={"1"} />)
                        /* for demo data, if you add a product by clicking the add to cart functionality, then remove this code */
                    }
                    <Price totalPrice={totalPrice} />
                </div>
            </div>
        </section>
    )
}

export default ProductTable


const CardMain = ({ id, thumbnail, title, price, quantity }) => {
    const dispatch = useDispatch()
    return (
        <div className="product p-4 bor-top bor-bottom d-flex justify-content-between align-items-center">
            <div className="product-details d-flex align-items-center">
                <img src={thumbnail} alt="image" />
                <h4 className="ps-4 text-capitalize">{title}</h4>
            </div>
            <div className="product-price">{price}</div>
            <div className="product-quantity">
                <input type="number" value={quantity} min="1" readOnly />
            </div>
            <div className="product-line-price">{quantity * price}</div>
            <div className="product-removal">
                <button onClick={() => dispatch(removeToCart(id))} className="remove-product">
                    <i className=" heading-color"><FaX /></i>
                </button>
            </div>
        </div>
    )
}

const CardMobile = ({ id, thumbnail, title, price, quantity }) => {
    const dispatch = useDispatch()
    return (
        <div className="product p-4 bor-top bor-bottom">
            <div className="product-details d-flex align-items-center">
                <img src={thumbnail} alt="image" />
                <h4 className="ps-4 text-capitalize">{title}</h4>
            </div>
            <div className="product-price">{price}</div>
            <div className="product-quantity">
                <input type="number" value={quantity} min="1" readOnly />
            </div>
            <div className="product-line-price">{quantity * price}</div>
            <div className="product-removal">
                <button onClick={() => dispatch(removeToCart(id))} className="remove-product">
                    <i className="heading-color"><FaX /></i>
                </button>
            </div>
        </div>
    )
}

const Price = ({ totalPrice }) => {
    return (
        <div className="totals">
            <div className="totals-item theme-color float-end">
                <span className="fw-bold text-uppercase py-2">cart total =</span>
                <div className="totals-value d-inline py-2 pe-2" id="cart-subtotal"> {totalPrice}</div>
            </div>
        </div>
    )
}