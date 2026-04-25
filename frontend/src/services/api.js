// frontend/src/services/api.js
import axios from 'axios';

// Prefer explicit VITE_API_URL, otherwise pick the deployed backend for the known frontend host,
// fallback to localhost for local development.
const envApi = import.meta.env.VITE_API_URL;
const host = typeof window !== 'undefined' ? window.location.hostname : '';
const deployedBackendForVercel = 'https://tiktokdown-bqrz.onrender.com/api';
const API_URL = envApi || (host === 'tiktok-saver-free.vercel.app' ? deployedBackendForVercel : 'http://localhost:5000/api');

export const fetchVideoDetails = async (videoUrl) => {
     try {
      const response = await axios.post(`${API_URL}/download`, {
     url: videoUrl
       });
       return response.data;
     } catch (error) {
     console.error("API Error:", error);
     throw error.response?.data?.message || "ቪዲዮውን ማግኘት አልተቻለም";
    }
};

// Default export kept for backward compatibility (e.g. `import api from './services/api'`)
export default {
   fetchVideoDetails,
   post: (path, data) => axios.post(`${API_URL}${path}`, data),
};