import React from "react";
import styled from "styled-components";
import LoginForm from "../../organisms/LoginForm";
import H4 from "../../atoms/H4";
import { Colors } from "../../../styles/colors";

const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: white;
  height: 550px;
`;

const HeaderContainer = styled.div`
  border-bottom: solid 0.5px ${Colors.cloud};
  margin-bottom: 15%;
  margin: 5%;
  width: 90%;
`;

const LoginFormContainer = styled.div`
  margin: 50px;
`;

const LoginTemplate: React.FunctionComponent = () => (
  <Container>
    <LoginFormContainer>
      <HeaderContainer>
        <H4 color={Colors.eggplantDark}>To continue, log in to Listify.</H4>
      </HeaderContainer>
      <LoginForm />
    </LoginFormContainer>
  </Container>
);

export default LoginTemplate;
