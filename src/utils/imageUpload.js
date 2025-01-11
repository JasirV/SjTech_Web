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
