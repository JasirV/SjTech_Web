import React, { useState, useEffect, useRef } from "react";
import { getProductById } from "../../../hooks/useapiHoooks";
import api from "../../../api/axiosInstance";
import { FaTrashAlt } from "react-icons/fa";
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import Preloader from "../../ui/preloader";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { db, storage } from "../../../firebase/firebase";
import { uploadPdfToCloudinary } from "../../../utils/imageUpload";

const EditProductModal = ({ productId, productName, onCancel }) => {
  const queryClient = useQueryClient();
  const fileInputRef = useRef();
  // const { data: productData, isLoading, error } = getProductById(productId);
  const [imagePre, setImagePre] = useState(null);
  const [mainImagePre, setMainImagePre] = useState(null);
  const [secondaryImagePreviews, setSecondaryImagePreviews] = useState([]);
  const [newSecondaryImage, setNewSecondaryImage] = useState([]);
  const [isLoadingg, setIsLoadingg] = useState(false);
  const [productData, setProductData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    service_name: "",
    Image: "",
    aboutText: "",
    additionalText: "",
    category: "",
    featuresList: "",
    modernTitle: "",
    mainImage: null,
    pdf: null,
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
        existingPdf: productData.pdf || null,
        secondaryImages: productData.secondaryImages || [],
      });
      setImagePre(productData.Image);
      setMainImagePre(productData.mainImage);
      setSecondaryImagePreviews(productData.secondaryImages || []);
    }
  }, [productData]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProductById(productId);
        setProductData(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [productId]);

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
    } else if (type === "secondaryImages" && index !== null) {
      // Handle new images
      if (newSecondaryImage[index]) {
        setNewSecondaryImage((prev) => {
          const updated = [...prev];
          updated.splice(index, 1);
          return updated;
        });
      } else {
        // Handle existing uploaded images
        setFormData((prev) => {
          const updated = [...prev.secondaryImages];
          updated.splice(index, 1);
          return { ...prev, secondaryImages: updated };
        });
      }

      // Remove preview in both cases
      setSecondaryImagePreviews((prev) => {
        const updated = [...prev];
        updated.splice(index, 1);
        return updated;
      });
    } else if (type === "Image") {
      setFormData((prev) => ({ ...prev, Image: "" }));
      setImagePre(null);
    }
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
            `https://api.cloudinary.com/v1_1/${
              import.meta.env.VITE_APP_CLOUDINARY_ID
            }/image/upload`,
            formData
          );
          return response.data.secure_url;
        })
      );
      return uploadedUrls;
    } catch (error) {
      toast.error("Error Uploading Files");
      console.error(
        "Error uploading files:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  };

  const handleSave = async () => {
    try {
      setIsLoadingg(true);

      // 1. Upload new secondary images (if any)
      const uploadedSecondaryUrls = newSecondaryImage.length
        ? await handleFileUpload(newSecondaryImage)
        : [];

      // 2. Upload main image if it's a new File
      let uploadedMainImageUrl = null;
      if (formData.mainImage instanceof File) {
        const [mainImageUrl] = await handleFileUpload([formData.mainImage]);
        uploadedMainImageUrl = mainImageUrl;
      }

      // 3. Upload product image if it's a new File
      let uploadedProductImageUrl = null;
      if (formData.Image instanceof File) {
        const [productImageUrl] = await handleFileUpload([formData.Image]);
        uploadedProductImageUrl = productImageUrl;
      }
      const updatedFields = {};
      let uploadedPdfUrl = null;
      if (formData.pdf instanceof File) {
        uploadedPdfUrl = await uploadPdfToCloudinary(formData.pdf);
        updatedFields.pdf = uploadedPdfUrl;
      } else if (formData.existingPdf === "") {
        updatedFields.pdf = ""; // user removed the PDF
      }

      // 4. Combine old and new secondary images
      const combinedSecondaryImages = [
        ...(formData.secondaryImages || []), // keep the old ones (after delete)
        ...uploadedSecondaryUrls, // add newly uploaded ones
      ];

      // 5. Prepare updated fields for Firestore

      if (formData.service_name !== productData.service_name) {
        updatedFields.service_name = formData.service_name;
      }
      if (uploadedProductImageUrl || formData.Image === "") {
        updatedFields.Image = uploadedProductImageUrl || formData.Image;
      }
      if (formData.aboutText !== productData.aboutText) {
        updatedFields.aboutText = formData.aboutText;
      }
      if (formData.additionalText !== productData.additionalText) {
        updatedFields.additionalText = formData.additionalText;
      }
      if (formData.category !== productData.category) {
        updatedFields.category = formData.category;
      }
      if (formData.featuresList !== productData.featuresList) {
        updatedFields.featuresList = formData.featuresList;
      }
      if (formData.modernTitle !== productData.modernTitle) {
        updatedFields.modernTitle = formData.modernTitle;
      }
      if (uploadedMainImageUrl || formData.mainImage === null) {
        updatedFields.mainImage = uploadedMainImageUrl || formData.mainImage;
      }

      // ✅ Always send combined secondary images (not just new ones!)
      updatedFields.secondaryImages = combinedSecondaryImages;

      // 6. Update Firestore document
      const productRef = doc(db, "products", productId);
      await updateDoc(productRef, updatedFields);

      // 7. Cleanup
      queryClient.invalidateQueries(["allProduct"]);
      toast.success("Product updated successfully");
      onCancel(); // close modal
    } catch (error) {
      toast.error("Failed to update product");
      console.error("Firebase product update error:", error);
    } finally {
      setIsLoadingg(false);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="edit-product-modal">
      {isLoadingg && <Preloader />}
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
        <label htmlFor="pdf">PDF Document:</label>
        {formData.existingPdf && (
          <div className="pdf-preview">
            <a
              href={formData.existingPdf}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Existing PDF
            </a>
            <button
              type="button"
              className="delete-btn"
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  existingPdf: "",
                }))
              }
            >
              <FaTrashAlt />
            </button>
          </div>
        )}
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              pdf: e.target.files[0],
            }))
          }
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
