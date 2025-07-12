import axios from "axios";


const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || "").trim();

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL.trim(),
  withCredentials: true,
  timeout: 45000          // 45 s gives Render time to wake up
});