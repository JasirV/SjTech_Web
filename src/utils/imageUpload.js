import axios from "axios";

const cloudinaryId = import.meta.env.VITE_APP_CLOUDINARY_ID;

export const uploadToCloudinary = async (file) => {
  const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${cloudinaryId}/image/upload`;

  // Ensure the file is a valid File or Blob object
  if (!(file instanceof File || file instanceof Blob)) {
    throw new Error("Invalid file format. Please provide a valid File or Blob object.");
  }

  const formData = new FormData();
  formData.append("file", file); // Correctly append the file
  formData.append("upload_preset", "secondaryImages"); // Use the correct preset name

  try {
    const response = await axios.post(cloudinaryUrl, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    if (response.status !== 200) {
      throw new Error("Failed to upload image to Cloudinary");
    }

    const data = response.data;
    return data.secure_url; // Return the URL of the uploaded image
  } catch (error) {
    console.error("Cloudinary upload error:", error.response?.data || error.message);
    throw error;
  }
};
