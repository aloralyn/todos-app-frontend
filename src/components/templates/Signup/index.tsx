import React from "react";
import styled from "styled-components";
import SignupForm from "../../organisms/SignupForm";

const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: white;
  height: 550px;
`;

const SignupFormContainer = styled.div`
  width: 400px;
  margin: 25px;
`;

const SignupTemplate: React.FunctionComponent = () => {
  return (
    <Container>
      <SignupFormContainer>
        <SignupForm />
      </SignupFormContainer>
    </Container>
  );
};

export default SignupTemplate;
