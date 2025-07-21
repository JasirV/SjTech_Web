import React, { useState } from "react";
import validator from "validator";
import api from "../../api/axiosInstance";
import { FaTrashAlt } from "react-icons/fa";
import { useQueryClient } from "@tanstack/react-query";
import Preloader from "../../components/ui/preloader";
import toast from "react-hot-toast";
import {
  uploadPdfToCloudinary,
  uploadToCloudinary,
} from "../../utils/imageUpload";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import PDFViewer from "../../components/sections/modal/PDFViewer";

const AddProduct = () => {
  const queryClient = useQueryClient();
  const [ImagePre, setImagePre] = useState();
  const [mainImagePre, setMainImagePre] = useState();
  const [secondaryImagePreviews, setSecondaryImagePreviews] = useState([]);
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const defaultFormData = {
    service_name: "",
    Image: null,
    mainImage: null,
    aboutText: "",
    additionalText: "",
    featuresList: "",
    Category: "",
    modernTitle: "",
    secondaryImages: [],
  };
  const [formData, setFormData] = useState({
    service_name: "",
    Image: null,
    mainImage: null,
    aboutText: "",
    additionalText: "",
    featuresList: "",
    Category: "",
    modernTitle: "",
    secondaryImages: [],
  });

  const [errors, setErrors] = useState({});

  // Validate and sanitize inputs
  const validateInputs = () => {
    const newErrors = {};
    if (!formData.service_name)
      newErrors.service_name = "Service name is required.";
    if (!formData.Image) newErrors.Image = "Image (src) is required.";
    if (!formData.mainImage) newErrors.mainImage = "Main image is required.";
    if (!formData.featuresList)
      newErrors.featuresList = "Features list is required.";
    if (formData.secondaryImages.length === 0)
      newErrors.secondaryImages = "At least one secondary image is required.";
    if (!formData.Category) newErrors.Category = "Category is required.";
    if (!formData.modernTitle)
      newErrors.modernTitle = "Modern title is required.";
    if (!formData.aboutText) newErrors.aboutText = "About text is required.";
    if (!formData.additionalText)
      newErrors.additionalText = "Additional text is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "Image") {
      setFormData((prevData) => ({ ...prevData, Image: files[0] }));
      setImagePre(URL.createObjectURL(files[0]));
    } else if (name === "mainImage") {
      setFormData((prevData) => ({ ...prevData, mainImage: files[0] }));
      setMainImagePre(URL.createObjectURL(files[0]));
    } else if (name === "secondaryImages") {
      const filesArray = Array.from(files);
      setFormData((prevData) => ({
        ...prevData,
        secondaryImages: [...prevData.secondaryImages, ...files],
      }));
      const newPreviews = filesArray.map((file) => URL.createObjectURL(file));
      setSecondaryImagePreviews((prevPreviews) => [
        ...prevPreviews,
        ...newPreviews,
      ]);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: validator.escape(value),
      }));
    }
  };
  // const handleFileChange = (e) => {
  //   if (e.target.files.length > 0) {
  //     setFile(e.target.files[0]);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs before proceeding
    if (!validateInputs()) return;
    // Upload the file first
    try {
      setIsLoading(true);

      // Upload images to Cloudinary
      const imageUrl = await uploadToCloudinary(formData.Image);
      const mainImageUrl = await uploadToCloudinary(formData.mainImage);
      const secondaryImageUrls = await Promise.all(
        formData.secondaryImages.map((img) => uploadToCloudinary(img))
      );
      console.log(secondaryImageUrls, "lin113");
      // Optional: upload PDF if you still need that
      let uploadedPdfUrl = null;
      if (file) {
        uploadedPdfUrl = await uploadPdfToCloudinary(file); 
        console.log("Upload successful. URL:", uploadedPdfUrl);
      }

      // Prepare final data to store in Firestore
      const finalProductData = {
        service_name: formData.service_name,
        Image: imageUrl,
        mainImage: mainImageUrl,
        secondaryImages: secondaryImageUrls,
        aboutText: formData.aboutText,
        additionalText: formData.additionalText,
        featuresList: formData.featuresList
          .split(",")
          .map((item) => item.trim()),
        Category: formData.Category,
        modernTitle: formData.modernTitle,
        pdf: uploadedPdfUrl+"?flags=attachment" || null,
        createdAt: new Date(),
      };

      // Save to Firestore
      await addDoc(collection(db, "products"), finalProductData);

      toast.success("Product added successfully!");
      setMessage("Product added successfully");
      setFormData(defaultFormData);
      setImagePre(null);
      setMainImagePre(null);
      setSecondaryImagePreviews([]);
    } catch (err) {
      console.error("Error submitting product:", err.message);
      toast.error("Failed to add product. Try again.");
      setMessage("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteImage = (type, index) => {
    if (type === "Image") {
      setFormData((prevData) => ({ ...prevData, Image: null }));
      setImagePre(null);
    } else if (type === "mainImage") {
      setFormData((prevData) => ({ ...prevData, mainImage: null }));
      setImagePre(null);
    } else if (type === "secondaryImages") {
      setSecondaryImagePreviews((prevPreviews) =>
        prevPreviews.filter((_, i) => i !== index)
      );
      setFormData((prevData) => ({
        ...prevData,
        secondaryImages: prevData.secondaryImages.filter((_, i) => i !== index),
      }));
    }
  };
  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFile(e.target.files[0]); // assuming only one PDF allowed
    }
  };
  return (
    <div className="add-product">
      <div className="container">
        {isLoading && <Preloader />}
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
            {errors.service_name && (
              <div className="form-feedback">{errors.service_name}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="Image">Product Image</label>
            {ImagePre && (
              <div className="image-preview">
                <img src={ImagePre} alt="Preview" className="preview-img" />
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
              name="Image" // Change to Image
              onChange={handleInputChange}
            />
            {errors.Image && (
              <div className="form-feedback">{errors.Image}</div>
            )}{" "}
            {/* Updated error message */}
          </div>

          <div className="form-group">
            <label htmlFor="mainImage">Main Image</label>
            {mainImagePre && (
              <div className="image-preview">
                <img src={mainImagePre} alt="Preview" className="preview-img" />
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
              id="mainImage"
              name="mainImage"
              onChange={handleInputChange}
            />
            {errors.mainImage && (
              <div className="form-feedback">{errors.mainImage}</div>
            )}
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
            {errors.aboutText && (
              <div className="form-feedback">{errors.aboutText}</div>
            )}
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
            {errors.additionalText && (
              <div className="form-feedback">{errors.additionalText}</div>
            )}
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
            {errors.featuresList && (
              <div className="form-feedback">{errors.featuresList}</div>
            )}
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
            {errors.Category && (
              <div className="form-feedback">{errors.Category}</div>
            )}
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
            {errors.modernTitle && (
              <div className="form-feedback">{errors.modernTitle}</div>
            )}
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

            {errors.secondaryImages && (
              <div className="form-feedback">{errors.secondaryImages}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="pdf">Upload PDF (optional)</label>
            <input
              type="file"
              id="pdf"
              name="pdf"
              accept="application/pdf"
              onChange={handleFileChange}
              style={{ marginBottom: "10px" }}
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn-submit">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
