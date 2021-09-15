import { render, screen } from '@testing-library/react';
import { CardItem } from '..';

test('renders learn react link', () => {
  render(<CardItem city="Test" />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
