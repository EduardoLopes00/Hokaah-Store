import api from 'src/api';
import { UserLogged } from 'src/types/UserLogged';

type loginData = {
  email: string;
  password: string;
};

export const signIn = (loginData: loginData): Promise<UserLogged> => {
  return api.post('/login', loginData);
};
