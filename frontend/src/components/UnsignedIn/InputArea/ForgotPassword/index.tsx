import './styles.scss';
import { TextButton } from 'src/components/General/TextButton';
import { InputComponent } from 'src/components/General/InputComponent';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const ForgotPassword = () => {
  const [recoverEmail, setRecoverEmail] = useState('');

  const navigate = useNavigate();

  return (
    <div className="input-area-content">
      <h1 className="usignedInPage-title">Sign In</h1>

      <p className="descriptive-text">
        Type your e-mail below and a code will be sent to recover your password
      </p>

      <div className="fields-area">
        <InputComponent
          value={recoverEmail}
          onChange={(event) => {
            setRecoverEmail(event.target.value);
          }}
          name="email"
          type="email"
          labelText="E-mail"
        />

        <TextButton text="Send" />

        <p className="remeber-password-text">
          Remember de password?{' '}
          <span
            className="link-text"
            onClick={() => {
              navigate('/signin');
            }}>
            {' '}
            Sign in Now!
          </span>
        </p>
      </div>
    </div>
  );
};
