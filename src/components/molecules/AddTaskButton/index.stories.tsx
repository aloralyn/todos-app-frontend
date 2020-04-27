import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";
import styled from "styled-components";
import AddTaskButton from ".";

const Container = styled.div`
  margin: 40px;
  text-align: center;
`;

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .add("Add Task", () => (
    <Container>
      <AddTaskButton onClick={action("clicked add task")} />
    </Container>
  ));
