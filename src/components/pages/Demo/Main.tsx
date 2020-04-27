import React, { useState } from "react";
import { Transition } from "react-transition-group";
import styled from "styled-components";
import AddTaskForm, { Task } from "./AddTaskForm";
import TasksBoard from "./TasksBoard";

const View = styled.div``;

const TopContainer = styled.div`
  display: flex;
  height: 400px;
  justify-content: center;
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
`;

const HeaderContainer = styled.div`
  margin-top: 60px;
  text-align: center;
`;

const Header = styled.h1``;

const TasksContainer = styled.div`
  display: flex;
  background-color: #121212;
  justify-content: center;
  text-align: center;
  height: 500px;
`;

const SuccessOverlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-bottom: 10px;
`;

const SuccessAlert = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  background-color: #1ca1f3;
  padding: 2px 10px;
  color: black;
  height: 45px;
  width: 220px;
  border-radius: 0.5em;
  margin: 0 auto;
  color: #fff;
  font-weight: 500;
`;

const duration = 800;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
  unmounted: { opacity: 0 },
};

const Main: React.FunctionComponent = () => {
  const [tasks, setTask] = useState<Task[]>([]);
  const [showOverlay, setShowOverlay] = useState(false);

  const addTask = (task: Task) => {
    setTask([...tasks, task]);
    setShowOverlay(true);
    setTimeout(() => setShowOverlay(false), 2000);
  };
  return (
    <View>
      <TopContainer>
        <HeaderContainer>
          <Header>Track your tasks</Header>
          <AddTaskForm addTask={addTask} tasks={tasks} />
        </HeaderContainer>
      </TopContainer>
      <TasksContainer>
        <TasksBoard tasks={tasks} />
      </TasksContainer>
      <SuccessOverlay>
        <Transition in={showOverlay} timeout={duration}>
          {(state) => (
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              <SuccessAlert>Task added</SuccessAlert>
            </div>
          )}
        </Transition>
      </SuccessOverlay>
    </View>
  );
};

export default Main;
