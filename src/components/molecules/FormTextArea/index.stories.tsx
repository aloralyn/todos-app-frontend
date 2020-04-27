import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import styled from "styled-components";
import FormTextArea from ".";

const Container = styled.div`
  margin: 80px;
`;

storiesOf("Molecules", module)
  .addDecorator(withKnobs)
  .add("Form Text Area", () => (
    <Container>
      <FormTextArea id="example" name="example" label="Title" maxLength={25} />
    </Container>
  ));
