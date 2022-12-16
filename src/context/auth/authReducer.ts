import { IUser } from '@src/types';

export interface AuthState {
  status: 'checking' | 'authenticated' | 'not-authenticated';
  user: IUser | null;
}

type AuthActionType =
  | { type: 'login'; payload: { user: IUser } }
  | { type: 'logout' }
  | { type: 'update'; payload: { user: IUser } };

const authReducer = (state: AuthState, action: AuthActionType): AuthState => {
  switch (action.type) {
    case 'login':
      return {
        ...state,
        status: 'authenticated',
        user: action.payload.user,
      };
    case 'logout':
      return {
        ...state,
        status: 'not-authenticated',
        user: null,
      };
    case 'update':
      return {
        ...state,
        user: action.payload.user,
      };

    default:
      return state;
  }
};

export default authReducer;
