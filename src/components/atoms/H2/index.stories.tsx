import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import H2 from ".";

const Container = styled.div`
  margin: 30px;
`;

storiesOf("atoms", module).add("H2", () => (
  <Container>
    <H2>Sign up with your email address</H2>
  </Container>
));
