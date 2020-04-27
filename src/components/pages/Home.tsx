import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const HeaderOuterContainer = styled.div`
  position: fixed;
  width: 100%;
`;

const HeaderInnerContainer = styled.div`
  display: flex;
  height: 4rem;
  margin: 20px;
  align-items: center;
  background-color: #8c5393;
`;

const HeaderText = styled.p`
  font-size: 18px;
  color: #f1e2ff;
  padding-left: 20px;
`;

const TasksContainer = styled.div`
  width: 100%;
  margin: 20px;
  margin-top: 150px;
`;

const TaskCardContainer = styled.div`
  padding-bottom: 20px;
`;

const AddTaskLink = styled.p`
  font-size: 18px;
  color: #f1e2ff;
  padding-left: 20px;
  display: block;
`;

const data = [
  { _id: "1", todo: "no, Bitch" },
  { _id: "2", todo: "yes, Bitch" },
  { _id: "3", todo: "nah, Brah" },
  { _id: "4", todo: "yah, Brah" },
];

const Header: React.FunctionComponent = () => (
  <HeaderOuterContainer>
    <HeaderInnerContainer>
      <HeaderText>no, B!tch</HeaderText>
    </HeaderInnerContainer>
  </HeaderOuterContainer>
);

const Home: React.FunctionComponent = () => (
  <Container>
    <Header />
    <TasksContainer>
      <AddTaskLink>
        <Link to="/add-task">+ Add Task</Link>
      </AddTaskLink>
      {data.map((task) => (
        <TaskCardContainer></TaskCardContainer>
      ))}
    </TasksContainer>
  </Container>
);

export default Home;
