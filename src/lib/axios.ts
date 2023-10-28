import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: `https://hmrs-management.onrender.com/api/v1`,
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
