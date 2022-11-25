import AsyncStorage from '@react-native-async-storage/async-storage';
import { IUser, ILoginResponse } from '@src/types';
import { holoApi } from '@utils';
import { useReducer, useEffect } from 'react';

import AuthContext from './AuthContext';
import authReducer, { AuthState } from './authReducer';

const USER_TOKEN_KEY = '@user-token';

const authInitialState: AuthState = {
  status: 'checking',
  user: null,
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState);

  useEffect(() => {
    const getUserInfo = async () => {
      const token = await AsyncStorage.getItem(USER_TOKEN_KEY);

      if (token === null) {
        dispatch({ type: 'logout' });
        return;
      }

      try {
        const res = await holoApi.get<IUser>('/user/current');
        dispatch({ type: 'login', payload: { user: res.data } });
      } catch (error) {
        console.log(error);
        dispatch({ type: 'logout' });
        await AsyncStorage.removeItem(USER_TOKEN_KEY);
      }
    };

    void getUserInfo();
  }, []);

  const login = async (data: { email: string; password: string }) => {
    return await new Promise<string>((resolve, reject) => {
      holoApi
        .post<ILoginResponse>('/login/email', data, {
          timeout: 3000,
        })
        .then(async res => {
          await AsyncStorage.setItem(USER_TOKEN_KEY, res.data.token);
          dispatch({ type: 'login', payload: { user: res.data.user } });
          resolve('Sesión iniciada');
        })
        .catch(() => {
          reject(new Error('Algo salió mal'));
        });
    });
  };

  const register = async (data: {
    name: string;
    email: string;
    password: string;
  }) => {
    return await new Promise<string>((resolve, reject) => {
      holoApi
        .post<ILoginResponse>('/register/email', data, {
          timeout: 3000,
        })
        .then(async res => {
          resolve('Registro exitoso');
        })
        .catch(() => {
          reject(new Error('Algo salió mal'));
        });
    });
  };

  const logout = async () => {
    await AsyncStorage.removeItem(USER_TOKEN_KEY);
    dispatch({ type: 'logout' });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
