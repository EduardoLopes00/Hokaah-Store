import { render, screen } from '@testing-library/react';
import { SignUp } from './index';

describe('Signup page', () => {
  it('render correctly', () => {
    render(<SignUp />);

    expect(screen.getByText('Sign Up')).toBeInTheDocument();
  });
});
