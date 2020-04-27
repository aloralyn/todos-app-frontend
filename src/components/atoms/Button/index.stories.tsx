import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";
import styled from "styled-components";
import Button from "./";

const Container = styled.div`
  margin: 40px;
  text-align: center;
`;

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .add("Square default", () => (
    <Container>
      <Button onClick={action("clicked")}>+</Button>
    </Container>
  ))
  .add("Square cyan", () => (
    <Container>
      <Button color="cyan" onClick={action("clicked")}>
        +
      </Button>
    </Container>
  ));
