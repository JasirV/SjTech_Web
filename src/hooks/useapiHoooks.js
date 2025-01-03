import { useQuery } from "@tanstack/react-query";
import api from "../api/axiosInstance";


export const useProduct =()=>{
    return useQuery({
        queryKey:['allProduct'],
        queryFn:async()=>{
          const response =await api(`/product/`);
          return response.data.data
        }
      })
}

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
        enabled: !!id, 
    });
};

export const useCategoryProduct=(category)=>{
    return useQuery({
        queryKey:['category',category],
        queryFn:async ()=>{
            if(!category){
                throw new Error("Product Category is required")
            }
            const response =await api.get(`/product/service/${category}`)
            return response.data.data
        }
    })
}