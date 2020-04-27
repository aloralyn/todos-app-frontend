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

const StyledTitle = styled(NonselectableItem)`
  font-size: 16px;
  color: #fff;
  line-height: 22px;
  letter-spacing: 0.015em;
  font-weight: 500;
  padding-top: 10px;
  padding-bottom: 10px;
`;

interface TitleProps {
  children?: ReactNode;
}

const Title: React.FunctionComponent<TitleProps> = ({ children }) => (
  <StyledTitle unselectable="on">{children}</StyledTitle>
);

export default Title;
