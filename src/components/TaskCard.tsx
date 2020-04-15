import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  height: 4rem;
  align-items: center;
  border: 1px solid #e1567c;
`;

const Task = styled.div`
  font-size: 12px;
  padding: 10px;
  text-align: center;
`;

interface TaskProps {
  todo: string;
}

const TaskCard: React.FunctionComponent<TaskProps> = ({ todo }) => (
  <Card>
    <Task>Is this feasible? {todo}</Task>
  </Card>
);

export default TaskCard;
