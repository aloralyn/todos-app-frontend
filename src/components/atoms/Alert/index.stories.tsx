import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import Alert from "./";

const Container = styled.div`
  margin: 40px;
`;

storiesOf("Atoms", module).add("Alert default", () => (
  <Container>
    <Alert>Task successfully added!</Alert>
  </Container>
));
