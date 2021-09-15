import React from "react";
import { Weather } from "../../../interfaces/Weather";

import { StyledCardItemFooter, ExtraContent } from "./styles";

type Props = {
  weather: Weather
  showExtraData?: boolean
}

const CardItemFooter: React.FC<Props> = ({ children, weather, showExtraData }) => {
  return (
    <StyledCardItemFooter>
      {showExtraData && <ExtraContent>
        <div>
          <h3>Humidity</h3>
          <span>{weather.main.humidity}</span><small>%</small>
        </div>
        <div>
          <h3>Pressure</h3>
          <span>{weather.main.pressure}</span><small>hPa</small>
        </div>
      </ExtraContent>}
      Updated at 00:00:00
    </StyledCardItemFooter>
  );
};

export default CardItemFooter;
