import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import H4 from ".";

const Container = styled.div`
  margin: 30px;
`;

storiesOf("atoms", module).add("H4", () => (
  <Container>
    <H4>Sign up with your email address</H4>
  </Container>
));
