import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import TransitionOverlay from "./";
import Button from "../../atoms/Button";
import Alert from "../../atoms/Alert";

const Container = styled.div`
  margin-top: 40px;
  text-align: center;
`;

const TransitionAlertStory: React.FunctionComponent = () => {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <Button onClick={() => setShow(!show)} theme="rectangle">
        Toggle
      </Button>
      <TransitionOverlay show={show}>
        <Container>
          <Alert>Success!</Alert>
        </Container>
      </TransitionOverlay>
    </Container>
  );
};

storiesOf("molecules", module).add("Transition - Alert", () => (
  <TransitionAlertStory />
));
