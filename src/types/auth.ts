export interface IUser {
  id: string;
  name: string;
  email: string;
  score: number;
}

export interface ILoginResponse {
  user: IUser;
  token: string;
}
