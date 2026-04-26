const cors = require('cors');

// Whitelist common origins; add your deployed frontend origin via env var
const allowedOrigins = [process.env.FRONTEND_ORIGIN || 'http://localhost:5174', 'https://tiktok-saver-free.vercel.app'];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow non-browser requests (like curl, server-to-server) when origin is undefined
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) !== -1) {
      // Reflect the request origin when it's allowed (required when credentials: true)
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true,
};

module.exports = cors(corsOptions);