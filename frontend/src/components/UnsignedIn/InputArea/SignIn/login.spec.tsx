import { render, screen } from '@testing-library/react';
import { SignIn } from './index';

describe('Login page', () => {
  it('render correctly', () => {
    render(<SignIn />);

    expect(screen.getByText('Sign In')).toBeInTheDocument();
  });
});
