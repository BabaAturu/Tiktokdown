const express = require('express');
const corsMiddleware = require('./config/cors');
const downloadRoutes = require('./routes/downloadRoutes');

const app = express();
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || '0.0.0.0';

// Middleware
app.use(express.json()); // JSON ዳታ ለመቀበል
app.use(corsMiddleware);  // CORS ለመፍቀድ

// Routes
app.use('/api', downloadRoutes);

// Test Route
app.get('/', (req, res) => {
    res.send('TikTok Downloader API is running...');
});

app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST.includes('0.0.0.0') ? '0.0.0.0 (all interfaces)' : HOST}:${PORT}`);
});
