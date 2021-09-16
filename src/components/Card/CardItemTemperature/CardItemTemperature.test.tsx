import { render, screen } from '@testing-library/react';
import { CardItemTemperature } from '..';

describe('Temperature', () => {
  test('Renders temperature heading', () => {
    render(<CardItemTemperature temperature={4} />);
    const element = screen.getByRole('heading');
    expect(element).toBeInTheDocument();
  });

  test('Has correct temperature', () => {
    render(<CardItemTemperature temperature={4} />);
    const element = screen.getByRole('heading');
    expect(element).toHaveTextContent("4º");
  });

  test('Has correct blue color', () => {
    render(<CardItemTemperature temperature={5} />);
    const element = screen.getByRole('heading');
    expect(element).toHaveAttribute('color', 'var(--text-blue)');
  });

  test('Has correct orange color at 6 degrees', () => {
    render(<CardItemTemperature temperature={6} />);
    const element = screen.getByRole('heading');
    expect(element).toHaveAttribute('color', 'var(--text-orange)');
  });

  test('Has correct orange color as 25 degrees', () => {
    render(<CardItemTemperature temperature={25} />);
    const element = screen.getByRole('heading');
    expect(element).toHaveAttribute('color', 'var(--text-orange)');
  });

  test('Has correct red color', () => {
    render(<CardItemTemperature temperature={26} />);
    const element = screen.getByRole('heading');
    expect(element).toHaveAttribute('color', 'var(--text-red)');
  });
});