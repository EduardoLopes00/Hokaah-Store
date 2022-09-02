import { UserLogged } from './UserLogged';

export type AuthContextType = {
  userLogged: UserLogged | null;
  authenticate: (email: string, password: string) => void;
};
