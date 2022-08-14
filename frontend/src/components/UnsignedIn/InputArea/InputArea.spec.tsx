import { render, screen } from '@testing-library/react';
import { InputArea } from '.';

describe('InputArea at UnsignedIn page', () => {
  it('Renders signIn correctly', () => {
    render(<InputArea page="signin" />);

    expect(screen.getByText('Sign In')).toBeInTheDocument();
  });

  it('Renders signUp correctly', () => {
    render(<InputArea page="signup" />);
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
  });

  it('Renders forgetPassword correctly', () => {
    render(<InputArea page="forgotpassword" />);
    expect(screen.getByText('Recover password')).toBeInTheDocument();
  });
});
