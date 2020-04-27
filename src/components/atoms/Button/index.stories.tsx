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

storiesOf("Atoms", module)
  .addDecorator(withKnobs)
  .add("Button - Square Default", () => (
    <Container>
      <Button onClick={action("clicked")} theme="square">
        +
      </Button>
    </Container>
  ));
