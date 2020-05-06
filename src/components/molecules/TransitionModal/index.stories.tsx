import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import TransitionModal from "./";
import Button from "../../atoms/Button";

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
      <TransitionModal
        title="Success"
        message="Account successfully created. Welcome to Listify!"
        show={show}
        handleClose={() => setShow(!show)}
      />
    </Container>
  );
};

storiesOf("molecules", module).add("Transition Modal", () => (
  <TransitionAlertStory />
));
