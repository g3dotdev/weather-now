import React, { useEffect, useState } from "react";
import { CardItemFooter, CardItemHeader, CardItemLoader, CardItemTemperature } from "..";
import { Weather } from "../../../interfaces/Weather";
import { api } from "../../../utils/api";

import { StyledCard } from "./styles";

type Props = {
  city: string
  isFeatured?: boolean
}

const CardItem: React.FC<Props> = ({ city, isFeatured }) => {
  const [weather, setWeather] = useState<Weather | null>(null);

  const fetchWeather = async (city: string) => {
    console.log(`fetchWeather ${city}`);
    setWeather(null);

    const res = await api.get<Weather>(`&q=${city}`);

    const data = await res.data;

    setWeather(data);
  }

  useEffect(() => {
    fetchWeather(city)

    const interval = setInterval(() => {
      setWeather(null);
      fetchWeather(city);
    }, 3 * 1000);

    return () => clearInterval(interval);
  }, [city]);

  if (!weather) {
    return (
      <StyledCard>
        <CardItemHeader city={city} />
        <CardItemLoader />
      </StyledCard>
    )
  }

  return (
    <StyledCard>
      <CardItemHeader city={city} />
      <CardItemTemperature temperature={weather.main.temp} />
      <CardItemFooter weather={weather} showExtraData={isFeatured} />
    </StyledCard>
  );
};

export default CardItem;
