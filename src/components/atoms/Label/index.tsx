import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledLabel = styled.div<{ color?: string }>`
  font-size: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  ${({ color }) => color && `color: ${color}`}
`;

interface LabelProps {
  children?: ReactNode;
  color?: string;
}

const Label: React.FunctionComponent<LabelProps> = ({ children, color }) => (
  <StyledLabel color={color}>{children}</StyledLabel>
);

export default Label;
