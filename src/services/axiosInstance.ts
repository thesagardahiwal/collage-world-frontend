"use server"

import axios from 'axios';

function axiosInstance (token : string) {
// Create an Axios instance with custom configuration
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Use environment variable for base URL
  timeout: 10000, // Optional: Set request timeout
  headers: {
    'Content-Type': 'application/json',
    // You can add other default headers here
  },
});

// Request interceptor to add authentication token (if needed)
axiosInstance.interceptors.request.use(
  config => {
     // or another method to get the token
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

// Response interceptor to handle errors globally
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    // Handle errors
    if (error.response && error.response.status === 401) {
      // Redirect to login or handle unauthorized errors
    }
    return Promise.reject(error);
  }
);

return axiosInstance;

}

export default axiosInstance;
