import styled from "styled-components";

export const StyledCard = styled.div`
  background-color: var(--white);
  box-shadow: 0 2px 3px var(--box-shadow);
  border-radius: 4px;

  text-align: center;

  @media (max-width: 649px) {
    &:nth-child(1) {
      order: 2;
    }

    &:nth-child(2) {
      order: 1;
    }

    &:nth-child(3) {
      order: 3;
    }
  }
`;
