import React, { ReactNode, HTMLProps } from "react";
import styled from "styled-components";

const StyledCard = styled.div`
display: flex-grid;
text-align: left;
width: 100%;
padding-top: 10px;
padding-bottom: 10px;
color: #fff;
background-color: #282c34;
:hover {
  background-color: #404040;
`;

interface CardProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
}

const TaskCard: React.FunctionComponent<CardProps> = ({
  children,
  onMouseOver,
  onMouseOut,
}) => (
  <StyledCard onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
    {children}
  </StyledCard>
);

export default TaskCard;
