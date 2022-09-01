import { useContext } from 'react';
import { AuthContext } from 'src/contexts/Auth';
import { AuthContextType } from 'src/types/AuthContext';

export const useAuth = () => {
  const authContext = useContext(AuthContext);

  return authContext;
};
