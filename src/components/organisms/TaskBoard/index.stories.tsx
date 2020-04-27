import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import TaskBoard from "./";
import { Task } from "../../molecules/TaskCard";

const Container = styled.div`
  margin-top: 40px;
`;

const tasks: Task[] = [
  {
    title: "Fresh air",
    description: "Go for a stroll and admire the beauty of Williamsburg.",
    dateCreated: new Date(),
  },
  {
    title: "ABC",
    description: "Always be coding (with some clarity & intention).",
    dateCreated: new Date(),
  },
  {
    title: "Toy problems",
    description: "Practice those toy challenges, as painful as it may be.",
    dateCreated: new Date(),
  },
  {
    title: "Gratitude journal",
    description: "Take 10 minute to jot your gratitude thoughts; just do it.",
    dateCreated: new Date(),
  },
];

storiesOf("Organisms", module).add("Task Board", () => (
  <Container>
    <TaskBoard tasks={tasks} />
  </Container>
));
