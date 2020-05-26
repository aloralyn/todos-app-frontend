import React from "react";
import { Link } from "react-router-dom";
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

const LoginContainer = styled.div`
  margin: 15px;
`;

const SignupTemplate: React.FunctionComponent = () => {
  return (
    <Container>
      <SignupFormContainer>
        <SignupForm />
        <LoginContainer>
          Already have an account? <Link to="/login">Log in</Link>
        </LoginContainer>
      </SignupFormContainer>
    </Container>
  );
};

export default SignupTemplate;
