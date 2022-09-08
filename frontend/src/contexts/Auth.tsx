import { createContext, ReactNode, useState } from 'react';
import { AuthContextType } from 'src/types/AuthContext';
import { UserLogged } from 'src/types/UserLogged';
import { signIn, SignInRequestVariables } from 'src/services/authService';
import { useMutation } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const signInRequest = useMutation<AxiosResponse<UserLogged>, AxiosError, SignInRequestVariables>(
    signIn,
    {
      onSuccess: (response) => {
        setUserLogged(response.data);
      }
    }
  );

  const [userLogged, setUserLogged] = useState<UserLogged | null>(null);

  const authenticate = (email: string, password: string) => {
    signInRequest.mutate({ email, password });
  };

  return (
    <AuthContext.Provider value={{ userLogged, authenticate, signInRequest }}>
      {children}
    </AuthContext.Provider>
  );
};
