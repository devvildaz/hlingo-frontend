import { useReducer, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { IUser, ILoginResponse } from '@src/types';
import { holoApi } from '@utils';
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
      if (!token) {
        dispatch({ type: 'logout' });
        return;
      }

      // TODO: make api call to get the user sending the token

      // dispatch({ type: 'login', payload: { user: JSON.parse(user) } });
    };

    getUserInfo();
  }, []);

  const login = (data: { email: string; password: string }) => {
    return new Promise<string>(async (resolve, reject) => {
      try {
        const res = await holoApi.post<ILoginResponse>('/login/email', data, {
          timeout: 3000,
        });

        await AsyncStorage.setItem(
          USER_TOKEN_KEY,
          JSON.stringify(res.data.token)
        );

        dispatch({ type: 'login', payload: { user: res.data.user } });

        resolve('Sesión iniciada');
      } catch (error) {
        reject(new Error('Algo salió mal'));
      }
    });
  };

  const register = (data: {
    name: string;
    email: string;
    password: string;
  }) => {
    return new Promise<string>(async (resolve, reject) => {
      try {
        await holoApi.post<IUser>('/register/email', data, {
          timeout: 3000,
        });

        resolve('Registro exitoso');
      } catch (error) {
        reject(new Error('Algo salió mal'));
      }
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
