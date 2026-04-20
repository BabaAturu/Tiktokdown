const axios = require('axios');

exports.getJson = async (url, opts = {}) => {
  const res = await axios.get(url, opts);
  return res.data;
};

exports.getText = async (url, opts = {}) => {
  const res = await axios.get(url, { responseType: 'text', ...opts });
  return res.data;
};
