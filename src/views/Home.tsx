import React from "react";
import styled from "styled-components";
import TaskCard from "../components/TaskCard";

const HeaderContainer = styled.div`
  display: flex;
  height: 3rem;
  margin: 20px;
  align-items: center;
  background-color: #8c5393;
`;

const Header = styled.p`
  font-size: 18px;
  color: #f1e2ff;
  padding-left: 20px;
`;

const TasksContainer = styled.div`
  margin: 20px;
  margin-top: 40px;
`;

const TaskCardContainer = styled.div`
  padding-bottom: 20px;
`;

const data = [
  { _id: "1", todo: "no, Bitch" },
  { _id: "2", todo: "yes, Bitch" },
  { _id: "3", todo: "nah, Brah" },
  { _id: "4", todo: "yah, Brah" },
];

const Home: React.FunctionComponent = () => (
  <>
    <HeaderContainer>
      <Header>no, B!tch</Header>
    </HeaderContainer>
    <TasksContainer>
      {data.map((task) => (
        <TaskCardContainer>
          <TaskCard key={task._id} todo={task.todo} />
        </TaskCardContainer>
      ))}
    </TasksContainer>
  </>
);

export default Home;
