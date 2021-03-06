import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import Title from "./";

const Container = styled.div`
  margin: 20px;
`;

storiesOf("atoms", module).add("Title", () => (
  <Container>
    <Title>Salute the Sun</Title>
  </Container>
));
