import { render, screen } from '@testing-library/react';
import { CardGroup } from '..';

describe('CardGroup', () => {
  test('Render main div', () => {
    render(<CardGroup>Weather Now</CardGroup>);
    const element = screen.getByText(/Weather Now/i);
    expect(element).toBeInTheDocument();
  });
});