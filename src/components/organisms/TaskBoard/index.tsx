import React from "react";
import styled from "styled-components";
import TaskCard, { Task } from "../../molecules/TaskCard";

const Board = styled.div`
  width: 60%;
`;

const Header = styled.div`
  text-align: left;
  font-size: 12px;
  font-weight: 600;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.015em;
  margin: 25px 0 5px 35px;
`;

interface TasksBoardProps {
  tasks: Task[];
}

const TasksBoard: React.FunctionComponent<TasksBoardProps> = ({ tasks }) => {
  return (
    <Board>
      <Header>Todo List</Header>
      {tasks.length ? (
        tasks.map(({ title, description }, idx) => (
          <TaskCard
            key={idx}
            task={{
              title: title,
              description: description,
            }}
          />
        ))
      ) : (
        <Header>empty</Header>
      )}
    </Board>
  );
};

export default TasksBoard;
