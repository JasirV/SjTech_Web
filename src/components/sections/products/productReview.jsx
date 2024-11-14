import React from 'react'
import Rating from '../../ui/rating'
import { productReviewData } from '../../../utils/fackData/productReviewData'


const ProductReview = () => {
    return (
        <div id="review" className="tab-pane fade">
            <div className="review-wrp">
                {productReviewData.map(({ date, id, name, rating, review, src, time }) => <Card key={id} date={date} name={name} rating={rating} review={review} src={src} time={time} />)}

                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="section-title mt-5 py-15 text-center mb-4">
                            <h3 className="text-capitalize primary-color">add a review</h3>
                        </div>
                        <div className="comment-form">
                            <form action="#">
                                <div className="row">
                                    <div className="col-md-4">
                                        <input type="text" className="w-100 mb-4 bor px-4 py-2" placeholder="Your Name*" />
                                    </div>
                                    <div className="col-md-4">
                                        <input type="email" className="w-100 mb-4 bor px-4 py-2" placeholder="Your Email*" />
                                    </div>
                                    <div className="col-md-4">
                                        <input type="text" className="w-100 mb-4 bor px-4 py-2" placeholder="Type Your Rating" />
                                    </div>
                                </div>
                                <textarea className="w-100 mb-4 bor p-4" placeholder="Message"></textarea>
                            </form>
                            <div className="btn-wrp text-center">
                                <button className="btn-two"><span>Post Submit</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductReview

const Card = ({ src, name, rating, date, review, time }) => {
    return (
        <div className="abmin d-flex flex-wrap flex-md-nowrap align-items-center pb-4">
            <div className="img pb-4 pb-md-0 me-4">
                <img src={src} alt="image" />
            </div>
            <div className="content position-relative p-4 bor">
                <div className="head-wrp pb-1 d-flex justify-content-between">
                    <a href="#0">
                        <h4 className="text-capitalize primary-color">{name} <span className="sm-font ms-2 fw-normal">{date} at {time}</span></h4>
                    </a>
                    <div className="star primary-color">
                        <Rating star={rating} />
                    </div>
                </div>
                <p className="text-justify">{review}</p>
            </div>
        </div>
    )
}