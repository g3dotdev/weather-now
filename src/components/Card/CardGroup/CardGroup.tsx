import React from "react";

import { StyledCardGroup } from "./styles";

const CardGroup: React.FC = ({ children }) => {
  return (
    <StyledCardGroup>
      {children}
    </StyledCardGroup>
  );
};

export default CardGroup;
