import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const holoApi = axios.create({
  baseURL: 'https://351e-190-235-150-58.sa.ngrok.io/v1',
});

holoApi.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem('@user-token');
  if (token === null) return config;

  return {
    ...config,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
});

export const holoPredictionApi = axios.create({
  baseURL: 'http://54.232.69.40:8000',
  headers: {
    'Content-Type': 'multipart/form-data',
    'Video-Format': 'mp4',
  },
});
