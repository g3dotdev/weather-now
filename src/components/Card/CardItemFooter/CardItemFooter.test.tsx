import { render, screen } from '@testing-library/react';
import { CardItemFooter } from '..';

const mock = {
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
  "dt": 1631767504,
  "timezone": -10800,
  "id": 3459712,
  "name": "Joinville",
  "cod": 200
}

describe('Card Footer', () => {
  test('Renders correct time', () => {
    render(<CardItemFooter weather={mock} />);
    const element = screen.getByText(/Updated at 1:45:04 AM/i);
    expect(element).toBeInTheDocument();
  });

  test('Renders with extra content: Humidity', () => {
    render(<CardItemFooter weather={mock} showExtraData={true} />);
    const element = screen.getByText(/Humidity/i);
    expect(element).toBeInTheDocument();
  });

  test('Renders with extra content: Pressure', () => {
    render(<CardItemFooter weather={mock} showExtraData={true} />);
    const element = screen.getByText(/Pressure/i);
    expect(element).toBeInTheDocument();
  });

  test('Renders correct humidity', () => {
    render(<CardItemFooter weather={mock} showExtraData={true} />);
    const element = screen.getByTitle(/95%/i);
    expect(element).toBeInTheDocument();
  });

  test('Renders correct pressure', () => {
    render(<CardItemFooter weather={mock} showExtraData={true} />);
    const element = screen.getByTitle(/1025hPa/i);
    expect(element).toBeInTheDocument();
  });
});