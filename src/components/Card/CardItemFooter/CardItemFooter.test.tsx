import { render, screen } from '@testing-library/react';
import { CardItemFooter } from '..';

test('renders learn react link', () => {
  render(<CardItemFooter />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
