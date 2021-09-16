export interface IWeather {
  base: string;
  main: IMain;
  visibility: number;
  dt: number;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface IMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}
