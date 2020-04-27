import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import AddTaskForm from "./";

const Container = styled.div`
  margin: 20px;
`;

storiesOf("Add Task Form", module).add("Text Area", () => (
  <Container>
    <AddTaskForm />
  </Container>
));
