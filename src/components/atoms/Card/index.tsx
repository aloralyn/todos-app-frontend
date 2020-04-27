import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledCard = styled.div`
display: flex-grid;
text-align: left;
width: 100%;
padding-top: 10px;
padding-bottom: 10px;
color: #fff;
font-size: 14px;
background-color: #282c34;
:hover {
  background-color: #404040;
`;

interface CardProps {
  children?: ReactNode;
}

const TaskCard: React.FunctionComponent<CardProps> = ({ children }) => (
  <StyledCard>{children}</StyledCard>
);

export default TaskCard;
