import { useQuery, useQueryClient } from "@tanstack/react-query";
import api from "../api/axiosInstance";

// Fetch all products
export const useProduct = () => {
  return useQuery({
    queryKey: ['allProduct'],
    queryFn: async () => {
      const response = await api(`/product/`);
      return response.data.data;
    }
  });
};

// Fetch a product by ID
export const useProductById = (id) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: async () => {
      if (!id) {
        throw new Error("Product ID is required");
      }
      const response = await api(`/product/${id}`);
      return response.data.data;
    },
    enabled: !!id,  // Ensures the query runs only if `id` is provided
  });
};

// Fetch products by category
export const useCategoryProduct = (category) => {
  return useQuery({
    queryKey: ['category', category],
    queryFn: async () => {
      if (!category) {
        throw new Error("Product Category is required");
      }
      const response = await api.get(`/product/service/${category}`);
      return response.data.data;
    },
    enabled: !!category, // Ensures the query runs only if `category` is provided
  });
};

// Custom hook for deleting a product
const useDeleteProduct = () => {
  const queryClient = useQueryClient(); // Access the query client to manage cache
  const deleteProduct = async (id) => {
    try {
      const response = await api.delete(`/product/${id}`);
      console.log('Product deleted:', response);
      queryClient.invalidateQueries('allProduct'); // Invalidate the product query to refresh data
      return response; // You can return the response if needed
    } catch (error) {
      console.error('Error deleting product:', error);
      throw error; // Optionally, throw the error for further handling
    }
  };

  return deleteProduct;
};

export default useDeleteProduct;
