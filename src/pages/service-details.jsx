import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageBanner from '../components/sections/pageBanner';
import ServiceArtical from '../components/sections/services/serviceArtical';
import DetailsBanner from '../components/sections/detailsBanner';
import { productAllData } from '../utils/fackData/productallData';
import PdfViewer from '../components/sections/products/pdfView';
import { getProductById, useProductById } from '../hooks/useapiHoooks';
import SkeletonServiceArtical from '../components/ui/skeletons/SkeletonServiceArtical';

const ServiceDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // if (!product) {
  //   return <div>Product not found!</div>; // Handle cases where the product is not found
  // }
  console.log(product)
  if(isLoading){
    return (<SkeletonServiceArtical/>)
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
      <DetailsBanner image={product?.mainImage} title={product?.service_name} />
      {/* Article section with product details */}
      <ServiceArtical product={product} />
      {/* <PdfViewer /> */}
      {/* Uncomment if ServiceFive is needed */}
      {/* <ServiceFive /> */}
    </main>
  );
};

export default ServiceDetails;
