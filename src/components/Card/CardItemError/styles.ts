import styled from "styled-components";

export const StyledCardItemError = styled.header`
  border-bottom: 1px solid var(--divider);
  padding: 2rem;

  h3 {
    font-size: 1rem;
    font-weight: 500;

    color: var(--text-red);

    margin-bottom: 1rem;
  }

  button {
    cursor: pointer;

    background-color: var(--white);

    border: 2px solid var(--text-color);
    border-radius: 20px;

    padding: 0.625rem 1rem;

    &:hover {
      background-color: var(--text-color);
      color: var(--white);
    }
  }
`;
