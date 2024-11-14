import React from 'react'
import CustomSelect from '../../ui/customSelect'

const options = [
    { value: 'uk', label: 'United Kingdom (UK)' },
    { value: 'us', label: 'United State (US)' },
    { value: 'bd', label: 'Bangladesh (BD)' },
    { value: 'saudi', label: 'Saudi' },
    { value: 'dubai', label: 'Dubai' }
];
const CheckoutForm = () => {
    return (
        <>
            <div className="cart-bottom-bar overflow-hidden pt-40">
                <div className="container">
                    <div className="item sub-bg px-4 py-2 bor d-flex align-items-center justify-content-between">
                        <div className="input-area mb-2 mb-lg-0">
                            <input type="text" placeholder="Coupon Code..." className="bor py-2 px-4" />
                        </div>
                        <div className="btn-wrp">
                            <a href="#0" className="btn-one me-2"><span>Update Cart</span></a>
                            <a href="#0" className="btn-two"><span>Proceed to Checkout</span></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cart-payment section-padding pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <CustomSelect options={options} placeholder={"Select Country"}/>
                            <input type="text" className="px-4 py-2 mb-2 w-100 bor" placeholder="State / Country" />
                            <input type="text" className="px-4 py-2 mb-2 w-100 bor" placeholder="Postcode / ZIP" />
                            <a href="#0" className="btn-one mt-2"><span>Make Payment</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckoutForm