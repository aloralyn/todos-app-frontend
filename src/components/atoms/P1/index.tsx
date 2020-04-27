import React, { ReactNode } from "react";
import styled from "styled-components";

const NonselectableItem = styled.div`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const StyledP1 = styled(NonselectableItem)`
  color: #fff;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.015em;
`;

interface P1Props {
  children?: ReactNode;
}

const P1: React.FunctionComponent<P1Props> = ({ children }) => (
  <StyledP1 unselectable="on">{children}</StyledP1>
);

export default P1;
