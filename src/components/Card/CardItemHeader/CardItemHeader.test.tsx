import { render, screen } from '@testing-library/react';
import { CardItemHeader } from '..';

test('renders learn react link', () => {
  render(<CardItemHeader city="Test" />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
