import './styles.scss';
import { TextButton } from 'src/components/General/TextButton';
import { InputComponent } from 'src/components/General/InputComponent';
import { useAuth } from 'src/hooks/useAuth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { authenticate, signInRequest } = useAuth();
  const navigate = useNavigate();

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
          type="email"
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

        {(signInRequest.isLoading && <h1>Loading...</h1>) || (
          <TextButton onClick={() => authenticate(email, password)} text="SignIn" />
        )}

        <h4
          className="link-text"
          onClick={() => {
            navigate('/forgotPassword');
          }}>
          Forget my password
        </h4>
        <h4
          className="link-text"
          onClick={() => {
            navigate('/signup');
          }}>
          Register
        </h4>
      </div>
    </div>
  );
};
