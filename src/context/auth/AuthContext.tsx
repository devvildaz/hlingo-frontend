import { IUser } from '@src/types';
import { createContext } from 'react';

type ContextProps = {
  status: 'checking' | 'authenticated' | 'not-authenticated';
  user: IUser | null;
};

const AuthContext = createContext({} as ContextProps);

export default AuthContext;
