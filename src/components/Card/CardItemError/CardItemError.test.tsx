import { render, screen } from '@testing-library/react';
import { CardItemError } from '..';

test('renders learn react link', () => {
  render(<CardItemError />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
