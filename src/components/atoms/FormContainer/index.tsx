import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledForm = styled.div`
  width: 100%;
  @media only screen and (max-width: 700px) {
    width: 90%%;
  }
`;

interface FormContainerProps {
  children?: ReactNode;
}

const FormContainer: React.FunctionComponent<FormContainerProps> = ({
  children,
}) => <StyledForm>{children}</StyledForm>;

export default FormContainer;
