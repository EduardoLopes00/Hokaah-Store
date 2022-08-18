import { render, screen } from '@testing-library/react';
import { Home } from 'src/pages/Home';

describe('Home page', () => {
  it('renders correctly', () => {
    render(<Home />);

    expect(screen.getByText('Welcome!')).toBeInTheDocument();
  });
});
