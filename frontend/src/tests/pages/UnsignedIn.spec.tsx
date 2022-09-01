import { render, screen } from '@testing-library/react';
import { UnsignedIn } from 'src/pages/UnsignedIn';

describe('UnsignedIn page', () => {
  it('renders correctly', () => {
    render(<UnsignedIn page="signin" />);

    expect(screen.getByAltText('logo')).toBeInTheDocument();
  });
});
