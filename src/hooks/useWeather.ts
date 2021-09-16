import { setup } from "axios-cache-adapter";
import useAxios, { configure } from "axios-hooks";
import CacheAdapter from "../utils/CacheAdapter";

const cacheAdapter = new CacheAdapter();

const axios = setup({
  baseURL: `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric&`,
  cache: {
    maxAge: 10 * 60 * 1000,
    store: cacheAdapter,
  },
});

configure({ axios });

export const useWeather = (city: string) => {
  const [{ data, loading, error }, refetch] = useAxios(`&q=${city}`);

  return { data, loading, error, refetch };
};
