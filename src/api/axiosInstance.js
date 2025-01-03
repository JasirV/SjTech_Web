import axios from "axios"
const baseURL = import.meta.env.VITE_BASE_URL;
const api = axios.create({
    baseURL:baseURL
});
api.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });


api.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    return Promise.reject(error);
  });

  export default api