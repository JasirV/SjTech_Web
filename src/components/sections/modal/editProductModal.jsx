import React, { useState, useEffect, useRef } from "react";
import { useProductById } from "../../../hooks/useapiHoooks";
import api from "../../../api/axiosInstance";
import { FaTrashAlt } from "react-icons/fa";
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const EditProductModal = ({ productId, productName, onCancel }) => {
  const queryClient = useQueryClient();
  const fileInputRef = useRef();
  const { data: productData, isLoading, error } = useProductById(productId);
  const [imagePre, setImagePre] = useState(null);
  const [mainImagePre, setMainImagePre] = useState(null);
  const [secondaryImagePreviews, setSecondaryImagePreviews] = useState([]);
  const [newSecondaryImage, setNewSecondaryImage] = useState([]);

  const [formData, setFormData] = useState({
    service_name: "",
    Image: "",
    aboutText: "",
    additionalText: "",
    category: "",
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
        Image: productData.Image || "",
        aboutText: productData.aboutText || "",
        additionalText: productData.additionalText || "",
        category: productData.category || "",
        featuresList: productData.featuresList || "",
        modernTitle: productData.modernTitle || "",
        existingMainImage: productData.mainImage || "",
        secondaryImages: productData.secondaryImages || [],
      });
      setImagePre(productData.Image);
      setMainImagePre(productData.mainImage);
      setSecondaryImagePreviews(productData.secondaryImages || []);
    }
  }, [productData]);

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file" && files.length > 0) {
      const file = files[0];
      setFormData((prev) => ({ ...prev, [name]: file }));
      if (name === "Image") {
        setImagePre(URL.createObjectURL(file));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, mainImage: file }));
      setMainImagePre(URL.createObjectURL(file));
    }
  };

  const handleDeleteImage = (type, index = null) => {
    if (type === "mainImage") {
      setFormData((prev) => ({ ...prev, mainImage: null }));
      setMainImagePre(null);
    } else if (type === "secondaryImages") {
      if (index !== null) {
        // If the image is a new image
        if (newSecondaryImage[index]) {
          setNewSecondaryImage((prev) => {
            const updatedNewImages = [...prev];
            updatedNewImages.splice(index, 1);
            return updatedNewImages;
          });
          setSecondaryImagePreviews((prev) => {
            const updatedPreviews = [...prev];
            updatedPreviews.splice(index, 1);
            return updatedPreviews;
          });
        } else {
          // If the image is an old image
          setFormData((prev) => {
            const updatedImages = [...prev.secondaryImages];
            updatedImages.splice(index, 1); // Remove the image
            return {
              ...prev,
              secondaryImages: updatedImages,
            };
          });
          setSecondaryImagePreviews((prev) => {
            const updatedPreviews = [...prev];
            updatedPreviews.splice(index, 1);
            return updatedPreviews;
          });
        }
      }
    } else if (type === "Image") {
      setFormData((prev) => ({ ...prev, Image: "" }));
      setImagePre(null);
    }
  };

  const prepareFormData = () => {
    const data = new FormData();
    data.append("service_name", formData.service_name);
    data.append("Image", formData.Image);
    data.append("aboutText", formData.aboutText);
    data.append("additionalText", formData.additionalText);
    data.append("category", formData.category);
    data.append("featuresList", formData.featuresList);
    data.append("modernTitle", formData.modernTitle);

    if (formData.mainImage) {
      data.append("mainImage", formData.mainImage);
    }

    formData.secondaryImages.forEach((file, index) => {
      data.append(`secondaryImages[${index}]`, file);
    });

    return data;
  };

  const handleAddSecondaryImages = (e) => {
    const files = Array.from(e.target.files);
    const filePreviews = files.map((file) => URL.createObjectURL(file));

    setNewSecondaryImage((prev) => [...prev, ...files]);
    setSecondaryImagePreviews((prev) => [...prev, ...filePreviews]);
  };

  const handleFileUpload = async (files) => {
    try {
      const uploadedUrls = await Promise.all(
        files.map(async (file) => {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("upload_preset", "secondaryImages");

          const response = await axios.post(
            `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_APP_CLOUDINARY_ID}/image/upload`,
            formData
          );

          return response.data.secure_url;
        })
      );
      return uploadedUrls;
    } catch (error) {
      console.error("Error uploading files:", error.response ? error.response.data : error.message);
      throw error;
    }
  };

  const handleSave = async () => {
    try {
      // Upload new secondary images
      const uploadedUrls = await handleFileUpload(newSecondaryImage);
      
      // Update the form data with the uploaded URLs
      setFormData((prev) => ({
        ...prev,
        secondaryImages: [...prev.secondaryImages, ...uploadedUrls], // Concatenate previous and new URLs
      }));
      console.log(JSON.stringify(formData.secondaryImages),uploadedUrls,'this')
  
      // Prepare the form data for submission
      const data = prepareFormData();
      console.log(data);
  
      // Send the PUT request to update the product
      const response = await api.put(`/product/${productId}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      if (response.status === 200) {
        queryClient.invalidateQueries(["allProduct"]);
        console.log("Product updated successfully:", response.data);
        onCancel(); // Close the modal
      }
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

        <label htmlFor="Image">Product Image:</label>
        {imagePre && (
          <div className="image-preview">
            <img src={imagePre} alt="Preview" className="preview-img" />
            <button
              type="button"
              className="delete-btn"
              onClick={() => handleDeleteImage("Image")}
            >
              <FaTrashAlt />
            </button>
          </div>
        )}
        <input
          type="file"
          id="Image"
          name="Image"
          onChange={handleInputChange}
        />

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
            name="category"
            value={formData.category}
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
          {mainImagePre && (
            <div className="image-preview">
              <img src={mainImagePre} alt="Main" className="preview-img" />
              <button
                type="button"
                className="delete-btn"
                onClick={() => handleDeleteImage("mainImage")}
              >
                <FaTrashAlt />
              </button>
            </div>
          )}
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "block" }}
            onChange={handleMainImageChange}
          />
        </label>

        <div className="preview-section">
          {secondaryImagePreviews.map((preview, index) => (
            <div key={index} className="image-preview-item">
              <img
                src={preview}
                alt={`Preview ${index}`}
                className="preview-img"
              />
              <button
                type="button"
                className="delete-btn"
                onClick={() => handleDeleteImage("secondaryImages", index)}
              >
                <FaTrashAlt />
              </button>
            </div>
          ))}
        </div>

        <label htmlFor="secondaryImages">Secondary Images:</label>
        <input
          id="secondaryImages"
          type="file"
          name="secondaryImages"
          multiple
          accept="image/*"
          onChange={handleAddSecondaryImages}
        />

        <div className="modal-actions">
          <button className="save-btn" onClick={handleSave}>
            Save
          </button>
          <button className="cancel-btn" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProductModal;
