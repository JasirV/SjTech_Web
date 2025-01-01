import React from 'react';
import { useParams } from 'react-router-dom';
import PageBanner from '../components/sections/pageBanner';
import ServiceArtical from '../components/sections/services/serviceArtical';
import DetailsBanner from '../components/sections/detailsBanner';
import { productAllData } from '../utils/fackData/productallData';
import PdfViewer from '../components/sections/products/pdfView';

const ServiceDetails = () => {
  const { id } = useParams(); // Fetching id from URL parameters
  const numericId = parseInt(id, 10);
  const product = productAllData.find((i) => i.id === numericId); // Correctly compare IDs
  
  if (!product) {
    return <div>Product not found!</div>; // Handle cases where the product is not found
  }

  return (
    <main>
      {/* Example banner component */}
      {/* <PageBanner
        breadcrumbMain="Our Services"
        breadcrumbMainLink="/service-1"
        breadcrumbTitle={product.service_name}
      /> */}
      {/* Details banner with product info */}
      <DetailsBanner image={product.mainImage} title={product.service_name} />
      {/* Article section with product details */}
      <ServiceArtical product={product} />
      {/* <PdfViewer /> */}
      {/* Uncomment if ServiceFive is needed */}
      {/* <ServiceFive /> */}
    </main>
  );
};

export default ServiceDetails;
