import styled from "styled-components";

export enum TemperatureColors {
  LOW = "var(--text-blue)",
  MID = "var(--text-orange)",
  HIGH = "var(--text-red)",
}

type Props = {
  color: TemperatureColors;
};

export const StyledCardItemTemperature = styled.h2<Props>`
  padding: 2.25rem 1.75rem 1.75rem 1.75rem;

  font-size: 5.625rem;
  font-weight: 500;
  line-height: 1;

  color: ${(props) => props.color};
`;
