export default {
  API_URI: process.env.NODE_ENV === 'production'
    ? 'https://panel.noclegowo.pl/api'
    : 'https://panel.noclegowo.pl/api',
};
