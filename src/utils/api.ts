import { setup } from "axios-cache-adapter";

export const api = setup({
  baseURL: `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric&`,
  cache: {
    maxAge: 10 * 60 * 1000,
  },
});
