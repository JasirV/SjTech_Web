import React, { useState } from 'react';
import validator from 'validator';
import api from '../../api/axiosInstance';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    service_name: '',
    src: '',
    mainImage: null, // File input for the main image
    aboutText: '',
    additionalText: '',
    featuresList: '', // Comma-separated string for features
    Category: '',
    modernTitle: '',
    secondaryImages: [] // Array for secondary image files
  });

  const [errors, setErrors] = useState({});

  // Validate and sanitize inputs
  const validateInputs = () => {
    const newErrors = {};
    if (!formData.service_name) newErrors.service_name = 'Service name is required.';
    if (!formData.src) newErrors.src = 'Source (src) is required.';
    if (!formData.mainImage) newErrors.mainImage = 'Main image is required.';
    if (!formData.featuresList) newErrors.featuresList = 'Features list is required.';
    if (formData.secondaryImages.length === 0) newErrors.secondaryImages = 'At least one secondary image is required.';
    if (!formData.Category) newErrors.Category = 'Category is required.';
    if (!formData.modernTitle) newErrors.modernTitle = 'Modern title is required.';
    if (!formData.aboutText) newErrors.aboutText = 'About text is required.';
    if (!formData.additionalText) newErrors.additionalText = 'Additional text is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'mainImage') {
      setFormData((prevData) => ({ ...prevData, mainImage: files[0] }));
    } else if (name === 'secondaryImages') {
      setFormData((prevData) => ({
        ...prevData,
        secondaryImages: [...files], // Spread files into an array
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: validator.escape(value.trim()) }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateInputs()) return;

    const formDataToSend = new FormData();
    formDataToSend.append('service_name', formData.service_name);
    formDataToSend.append('src', formData.src);
    formDataToSend.append('aboutText', formData.aboutText);
    formDataToSend.append('additionalText', formData.additionalText);
    formDataToSend.append('featuresList', formData.featuresList.split(',').map((item) => item.trim())); // Convert to array
    formDataToSend.append('Category', formData.Category);
    formDataToSend.append('modernTitle', formData.modernTitle);
    formDataToSend.append('mainImage', formData.mainImage);

    formData.secondaryImages.forEach((image) => {
      formDataToSend.append('secondaryImages', image);
    });

    try {
      const response = await api.post('/product/', formDataToSend, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log('Product added successfully:', response.data);
    } catch (error) {
      console.error('Error adding product:', error.response?.data || error.message);
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
            <label htmlFor="mainImage">Main Image</label>
            <input
              type="file"
              id="mainImage"
              name="mainImage"
              onChange={handleInputChange}
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
              placeholder="Enter features, e.g., Sleek, Durable"
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
            <label htmlFor="secondaryImages">Secondary Images</label>
            <input
              type="file"
              id="secondaryImages"
              name="secondaryImages"
              multiple
              onChange={handleInputChange}
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