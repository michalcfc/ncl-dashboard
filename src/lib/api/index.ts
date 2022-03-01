import axios from 'axios';
import config from './config';

export default function callApi(endpoint, options = null, payload = null) {
  axios.get(`${config.API_URI}`, {
    headers: { 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify(payload),
    ...options,
  })
    .then((res) => res.data)
    .catch((error) => console.error(`Error: ${error}`));
}
