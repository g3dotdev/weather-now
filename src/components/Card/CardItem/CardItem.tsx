import React, { useEffect } from "react";
import { CardItemError, CardItemFooter, CardItemHeader, CardItemLoader, CardItemTemperature } from "..";
import { useWeather } from "../../../hooks/weather";
import { StyledCard } from "./styles";


type Props = {
  city: string
  isFeatured?: boolean
}

const CardItem: React.FC<Props> = ({ city, isFeatured }) => {
  const { data, loading, error, refetch } = useWeather(city);

  useEffect(() => {
    if (!error) {
      const interval = setInterval(() => {
        refetch();
      }, 3 * 1000);

      return () => clearInterval(interval)
    }
  }, [refetch, error]);

  if (loading) {
    return (
      <StyledCard>
        <CardItemHeader city={city} />
        <CardItemLoader />
      </StyledCard>
    )
  }

  if (error || !data) {
    return (
      <StyledCard>
        <CardItemHeader city={city} />
        <CardItemError refetch={refetch} />
      </StyledCard>
    )
  }

  return (
    <StyledCard>
      <CardItemHeader city={city} />
      <CardItemTemperature temperature={data.main.temp} />
      <CardItemFooter weather={data} showExtraData={isFeatured} />
    </StyledCard>
  );
};

export default CardItem;
