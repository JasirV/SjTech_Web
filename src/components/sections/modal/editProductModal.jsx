import React, { useState, useEffect, useRef } from "react";
import axios from "axios"; // Assuming you are using axios for API requests
import { useProductById } from "../../../hooks/useapiHoooks";
import api from "../../../api/axiosInstance";

const EditProductModal = ({ productId, productName, onCancel }) => {
  const fileInputRef = useRef();
  const { data: productData, isLoading, error } = useProductById(productId); // Pass productId to the hook
  const [ImagePre, setImagePre] = useState();
  const [mainImagePre,setMainImagePre]=useState()
  const [secondaryImagePreviews, setSecondaryImagePreviews] = useState([]);
  
  const [formData, setFormData] = useState({
    service_name: "",
    aboutText: "",
    additionalText: "",
    Category: "",
    featuresList: "",
    modernTitle: "",
    mainImage: null,
    secondaryImages: [],
    existingMainImage: "",
  });

  useEffect(() => {
    if (productData) {
      setFormData({
        service_name: productData.service_name || "",
        aboutText: productData.aboutText || "",
        additionalText: productData.additionalText || "",
        Category: productData.Category || "",
        featuresList: productData.featuresList || "",
        modernTitle: productData.modernTitle || "",
        existingMainImage: productData.mainImage || "",
        secondaryImages: productData.secondaryImages || [],
      });
      setImagePre(productData.Image)
      setMainImagePre(productData.mainImage)
      setSecondaryImagePreviews(productData.secondaryImages)
    }
  }, [productData]); // This useEffect depends on productData

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, mainImage: file }));
    }
  };

  const handleAddSecondaryImages = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({
      ...prev,
      secondaryImages: [...prev.secondaryImages, ...files],
    }));
  };

  const prepareFormData = () => {
    const data = new FormData();
    data.append("service_name", formData.service_name);
    data.append("aboutText", formData.aboutText);
    data.append("additionalText", formData.additionalText);
    data.append("Category", formData.Category);
    data.append("featuresList", formData.featuresList);
    data.append("modernTitle", formData.modernTitle);

    if (formData.mainImage) {
      data.append("mainImage", formData.mainImage);
    }

    formData.secondaryImages.forEach((file, index) => {
      data.append(`secondaryImages[${index}]`, file); // Ensure correct field names here
    });

    return data;
  };

  const handleSave = async () => {
    const data = prepareFormData();
    try {
      const response = await api.put(`/product/${productId}`, data, {
        headers: {
          "Content-Type": "multipart/form-data", // Ensure this header is set for form-data requests
        },
      });
      console.log("Product updated successfully:", response.data);
      onCancel(); // Fixed: Use onCancel properly here
    } catch (error) {
      console.error("Failed to update product:", error);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="edit-product-modal">
      <div className="modal-content">
        <h2>Edit Product: {productName}</h2>

        <label>
          Name:
          <input
            type="text"
            name="service_name"
            value={formData.service_name}
            onChange={handleInputChange}
          />
        </label>

        <label>
          About Text:
          <textarea
            name="aboutText"
            value={formData.aboutText}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Additional Text:
          <textarea
            name="additionalText"
            value={formData.additionalText}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Category:
          <input
            type="text"
            name="Category"
            value={formData.Category}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Features List:
          <input
            type="text"
            name="featuresList"
            value={formData.featuresList}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Modern Title:
          <input
            type="text"
            name="modernTitle"
            value={formData.modernTitle}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Main Image:
          {formData.existingMainImage && (
            <div style={{ cursor: "pointer", marginBottom: "8px" }}>
              <img
                src={formData.existingMainImage}
                alt="Main"
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </div>
          )}
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "block" }}
            onChange={handleMainImageChange}
          />
        </label>

        <label>
          Secondary Images:
          <input
            type="file"
            name="secondaryImages"
            multiple
            onChange={handleAddSecondaryImages}
          />
        </label>

        <div className="modal-actions">
          <button onClick={handleSave}>Save</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditProductModal;
