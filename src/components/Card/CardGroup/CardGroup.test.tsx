import { render, screen } from '@testing-library/react';
import { CardGroup } from '..';

test('renders learn react link', () => {
  render(<CardGroup />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
