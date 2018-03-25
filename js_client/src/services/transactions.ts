import axios from 'axios';
const baseUrl = 'http://localhost:3000/transactions.json';

const getAll = () => {
  return axios.get(baseUrl);
};

export default { getAll };