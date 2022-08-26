import api from 'src/api';

type loginData = {
  email: string;
  password: string;
};

export const login = (loginData: loginData) => {
  return api.post('/login', { loginData });
};
