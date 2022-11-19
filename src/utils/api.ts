import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const holoApi = axios.create({
  baseURL: 'http://34.123.245.66:8000/v1',
});

holoApi.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem('@user-token');
  if (!token) return config;

  return {
    ...config,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
});
