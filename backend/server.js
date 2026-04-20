const express = require('express');
const corsMiddleware = require('./config/cors');
const downloadRoutes = require('./routes/downloadRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // JSON ዳታ ለመቀበል
app.use(corsMiddleware);  // CORS ለመፍቀድ

// Routes
app.use('/api', downloadRoutes);

// Test Route
app.get('/', (req, res) => {
    res.send('TikTok Downloader API is running...');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
