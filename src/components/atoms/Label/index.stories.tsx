import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import styled from "styled-components";
import Label from ".";

const Container = styled.div`
  margin: 80px;
`;

storiesOf("Atoms", module)
  .addDecorator(withKnobs)
  .add("Label", () => (
    <Container>
      <Label color="#fff">A label</Label>
    </Container>
  ));
