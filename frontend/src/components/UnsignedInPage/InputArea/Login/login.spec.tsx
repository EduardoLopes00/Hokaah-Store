import { render, screen } from '@testing-library/react';
import { Login } from './index';

describe('Login page', () => {
  it('render correctly', () => {
    render(<Login />);

    const test = screen.getByText('Forget my password');

    expect(test).toBeInTheDocument();
  });
});
