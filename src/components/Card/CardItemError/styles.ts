import styled from "styled-components";

export const StyledCardItemError = styled.header`
  border-bottom: 1px solid var(--divider);
  padding: 2rem;

  h3 {
    color: var(--text-red);
    margin-bottom: 10px;
  }

  button {
    cursor: pointer;

    background-color: var(--white);

    border: 2px solid var(--text-color);
    border-radius: 20px;

    padding: 10px 15px;

    &:hover {
      background-color: var(--text-color);
      color: var(--white);
    }
  }
`;
