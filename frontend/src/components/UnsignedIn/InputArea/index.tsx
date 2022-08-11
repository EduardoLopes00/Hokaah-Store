import { ForgotPassword } from './ForgotPassword';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';
import { Pages } from 'src/pages/UnsignedIn';

import './styles.scss';

type UnsignedInComponent = {
  [key: string]: React.ReactNode;
};

interface InputAreaProps {
  page?: Pages;
}

export const InputArea = ({ page }: InputAreaProps) => {
  const unsignedInComponent: UnsignedInComponent = {
    signin: <SignIn />,
    signup: <SignUp />,
    forgotpassword: <ForgotPassword />
  };

  if (!page) {
    return null;
  }

  return <div className="input-area-content">{unsignedInComponent[page]}</div>;
};
