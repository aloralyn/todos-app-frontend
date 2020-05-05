import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import TaskCard from "../../molecules/TaskCard";
import { TaskListState } from "../../../store/tasks/types";
import { AppState } from "../../../store";

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

const TasksBoard: React.FunctionComponent = () => {
  const tasks = useSelector(
    (state: AppState): TaskListState => {
      return state.tasks;
    }
  );

  return (
    <Board>
      <Header>Todo List</Header>
      <TaskContainer>
        {tasks.list.length ? (
          tasks.list.map(({ title, description }, idx) => (
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
