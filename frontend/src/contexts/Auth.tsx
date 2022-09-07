import { createContext, ReactNode, useState } from 'react';
import { AuthContextType } from 'src/types/AuthContext';
import { UserLogged } from 'src/types/UserLogged';
import { signIn } from 'src/services/authService';

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [userLogged, setUserLogged] = useState<UserLogged>({} as any);
  // const navigate = useNavigate();

  const authenticate = (email: string, password: string) => {
    signIn({ email, password })
      .then((response) => {
        setUserLogged(response.data);
        localStorage.setItem('token', response.data.token);
      })
      .catch((err) => alert(err));
  };

  return (
    <AuthContext.Provider value={{ userLogged, authenticate }}>{children}</AuthContext.Provider>
  );
};
