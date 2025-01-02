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

