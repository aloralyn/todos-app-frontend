import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import Nav from ".";

const Container = styled.div`
  height: 500px;
  background-color: #fff;
`;

storiesOf("atoms", module).add("Nav ", () => (
  <Container>
    <Nav>A nav bar</Nav>
  </Container>
));
