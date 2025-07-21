import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import SlideUp from "../../utils/animations/slideUp";
import { MdOutlineDelete } from "react-icons/md";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import DeleteConfirmationModal from "../../components/sections/modal/deleteModal";
import EditProductModal from "../../components/sections/modal/editProductModal"; // Import the new edit modal
import { useDeleteProduct, useProduct } from "../../hooks/useapiHoooks";
import SkeletonServiceTradingProducts from "../../components/ui/skeletons/serviceTradingProducts";

const ProductList = () => {
  const { data: productAllData, isLoading } = useProduct();
  console.log(productAllData, "product");
  if (isLoading) {
    return <SkeletonServiceTradingProducts />;
  }
  return (
    <section className="product-list section-padding">
      <div className="container">
        <div className="row g-4">
          {productAllData?.map(({ id, service_name, Image }) => (
            <ProductCard
              key={id}
              id={id}
              src={Image}
              product_name={service_name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;

const ProductCard = ({ id, src, product_name }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState(null);
  const { mutate: deleteProduct } = useDeleteProduct();

  const handleDeleteClick = (id) => {
    setProductIdToDelete(id);
    setShowDeleteModal(true);
  };

const confirmDelete = () => {
  if (productIdToDelete) {
    deleteProduct(productIdToDelete, {
      onSuccess: () => {
        setShowDeleteModal(false);
      },
      onError: (error) => {
        console.error('Error confirming deletion:', error);
      },
    });
  }
};

  const cancelDelete = () => {
    setShowDeleteModal(false);
  };

  const handleEditClick = () => {
    setShowEditModal(true);
  };
  return (
    <SlideUp delay={id} className="col-xl-4 col-lg-6">
      <div className="product-item">
        <h3>
          <Link to={`/service/service-details/${id}`}>{product_name}</Link>
        </h3>
        <Link
          to={`/service/service-details/${id}`}
          className="product-image d-block"
        >
          <img src={src} alt={product_name} />
        </Link>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "80%",
          }}
        >
          <button
            style={{
              backgroundColor: "#f7c8ce",
              padding: "3px",
              borderRadius: "50%",
            }}
            onClick={() => handleDeleteClick(id)}
          >
            <MdOutlineDelete size={30} color="red" />
          </button>
          <button
            style={{
              backgroundColor: "#d3cfff",
              padding: "3px",
              borderRadius: "50%",
            }}
            onClick={handleEditClick}
          >
            <HiOutlineAdjustmentsHorizontal size={30} color="blue" />
          </button>
        </div>

        {/* Delete Confirmation Modal */}
        {showDeleteModal && (
          <DeleteConfirmationModal
            onConfirm={confirmDelete}
            onCancel={cancelDelete}
          />
        )}

        {/* Edit Product Modal */}
        {showEditModal && (
          <EditProductModal
            productId={id} // Pass product ID to edit modal
            productName={product_name}
            onCancel={() => setShowEditModal(false)} // Close modal
          />
        )}
      </div>
    </SlideUp>
  );
};
