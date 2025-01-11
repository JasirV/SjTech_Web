import React, { useEffect } from 'react';
import PageBanner from '../components/sections/pageBanner';
import ProductAllCard from '../components/sections/products/productAllCard';
import CarouselPage from '../components/sections/pageCarousel';
import api from '../api/axiosInstance';

const Product = () => {
  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      const response = await api.get('/fake');
      console.log(response.data); // Do something with the data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Call the API initially
    fetchData();

    // Set an interval to call the API every 14 seconds (14000ms)
    const intervalId = setInterval(fetchData, 14000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run only once on mount

  const slides = [
    { image: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Souq_Waqif%2C_Doha%2C_Catar%2C_2013-08-05%2C_DD_112.JPG', heading: 'Product' },
    { image: 'https://www.rpfindia.com/images/forged-elbow-suppliers-in-mumbai.jpg', heading: 'SS Fittings' },
    { image: 'https://lexarindustrial.com/content/hardware/58x5wedgeanchorzinc.jpg', heading: 'Bolts' },
  ];

  return (
    <div>
      {/* <PageBanner breadcrumbTitle={"Our Products"} /> */}
      <CarouselPage slides={slides} />
      <ProductAllCard />
    </div>
  );
};

export default Product;
