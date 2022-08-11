import { render, screen } from '@testing-library/react';
import { Login } from './index';

describe('Login page', () => {
  it('render correctly', () => {
    render(<Login />);

    expect(screen.getByText('Forget my password')).toBeInTheDocument();
  });
});
