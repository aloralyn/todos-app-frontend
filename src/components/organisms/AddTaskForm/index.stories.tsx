import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";
import styled from "styled-components";
import AddTaskForm from "./";

const Container = styled.div`
  margin: 20px;
`;

storiesOf("Organisms", module)
  .addDecorator(withKnobs)
  .add("Add Task Form", () => (
    <Container>
      <AddTaskForm addTask={action("New task added")} />
    </Container>
  ));
