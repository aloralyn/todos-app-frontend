import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import DemoPage from ".";

const Container = styled.div`
  margin-top: 40px;
`;

storiesOf("Templates", module).add("Demo", () => (
  <Container>
    <DemoPage />
  </Container>
));
