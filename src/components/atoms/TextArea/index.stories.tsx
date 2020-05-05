import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import TextArea from "./";

const Container = styled.div`
  margin: 20px;
  text-align: center;
`;

storiesOf("atoms", module).add("Text Area", () => (
  <Container>
    <TextArea
      id="example"
      name="example"
      maxLength={150}
      placeholder="Placeholder for text area..."
    />
  </Container>
));
