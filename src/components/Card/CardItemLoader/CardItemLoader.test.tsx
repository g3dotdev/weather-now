import { render, screen } from '@testing-library/react';
import { CardItemLoader } from '..';

import loader from '../../../assets/images/loader.svg'

describe('Loader', () => {
  test('Has loader icon', () => {
    render(<CardItemLoader />);
    const loaderIcon = screen.getByRole('img');
    expect(loaderIcon).toBeInTheDocument();
  });

  test('Has correct image', () => {
    render(<CardItemLoader />);
    const loaderIcon = screen.getByRole('img');
    expect(loaderIcon).toHaveAttribute('src', loader);
  });
});