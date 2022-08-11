import './styles.scss';

export const Login = () => {
  return (
    <div className="input-area-content">
      <h1>Login</h1>

      <div className="fields-area">
        <label htmlFor="email">E-mail</label>
        <input name="email" type="text" />
        <label htmlFor="password">Password</label>
        <input name="password" type="password" />

        <button>Login</button>
        <h4>Forget my password</h4>
        <h4>Register</h4>
      </div>
    </div>
  );
};
