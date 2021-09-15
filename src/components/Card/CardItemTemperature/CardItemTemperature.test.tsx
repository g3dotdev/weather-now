import { render, screen } from '@testing-library/react';
import { CardItemTemperature } from '..';

test('renders learn react link', () => {
  render(<CardItemTemperature temperature={4} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
