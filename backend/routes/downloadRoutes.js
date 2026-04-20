// backend/routes/downloadRoutes.js
const express = require('express');
const router = express.Router();
const { getDownloadLink } = require('../controllers/downloadController');

router.post('/download', getDownloadLink);

module.exports = router;