import styled from "styled-components";

export const StyledCardItemFooter = styled.footer`
  background-color: var(--card-footer);
  padding: 1rem;

  font-size: 12px;
  color: var(--text-muted);
`;

export const ExtraContent = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 18px;

  margin-bottom: 1rem;

  h3 {
    text-transform: uppercase;

    font-size: 12px;
    font-weight: 500;

    color: var(--text-color);

    margin-bottom: 5px;
  }
`;
