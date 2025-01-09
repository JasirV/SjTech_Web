let cloudinaryId = import.meta.env.VITE_APP_CLOUDINARY_ID;

const uploadToCloudinary = async (file) => {
    const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${cloudinaryId}/image/upload`;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "secondaryImages");
  
    try {
      const response = await fetch(cloudinaryUrl, {
        method: "POST",
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error("Failed to upload image to Cloudinary");
      }
  
      const data = await response.json();
      return data.secure_url; 
    } catch (error) {
      console.error("Cloudinary upload error:", error);
      throw error;
    }
  };
  