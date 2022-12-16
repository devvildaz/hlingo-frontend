import { IUser } from '@src/types';
import { createContext } from 'react';

interface ContextProps {
  status: 'checking' | 'authenticated' | 'not-authenticated';
  user: IUser | null;

  login: (data: { email: string; password: string }) => Promise<string>;
  register: (data: {
    name: string;
    email: string;
    password: string;
  }) => Promise<string>;
  logout: () => Promise<void>;
  updateProfile: (data: IUser) => Promise<string>;
}

const AuthContext = createContext({} as ContextProps);

export default AuthContext;
