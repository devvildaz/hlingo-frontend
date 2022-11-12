import { IUser } from '@src/types';

export type AuthState = {
  status: 'checking' | 'authenticated' | 'not-authenticated';
  user: IUser | null;
};

type AuthActionType =
  | { type: 'login'; payload: { user: IUser } }
  | { type: 'logout' };

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

    default:
      return state;
  }
};

export default authReducer;
