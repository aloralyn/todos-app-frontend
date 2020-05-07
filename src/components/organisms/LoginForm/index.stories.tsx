import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import LoginForm from "./";

const Container = styled.div`
  margin: 30px;
`;

storiesOf("organisms", module).add("Login Form", () => (
  <Container>
    <LoginForm />
  </Container>
));
