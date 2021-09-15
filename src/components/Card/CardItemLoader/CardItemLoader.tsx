import React from "react";

import { StyledCardItemLoader } from "./styles";

import loader from '../../../assets/images/loader.svg'

const CardItemLoader: React.FC = () => {
  return (
    <StyledCardItemLoader>
      <img src={loader} alt="Loading indicator" />
    </StyledCardItemLoader>
  );
};

export default CardItemLoader;
