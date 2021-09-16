import { rest } from "msw";
import { setupServer } from "msw/node";
import { renderHook } from "@testing-library/react-hooks";

import { useWeather } from "./useWeather";

const mock = {
  base: "stations",
  main: {
    temp: 15.64,
    feels_like: 15.74,
    temp_min: 15.08,
    temp_max: 16.72,
    pressure: 1025,
    humidity: 95,
  },
  visibility: 9000,
  dt: 1631767504,
  timezone: -10800,
  id: 3459712,
  name: "Joinville",
  cod: 200,
};

const server = setupServer(
  rest.get(
    "https://api.openweathermap.org/data/2.5/weather",
    (req, res, ctx) => {
      return res(ctx.json(mock));
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("useWeather", () => {
  test("Get city from hook", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useWeather("Joinville")
    );

    expect(result.current.loading).toBeTruthy();

    await waitForNextUpdate();

    expect(result.current.data).toEqual(mock);
  });
});
