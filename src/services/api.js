import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
});

// Global response interceptor (professional pattern)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.message || "Something went wrong with API";

    console.error("API Error:", message);
    return Promise.reject(error);
  },
);

export default api;
