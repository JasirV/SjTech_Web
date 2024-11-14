import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import CustomSelect from '../../ui/customSelect';

const options = [
    { value: 'road', label: 'Road & Highway' },
    { value: 'architecture', label: 'Architecture' },
    { value: 'construction', label: 'Construction' }
];
const ConsultationForm = ({bg_color}) => {
    return (
        <>
            <div className={`item ${bg_color}`}>
                <input type="text" placeholder="Enter Name" />
                <input type="email" placeholder="Enter email address" />
                <CustomSelect options={options} placeholder="Select a Subject" />
                <input type="text" placeholder="Phone No" />
                <textarea name="message" id="message" placeholder="Write Message . . ."></textarea>
            </div>
            <a href="#0" className="banner_form_btn bg-image d-block"> Get Free Consultation <i><FaArrowRight /></i> </a>
        </>
    )
}

export default ConsultationForm