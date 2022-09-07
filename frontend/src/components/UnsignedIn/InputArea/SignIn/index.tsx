import { TextButton } from 'src/components/General/TextButton';
import { InputComponent } from 'src/components/General/InputComponent';
import { useAuth } from 'src/hooks/useAuth';
import './styles.scss';
import { useState } from 'react';

export const SignIn = () => {
  const login = (email: string, password: string) => {
    authenticate(email, password);
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { authenticate } = useAuth();

  return (
    <div className="input-area-content">
      <h1 className="usignedInPage-title">Sign In</h1>

      <div className="fields-area">
        <InputComponent
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          name="email"
          type="text"
          labelText="E-mail"
        />
        <InputComponent
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          name="password"
          type="password"
          labelText="Password"
        />

        <TextButton onClick={() => login(email, password)} text="SignIn" />

        <h4 className="aux-text">Forget my password</h4>
        <h4 className="aux-text">Register</h4>
      </div>
    </div>
  );
};
