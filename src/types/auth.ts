export type IUser = {
  id: string;
  name: string;
  email: string;
  score: number;
};

export type ILoginResponse = {
  user: IUser;
  token: string;
};
