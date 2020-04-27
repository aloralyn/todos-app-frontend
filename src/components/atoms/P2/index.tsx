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

const StyledP2 = styled(NonselectableItem)`
  color: #fff;
  opacity: 0.6;
  font-size: 14px;
  -webkit-transition: opacity 0.2s linear;
  transition: opacity 0.2s linear;
`;

interface P2Props {
  children?: ReactNode;
}

const P2: React.FunctionComponent<P2Props> = ({ children }) => (
  <StyledP2 unselectable="on">{children}</StyledP2>
);

export default P2;
