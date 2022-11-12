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
      if (!user) return;

      dispatch({ type: 'login', payload: { user: JSON.parse(user) } });
    };

    getUserInfo();
  }, []);

  const login = async (data: { email: string; password: string }) => {
    try {
      const res = await holoApi.post<IUser>('/login/email', {
        email: data.email,
        password: data.password,
      });

      await AsyncStorage.setItem('@user-info', JSON.stringify(res.data));

      dispatch({ type: 'login', payload: { user: res.data } });
    } catch (error) {
      toast.show({
        title: 'Algo salió mal',
        placement: 'bottom',
        tintColor: 'red.500',
      });
    }
  };

  const register = async (data: {
    name: string;
    email: string;
    password: string;
  }) => {};

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
