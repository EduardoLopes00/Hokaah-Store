import { createContext, ReactNode, useState } from 'react';
import { UserLogged } from 'src/types/UserLogged';

type AuthContextType = {
  userLogged: UserLogged | null;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [userLogged, setUserLogged] = useState<UserLogged>({} as any);

  return <AuthContext.Provider value={{ userLogged }}>{children}</AuthContext.Provider>;
};
