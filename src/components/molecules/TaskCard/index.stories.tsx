import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import TaskCard from "./";

const Container = styled.div`
  margin: 40px;
`;

storiesOf("molecules", module).add("Task Card", () => (
  <Container>
    <TaskCard
      task={{
        id: 1,
        title: "Salute the sun",
        description: "and walk the Dog",
      }}
    />
  </Container>
));
