import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  test('Has logo inside header', () => {
    render(<Header />);
    const logoElement = screen.getByRole('img');

    expect(logoElement).toBeInTheDocument();
  });

  test('Has alt text on logo', () => {
    render(<Header />);
    const logoElement = screen.getByRole('img');

    expect(logoElement).toHaveAttribute('alt');
  });
});