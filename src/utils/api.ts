import axios from 'axios';

export const holoApi = axios.create({
  baseURL: 'http://34.123.245.66:8000/v1',
});
