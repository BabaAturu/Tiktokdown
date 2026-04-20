const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:5174', // Vite dev server
    methods: ['GET', 'POST'],
    credentials: true,
};

module.exports = cors(corsOptions);