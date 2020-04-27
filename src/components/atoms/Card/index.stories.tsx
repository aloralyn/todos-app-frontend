import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import Card from "./";

const Container = styled.div`
  margin: 20px;
  width: 65%;
`;

storiesOf("Cards", module).add("Default", () => (
  <Container>
    <Card>
      Salute the{" "}
      <span role="img" aria-label="sun with face">
        🌞
      </span>
    </Card>
  </Container>
));
