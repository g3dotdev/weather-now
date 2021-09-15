import styled from "styled-components";

export const StyledCardItemFooter = styled.footer`
  background-color: var(--card-footer);
  padding: 0.875rem;

  font-size: 0.625rem;
  color: var(--text-muted);
`;

export const ExtraContent = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 1.125rem;

  margin-bottom: 1rem;

  h3 {
    text-transform: uppercase;

    font-size: 0.75rem;
    font-weight: 500;

    color: var(--text-muted);

    margin-bottom: 0.3rem;
  }
`;
