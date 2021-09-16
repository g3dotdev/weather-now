
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen, waitFor } from '@testing-library/react';
import { CardItem } from '..';

const server = setupServer(
  rest.get('https://api.openweathermap.org/data/2.5/weather', (req, res, ctx) => {
    return res(ctx.json({
      "base": "stations",
      "main": {
        "temp": 15.64,
        "feels_like": 15.74,
        "temp_min": 15.08,
        "temp_max": 16.72,
        "pressure": 1025,
        "humidity": 95
      },
      "visibility": 9000,
      "dt": 1631760111,
      "timezone": -10800,
      "id": 3459712,
      "name": "Joinville",
      "cod": 200
    }))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('Card Item', () => {
  test('Renders based on city', async () => {
    render(<CardItem city="Joinville" />);

    const loader = screen.getByAltText('Loading indicator');
    expect(loader).toBeInTheDocument();

    await waitFor(() => screen.getByRole('heading'));

    const temperature = screen.getByRole('heading');
    const footer = screen.getByText(/Updated at 9:16:00 PM/i);

    expect(temperature).toHaveTextContent('15º');
    expect(footer).toBeInTheDocument();
  });

  test('Renders card error', async () => {
    server.use(
      rest.get('https://api.openweathermap.org/data/2.5/weather', (req, res, ctx) => {
        return res(ctx.status(500))
      }),
    )

    render(<CardItem city="Undefined city" />);

    const loader = screen.getByAltText('Loading indicator');
    expect(loader).toBeInTheDocument();

    await waitFor(() => screen.getByRole('heading'));

    const error = screen.getByRole('heading');

    expect(error).toHaveTextContent('Something went wrong');
  });
});
