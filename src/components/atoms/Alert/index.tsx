import React, { ReactNode } from "react";
import styled from "styled-components";
import { Colors } from "../../../styles/colors";

const StyledDiv = styled.div<{ color?: string }>`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  background-color: ${({ color }) => color ?? Colors.ocean};
  padding: 2px 10px;
  color: black;
  height: 45px;
  width: 220px;
  border-radius: 0.5em;
  margin: 0 auto;
  color: #fff;
  font-weight: 500;
`;

interface AlertProps {
  color?: string;
  children?: ReactNode;
}

const Alert: React.FunctionComponent<AlertProps> = ({ color, children }) => (
  <StyledDiv color={color}>{children}</StyledDiv>
);

export default Alert;
