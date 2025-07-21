import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "../api/axiosInstance";
import { db } from "../firebase/firebase"; 
import { useEffect, useState } from "react";
import { getDocs,doc, collection, getDoc,deleteDoc} from "firebase/firestore";

const fetchProducts = async () => {
  const querySnapshot = await getDocs(collection(db, 'products'));
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const useProduct = () => {
  return useQuery({
    queryKey: ['allProduct'],
    queryFn: fetchProducts,
  });
};
export const getProductById = async (id) => {
  try {
    if (!id) throw new Error("Product ID is required");

    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      console.warn("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error getting document:", error);
    return null;
  }
};
// Fetch a product by ID
export const useProductById = (id) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      if (!id) {
        throw new Error("Product ID is required");
      }

      const docRef = doc(db, "products", id); // Firestore path: /products/{id}
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        throw new Error("Product not found");
      }

      return { id: docSnap.id, ...docSnap.data() };
    },
    enabled: !!id,
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
export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id) => {
      const productRef = doc(db, 'products', id);
      await deleteDoc(productRef);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['allProduct']);
    },
  });
};

