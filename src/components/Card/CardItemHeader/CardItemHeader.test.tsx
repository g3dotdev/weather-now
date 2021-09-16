import { render, screen } from '@testing-library/react';
import { CardItemHeader } from '..';

describe('Card Header', () => {
  test('Render the correct city', () => {
    render(<CardItemHeader city="Joinville" />);
    const element = screen.getByText(/Joinville/i);
    expect(element).toBeInTheDocument();
  });
});