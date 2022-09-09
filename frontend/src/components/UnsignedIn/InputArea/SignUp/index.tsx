import { TextButton } from 'src/components/General/TextButton';
import { InputComponent } from 'src/components/General/InputComponent';
import './styles.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [emailConfirmation, setEmailConfirmation] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const navigate = useNavigate();

  return (
    <div className="input-area-content">
      <h1 className="usignedInPage-title">Sign Up</h1>

      <div className="fields-area">
        <InputComponent
          value={fullName}
          onChange={(event) => {
            setFullName(event.target.value);
          }}
          name="fullname"
          type="text"
          labelText="Full name"
        />
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
          value={emailConfirmation}
          onChange={(event) => {
            setEmailConfirmation(event.target.value);
          }}
          name="emailConfirmation"
          type="text"
          labelText="Confirm e-mail"
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

        <InputComponent
          value={passwordConfirmation}
          onChange={(event) => {
            setPasswordConfirmation(event.target.value);
          }}
          name="passwordconfirmation"
          type="password"
          labelText="Confirm password"
        />

        <TextButton text="Sign Up" />

        <h4 className="already-signed-up-text">
          Already signed up?{' '}
          <span
            className="link-text"
            onClick={() => {
              navigate('/signin');
            }}>
            Sign in now!
          </span>{' '}
        </h4>
      </div>
    </div>
  );
};
