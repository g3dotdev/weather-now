import styled from "styled-components";

export enum TemperatureColors {
  LOW = "var(--text-blue)",
  MID = "var(--text-orange)",
  HIGH = "var(--text-red)",
}

type Props = {
  color: TemperatureColors;
};

export const StyledCardItemTemperature = styled.div<Props>`
  padding: 1rem;

  font-size: 5.625rem;

  color: ${(props) => props.color};
`;
