import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import styled from "styled-components";
import FormInput from ".";

const Container = styled.div`
  margin: 80px;
`;

storiesOf("Forms", module)
  .addDecorator(withKnobs)
  .add("Form Input", () => (
    <Container>
      <FormInput id="example" name="example" label="Title" maxLength={25} />
    </Container>
  ));
