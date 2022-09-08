import { AxiosResponse } from 'axios';
import api from 'src/api';
import { UserLogged } from 'src/types/UserLogged';

export type SignInRequestVariables = {
  email: string;
  password: string;
};

export const signIn = (
  signInRequestVariables: SignInRequestVariables
): Promise<AxiosResponse<UserLogged>> => {
  return api.post('/login', signInRequestVariables);
};
