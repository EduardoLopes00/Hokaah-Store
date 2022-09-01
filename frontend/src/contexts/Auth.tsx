import { createContext, ReactNode, useState } from 'react';
import { AuthContextType } from 'src/types/AuthContext';
import { UserLogged } from 'src/types/UserLogged';

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [userLogged, setUserLogged] = useState<UserLogged>({} as any);

  return <AuthContext.Provider value={{ userLogged }}>{children}</AuthContext.Provider>;
};
