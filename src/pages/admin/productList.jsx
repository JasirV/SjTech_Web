import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import SlideUp from '../../utils/animations/slideUp';
import useDeleteProduct, { useProduct } from '../../hooks/useapiHoooks';
import { MdOutlineDelete } from "react-icons/md";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import api from '../../api/axiosInstance';
import DeleteConfirmationModal from '../../components/sections/modal/deleteModal';
import { useQueryClient } from '@tanstack/react-query';

const ProductList = () => {
    const {data:productAllData}=useProduct()
    
    return (
        <section className="product-list section-padding">
            <div className="container">
                <div className="row g-4">
                    {productAllData?.map(({ _id, service_name, src }) => (
                        <ProductCard key={_id} id={_id} src={src} product_name={service_name} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductList;

const ProductCard = ({ id, src, product_name }) => {
    const [showModal, setShowModal] = useState(false); // Manage modal visibility
    const [productIdToDelete, setProductIdToDelete] = useState(null); // Store product ID to delete
  
    const deleteProduct = useDeleteProduct(); // Call custom hook for deleting products
  
    const handleDeleteClick = (id) => {
      setProductIdToDelete(id); // Store the product ID to be deleted
      setShowModal(true); // Show the confirmation modal
    };
  
    const confirmDelete = () => {
      if (productIdToDelete) {
        deleteProduct(productIdToDelete) // Call the delete function from the custom hook
          .then(() => setShowModal(false)) // Close modal after successful deletion
          .catch((error) => console.error('Error confirming deletion:', error));
      }
    };
  
    const cancelDelete = () => {
      setShowModal(false); // Close modal without deleting
    };

    return (
        <SlideUp delay={id} className="col-xl-4 col-lg-6">
            <div className="product-item">
                <h3>
                    <Link to={`/service/service-details/${id}`}>{product_name}</Link>
                </h3>
                <Link to={`/service/service-details/${id}`} className="product-image d-block">
                    <img src={src} alt={product_name} />
                </Link>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: "80%" }}>
                    <button
                        style={{ backgroundColor: "#f7c8ce", padding: '3px', borderRadius: "50%" }}
                        onClick={() => setShowModal(true)} // Show modal on delete button click
                    >
                        <MdOutlineDelete size={30} color='red' />
                    </button>
                    <button style={{ backgroundColor: "#d3cfff", padding: '3px', borderRadius: "50%" }}>
                        <HiOutlineAdjustmentsHorizontal size={30} color='blue' />
                    </button>
                </div>

                {/* Render the delete confirmation modal */}
                {showModal && (
                    <DeleteConfirmationModal
                        onConfirm={() => deleteProduct(id)} // On confirm, delete the product
                        onCancel={() => setShowModal(false)} // On cancel, close the modal
                    />
                )}
            </div>
        </SlideUp>
    );
};
