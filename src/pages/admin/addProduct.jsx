import React, { useState } from 'react';
import validator from 'validator';

const AddProduct = () => {
    const [formData, setFormData] = useState({
        service_name: '',
        src: '',
        mainImage: '',
        aboutText: '',
        additionalText: '',
        featuresList: '',
        Category: '',
        modernTitle: '',
        secondaryImages: '',
    });

    const [errors, setErrors] = useState({});  

    // Sanitization Function
    const sanitizeInput = (value) => {
        // Escape dangerous characters
        return validator.escape(value.trim());
    };

    // Validate Inputs Function
    const validateInputs = () => {
        const newErrors = {};

        if (!formData.service_name) newErrors.service_name = 'Service name is required.';
        if (!validator.isURL(formData.src)) newErrors.src = 'Invalid image URL.';
        if (!validator.isURL(formData.mainImage)) newErrors.mainImage = 'Invalid main image URL.';
        if (!formData.aboutText) newErrors.aboutText = 'About text is required.';
        if (formData.featuresList && !/^[\w\s,]+$/.test(formData.featuresList)) {
            newErrors.featuresList = 'Features must be a comma-separated list of words.';
        }
        if (!formData.Category) newErrors.Category = 'Category is required.';
        if (!formData.modernTitle) newErrors.modernTitle = 'Modern title is required.';
        if (formData.secondaryImages) {
            const urls = formData.secondaryImages.split(',');
            if (!urls.every(url => validator.isURL(url.trim()))) {
                newErrors.secondaryImages = 'All secondary image URLs must be valid.';
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle Input Change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: sanitizeInput(value),
        }));
    };

    // Handle Form Submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate inputs before proceeding
        if (validateInputs()) {
            console.log('Form Submitted:', formData);
        }
    };

    return (
        <div className="add-product">
            <div className="container">
                <h2 className="title">Add Product</h2>
                <form onSubmit={handleSubmit} className="form">
                    <div className="form-group">
                        <label htmlFor="service_name">Service Name</label>
                        <input
                            type="text"
                            id="service_name"
                            name="service_name"
                            value={formData.service_name}
                            onChange={handleInputChange}
                            placeholder="Enter service name"
                        />
                        {errors.service_name && <div className="form-feedback">{errors.service_name}</div>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="src">Product Image</label>
                        <input
                            type="text"
                            id="src"
                            name="src"
                            value={formData.src}
                            onChange={handleInputChange}
                            placeholder="Enter image URL"
                        />
                        {errors.src && <div className="form-feedback">{errors.src}</div>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="mainImage">Main Image URL</label>
                        <input
                            type="text"
                            id="mainImage"
                            name="mainImage"
                            value={formData.mainImage}
                            onChange={handleInputChange}
                            placeholder="Enter main image URL"
                        />
                        {errors.mainImage && <div className="form-feedback">{errors.mainImage}</div>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="aboutText">About Text</label>
                        <textarea
                            id="aboutText"
                            name="aboutText"
                            value={formData.aboutText}
                            onChange={handleInputChange}
                            placeholder="Enter about text"
                        />
                        {errors.aboutText && <div className="form-feedback">{errors.aboutText}</div>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="additionalText">Additional Text</label>
                        <textarea
                            id="additionalText"
                            name="additionalText"
                            value={formData.additionalText}
                            onChange={handleInputChange}
                            placeholder="Enter additional text"
                        />
                        {errors.additionalText && <div className="form-feedback">{errors.additionalText}</div>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="featuresList">Features (comma separated)</label>
                        <input
                            type="text"
                            id="featuresList"
                            name="featuresList"
                            value={formData.featuresList}
                            onChange={handleInputChange}
                            placeholder="Enter features, e.g. Sleek, Durable"
                        />
                        {errors.featuresList && <div className="form-feedback">{errors.featuresList}</div>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="Category">Category</label>
                        <input
                            type="text"
                            id="Category"
                            name="Category"
                            value={formData.Category}
                            onChange={handleInputChange}
                            placeholder="Enter category"
                        />
                        {errors.Category && <div className="form-feedback">{errors.Category}</div>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="modernTitle">Modern Title</label>
                        <input
                            type="text"
                            id="modernTitle"
                            name="modernTitle"
                            value={formData.modernTitle}
                            onChange={handleInputChange}
                            placeholder="Enter modern title"
                        />
                        {errors.modernTitle && <div className="form-feedback">{errors.modernTitle}</div>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="secondaryImages">Secondary Images URLs (comma separated)</label>
                        <input
                            type="text"
                            id="secondaryImages"
                            name="secondaryImages"
                            value={formData.secondaryImages}
                            onChange={handleInputChange}
                            placeholder="Enter secondary image URLs"
                        />
                        {errors.secondaryImages && <div className="form-feedback">{errors.secondaryImages}</div>}
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn-submit">Add Product</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
