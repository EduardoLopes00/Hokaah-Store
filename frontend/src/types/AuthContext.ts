import { AxiosResponse, AxiosError } from 'axios';
import { UseMutationResult } from 'react-query';
import { SignInRequestVariables } from 'src/services/authService';
import { UserLogged } from './UserLogged';

export type AuthContextType = {
  userLogged: UserLogged | null;
  authenticate: (email: string, password: string) => void;
  signInRequest: UseMutationResult<
    AxiosResponse<UserLogged, any>,
    AxiosError<unknown, any>,
    SignInRequestVariables,
    unknown
  >;
};
