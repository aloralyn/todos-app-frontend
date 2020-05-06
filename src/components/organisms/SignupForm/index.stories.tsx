import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import SignupForm from "./";

const Container = styled.div`
  display: flex;
  background-color: #fff;
  padding-top: 20px;
  padding-bottom: 40px;
  text-align: center;
  justify-content: center;
`;

storiesOf("organisms", module).add("Signup Form", () => (
  <Container>
    <SignupForm />
  </Container>
));
