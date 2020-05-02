import React, { useState } from "react";
import styled from "styled-components";
import Alert from "../../atoms/Alert";
import { Task } from "../../molecules/TaskCard";
import TransitionOverlay from "../../molecules/TransitionOverlay";
import AddTaskForm from "../../organisms/AddTaskForm";
import TaskBoard from "../../organisms/TaskBoard";

const View = styled.div``;

const TopContainer = styled.div`
  display: flex;
  height: 420px;
  padding-top: 50px;
  padding-bottom: 20px;
  justify-content: center;
  background: rgb(238, 174, 202);
  background: radial-gradient(circle, #eeaeca 0%, #636fa4 100%);
`;

const InnerTopContainer = styled.div`
  margin-top: 60px;
  marign-bottom: 20px;
  width: 450px;
  text-align: center;
`;

const Header = styled.h1``;

const TasksContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  height: 450px;
`;

const DemoTemplate: React.FunctionComponent = () => {
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
        <InnerTopContainer>
          <Header>Track your tasks</Header>
          <AddTaskForm addTask={addTask} />
        </InnerTopContainer>
      </TopContainer>
      <TasksContainer>
        <TaskBoard tasks={tasks} />
      </TasksContainer>
      <TransitionOverlay show={showOverlay}>
        <Alert>Task added</Alert>
      </TransitionOverlay>
    </View>
  );
};

export default DemoTemplate;
