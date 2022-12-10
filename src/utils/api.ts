import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const holoApi = axios.create({
  baseURL: 'https://fdee-190-235-150-58.sa.ngrok.io/v1',
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
