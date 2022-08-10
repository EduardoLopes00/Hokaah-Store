import { render, screen } from '@testing-library/react';
import { Login } from 'src/pages/UnsignedInPage';

it('render correctly', () => {
  render(<Login />);

  const test = screen.getByText('Forget my password');

  expect(test).toBeInTheDocument();
});
