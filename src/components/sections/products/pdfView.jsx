import React from "react";

const PdfViewer = () => {
  const googleDriveEmbedUrl = "https://drive.google.com/file/d/1Ic195xkAYHpfu9jV_cEMLRBC9ma_2NQ3/preview";
  
  return (
    <div className="pdf-viewer" style={{ width: "100%", height: "80vh" }}>
      <iframe
        src={googleDriveEmbedUrl}
        width="100%"
        height="100%"
        allow="autoplay"
        frameBorder="0"
        title="PDF Viewer"
      />
    </div>
  );
};

export default PdfViewer;
