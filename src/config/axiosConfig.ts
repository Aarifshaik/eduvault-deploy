// axiosConfig.ts
import axios from "axios";

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  // Handle Axios request errors
  return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
  // Handle Axios response
  return response;
}, (error) => {
  // Handle Axios response errors
  return Promise.reject(error);
});

export default axios;