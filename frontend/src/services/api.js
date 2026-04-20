// frontend/src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // backend address (matches backend server)

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