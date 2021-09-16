import { render, screen } from '@testing-library/react';
import Content from './Content';

describe('Content', () => {
  test('Render main div', () => {
    render(<Content>Test</Content>);
    const element = screen.getByRole('main');
    expect(element).toBeInTheDocument();
  });

  test('Renders child correctly', () => {
    render(<Content>Weather Now</Content>);
    const element = screen.getByRole('main');
    expect(element).toHaveTextContent('Weather Now');
  });
});