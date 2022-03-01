export default {
  API_URI: process.env.NODE_ENV === 'production'
    ? 'http://localhost:8000/v1'
    : 'http://localhost:8000/v1',
};
