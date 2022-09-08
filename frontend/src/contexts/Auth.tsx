import { createContext, ReactNode, useState } from 'react';
import { AuthContextType } from 'src/types/AuthContext';
import { UserLogged } from 'src/types/UserLogged';
import { signIn, SignInRequestVariables } from 'src/services/authService';
import { useMutation } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [userLogged, setUserLogged] = useState<UserLogged | null>(null);

  const navigate = useNavigate();

  const signInRequest = useMutation<AxiosResponse<UserLogged>, AxiosError, SignInRequestVariables>(
    signIn,
    {
      onSuccess: ({ data }) => {
        setUserLogged(data);
        localStorage.setItem('userToken', JSON.stringify(data.token));
        navigate('/home');
      }
    }
  );

  const authenticate = (email: string, password: string) => {
    signInRequest.mutate({ email, password });
  };

  return (
    <AuthContext.Provider value={{ userLogged, authenticate, signInRequest }}>
      {children}
    </AuthContext.Provider>
  );
};
