import { render, screen } from '@testing-library/react';
import { CardItemLoader } from '..';

test('renders learn react link', () => {
  render(<CardItemLoader />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
