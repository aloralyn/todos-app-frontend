import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import AlertModal, { Alert } from ".";
import Button from "../../atoms/Button";

const Container = styled.div`
  margin-top: 40px;
  text-align: center;
`;

interface SuccessAlertStoryProps {
  type: Alert;
  cta: string;
  message: string;
}

const SuccessAlertStory: React.FunctionComponent<SuccessAlertStoryProps> = ({
  type,
  cta,
  message,
}) => {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <Button onClick={() => setShow(!show)} theme="rectangle">
        Toggle
      </Button>
      <AlertModal
        type={type}
        cta={cta}
        ctaOnClick={() => setShow(false)}
        handleClose={() => setShow(false)}
        message={message}
        show={show}
      />
    </Container>
  );
};

storiesOf("organisms", module)
  .add("Signup Success Modal", () => (
    <SuccessAlertStory
      type="Success"
      cta="Back to List"
      message="Account successfully created. Welcome to Listify!"
    />
  ))
  .add("Signup Error Modal", () => (
    <SuccessAlertStory
      type="Error"
      cta="Try again"
      message="Uh-oh! Something went wrong..."
    />
  ));
