import axios from 'axios';

export const holoApi = axios.create({
  baseURL: 'https://29bd-190-235-150-58.sa.ngrok.io/v1',
});
