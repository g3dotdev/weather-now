import styled from "styled-components";

export const StyledCardGroup = styled.div`
  width: 100%;
  max-width: calc(var(--grid-breakpoint) + var(--grid-gap));

  padding: var(--grid-gap);

  display: grid;
  grid-gap: var(--grid-gap);
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  align-items: center;
`;
