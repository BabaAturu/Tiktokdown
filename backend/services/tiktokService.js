const axios = require('axios');

const fetchTikTokData = async (videoUrl) => {
    try {
        // ይህ API ምንም Key አይጠይቅም
        const response = await axios.get('https://www.tikwm.com/api/', {
            params: { url: videoUrl }
        });

        if (response.data && response.data.data) {
            return response.data.data; 
        } else {
            throw new Error('ቪዲዮው አልተገኘም');
        }
    } catch (error) {
        throw new Error('የኔትወርክ ስህተት፦ ' + error.message);
    }
};

module.exports = { fetchTikTokData };