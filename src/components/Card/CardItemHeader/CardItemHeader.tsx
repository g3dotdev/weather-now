import React from "react";

import { StyledCardItemHeader } from "./styles";

type Props = {
  city: string
}

const CardItemHeader: React.FC<Props> = ({ city }) => {
  return (
    <StyledCardItemHeader>{city}</StyledCardItemHeader>
  );
};

export default CardItemHeader;
