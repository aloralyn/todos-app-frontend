import React from "react";
import styled from "styled-components";
import TaskCard, { Task } from "../../molecules/TaskCard";

const Board = styled.div`
  width: 90%;
`;

const TaskContainer = styled.div`
  border-top: 1px solid #eeaeca;
`;

const Header = styled.div`
  text-align: left;
  font-size: 12px;
  font-weight: 600;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.015em;
  margin-top: 25px;
  margin-left: 5px;
  margin-bottom: 15px;
`;

interface TasksBoardProps {
  tasks: Task[];
}

const TasksBoard: React.FunctionComponent<TasksBoardProps> = ({ tasks }) => {
  return (
    <Board>
      <Header>Todo List</Header>
      <TaskContainer>
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
      </TaskContainer>
    </Board>
  );
};

export default TasksBoard;
