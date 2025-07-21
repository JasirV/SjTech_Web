import axios from 'axios';

// Retrieve Cloudinary ID from environment variables
const cloudinaryId = import.meta.env.VITE_APP_CLOUDINARY_ID;

// File upload function
export const handleFileUpload = async (file) => {
  if (!file) {
    throw new Error("No file provided for upload");
  }

  const formData = new FormData();

  // Append the file and upload preset to FormData
  formData.append('file', file);

  // Replace this with your actual upload preset
  const uploadPreset = 'secondaryImages';
  formData.append('upload_preset', uploadPreset);

  try {
    // Validate that the Cloudinary ID is set correctly
    if (!cloudinaryId) {
      throw new Error('Cloudinary ID is missing. Check your environment variables.');
    }

    // Make the POST request to Cloudinary
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloudinaryId}/image/upload`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data', // Set proper headers
        },
      }
    );

    // Ensure the response contains the secure URL
    if (response.data && response.data.secure_url) {
      return response.data.secure_url;
    } else {
      throw new Error('Upload succeeded, but no secure URL was returned.');
    }
  } catch (error) {
    // Log detailed error information
    console.error(
      'Error uploading file:',
      error.response ? error.response.data : error.message
    );

    // Throw the error to handle it in the calling function
    throw error;
  }
};

export const uploadToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
    const uploadPreset = 'secondaryImages';
  formData.append("upload_preset",uploadPreset);

  const cloudName = import.meta.env.VITE_APP_CLOUDINARY_ID;
  const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

  const res = await fetch(url, {
    method: "POST",
    body: formData,
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.error?.message || "Upload failed");
  return data.secure_url; // Return the image URL
};

export const uploadPdfToCloudinary = async (pdfFile) => {
  // Validate input
  if (!pdfFile) {
    throw new Error("No file provided");
  }

  // Check if file is PDF
  if (pdfFile.type !== "application/pdf") {
    throw new Error("Only PDF files are allowed");
  }

  // Check file size (e.g., 10MB limit)
  const MAX_SIZE = 10 * 1024 * 1024; // 10MB
  if (pdfFile.size > MAX_SIZE) {
    throw new Error("File size exceeds 10MB limit");
  }

  const formData = new FormData();
  formData.append("file", pdfFile);
  formData.append("upload_preset", "pdf_uploads");
  formData.append("resource_type", "auto"); // 'auto' works better than 'raw' for Cloudinary

  const cloudName = import.meta.env.VITE_APP_CLOUDINARY_ID;
  if (!cloudName) {
    throw new Error("Cloudinary cloud name is not configured");
  }

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message || `Upload failed with status ${response.status}`
      );
    }

    const data = await response.json();
    return data.secure_url;
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    throw new Error(
      error.message || "Failed to upload PDF. Please try again later."
    );
  }
};