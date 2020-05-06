import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import CheckCircleIcon from "./";

const Container = styled.div`
  margin: 20px;
`;

storiesOf("atoms", module)
  .add("CheckCircleIcon - Unchecked", () => (
    <Container>
      <CheckCircleIcon isChecked={false} size={40} />
    </Container>
  ))
  .add("CheckCircleIcon - Checked", () => (
    <Container>
      <CheckCircleIcon isChecked={true} size={40} />
    </Container>
  ));
