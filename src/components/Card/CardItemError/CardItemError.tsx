import React from "react";

import { StyledCardItemError } from "./styles";

type Props = {
  refetch: Function
}

const CardItemError: React.FC<Props> = ({ refetch }) => {
  return (
    <StyledCardItemError>
      <h3>Something went wrong</h3>
      <button type="button" onClick={() => refetch()}>Try again</button>
    </StyledCardItemError>
  );
};

export default CardItemError;
