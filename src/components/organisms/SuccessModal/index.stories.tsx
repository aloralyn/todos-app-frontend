import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import SuccessModal from "./";
import Button from "../../atoms/Button";

const Container = styled.div`
  margin-top: 40px;
  text-align: center;
`;

const SuccessModalStory: React.FunctionComponent = () => {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <Button onClick={() => setShow(!show)} theme="rectangle">
        Toggle
      </Button>
      <SuccessModal
        cta="Back to List"
        ctaOnClick={() => setShow(false)}
        handleClose={() => setShow(false)}
        message="Account successfully created. Welcome to Listify!"
        show={show}
      />
    </Container>
  );
};

storiesOf("organisms", module).add("Success Modal", () => (
  <SuccessModalStory />
));
