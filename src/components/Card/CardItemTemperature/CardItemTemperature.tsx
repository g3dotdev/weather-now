import React from "react";

import { StyledCardItemTemperature, TemperatureColors } from "./styles";

const getTemperatureColor = (temperature: number) => {
  if (temperature <= 5) {
    return TemperatureColors.LOW;
  }

  if (temperature > 25) {
    return TemperatureColors.HIGH;
  }

  return TemperatureColors.MID;
}

type Props = {
  temperature: number
}

const CardItemTemperature: React.FC<Props> = ({ temperature }) => {
  return (
    <StyledCardItemTemperature color={getTemperatureColor(temperature)}>
      {Math.floor(temperature)}&ordm;
    </StyledCardItemTemperature>
  );
};

export default CardItemTemperature;
