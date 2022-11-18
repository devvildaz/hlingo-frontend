import { IUser } from '@src/types';
import { createContext } from 'react';

type ContextProps = {
  status: 'checking' | 'authenticated' | 'not-authenticated';
  user: IUser | null;

  login: (data: { email: string; password: string }) => Promise<string>;
  register: (data: { name: string; email: string; password: string }) => void;
  logout: () => void;
};

const AuthContext = createContext({} as ContextProps);

export default AuthContext;
