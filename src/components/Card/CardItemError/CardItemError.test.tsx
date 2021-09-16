import { fireEvent, render, screen } from '@testing-library/react';
import { CardItemError } from '..';

describe('Card Error', () => {
  test('Renders text correctly', () => {
    render(<CardItemError refetch={() => { }} />);
    const element = screen.getByText(/Something went wrong/i);
    expect(element).toBeInTheDocument();
  });

  test('Renders button correctly', () => {
    render(<CardItemError refetch={() => { }} />);
    const element = screen.getByRole('button');
    expect(element).toBeInTheDocument();
  });

  test('Dispacth refetch function', () => {
    const refetch = jest.fn();
    render(<CardItemError refetch={refetch} />);

    fireEvent.click(screen.getByText(/Try Again/i));

    expect(refetch).toBeCalled();
  });
});
