// backend/controllers/downloadController.js
const tiktokService = require('../services/tiktokService');

const getDownloadLink = async (req, res) => {
    const { url } = req.body;

    if (!url) {
        return res.status(400).json({ error: 'እባክዎ የቪዲዮ Link ያስገቡ' });
    }

    try {
        const videoData = await tiktokService.fetchTikTokData(url);
        res.status(200).json({ success: true, data: videoData });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { getDownloadLink };