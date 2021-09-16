import React from "react";
import { IWeather } from "../../../interfaces/IWeather";
import { formatUnixTime } from "../../../utils/Formatters";

import { StyledCardItemFooter, ExtraContent } from "./styles";

type Props = {
  weather: IWeather
  showExtraData?: boolean
}

const CardItemFooter: React.FC<Props> = ({ children, weather, showExtraData }) => {
  return (
    <StyledCardItemFooter>
      {showExtraData && <ExtraContent>
        <div title={`${weather.main.humidity}%`}>
          <h3>Humidity</h3>
          <span>{weather.main.humidity}</span><small>%</small>
        </div>
        <div title={`${weather.main.pressure}hPa`}>
          <h3>Pressure</h3>
          <span>{weather.main.pressure}</span><small>hPa</small>
        </div>
      </ExtraContent>}
      Updated at {formatUnixTime(weather.dt)}
    </StyledCardItemFooter>
  );
};

export default CardItemFooter;
