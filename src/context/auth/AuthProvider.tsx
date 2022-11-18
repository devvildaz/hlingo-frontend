import { useReducer } from 'react';
import { useToast } from 'native-base';
import { IUser } from '@src/types';
import { holoApi } from '@utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AuthContext from './AuthContext';
import authReducer, { AuthState } from './authReducer';
import { useEffect } from 'react';

const authInitialState: AuthState = {
  status: 'checking',
  user: null,
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState);
  const toast = useToast();

  useEffect(() => {
    const getUserInfo = async () => {
      const user = await AsyncStorage.getItem('@user-info');
      if (!user) {
        dispatch({ type: 'logout' });
        return;
      }

      dispatch({ type: 'login', payload: { user: JSON.parse(user) } });
    };

    getUserInfo();
  }, []);

  const login = (data: { email: string; password: string }) => {
    return new Promise<string>(async (resolve, reject) => {
      try {
        const res = await holoApi.post<IUser>('/login/email', data, {
          timeout: 3000,
        });

        await AsyncStorage.setItem('@user-info', JSON.stringify(res.data));

        dispatch({ type: 'login', payload: { user: res.data } });

        resolve('Sesión iniciada');
      } catch (error) {
        reject(new Error('Algo salió mal'));
      }
    });
  };

  const register = async (data: {
    name: string;
    email: string;
    password: string;
  }) => {
    try {
      const res = await holoApi.post<IUser>('/register/email', data);

      await AsyncStorage.setItem('@user-info', JSON.stringify(res.data));

      dispatch({ type: 'login', payload: { user: res.data } });
    } catch (error) {
      toast.show({
        title: 'Algo salió mal',
        placement: 'bottom',
        bgColor: 'red.500',
        color: 'white',
      });
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem('@user-info');
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
