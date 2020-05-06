import React, { ReactNode } from "react";
import styled from "styled-components";
import { Colors } from "../../../styles/colors";

const StyledHeader = styled.h2<{ color?: string }>`
  color: ${({ color }) => (color ? color : Colors.rose)};
`;

interface HeaderProps {
  children?: ReactNode;
  color?: string;
}

const H2: React.FunctionComponent<HeaderProps> = ({ children, color }) => (
  <StyledHeader color={color}>{children}</StyledHeader>
);

export default H2;
