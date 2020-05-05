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

storiesOf("molecules", module)
  .addDecorator(withKnobs)
  .add("Button w/ Add Task Icon", () => (
    <Container>
      <AddTaskButton onClick={action("clicked add task")} />
    </Container>
  ));
