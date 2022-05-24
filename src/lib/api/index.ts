import axios from 'axios';

export const fetchAPI = async (endpoint) => {
  const { data } = await axios.get(`https://panel.noclegowo.pl/api/${endpoint}`);
  return data;
};
