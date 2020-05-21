import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import styled from "styled-components";
import AlertModal from "../AlertModal";
import FormInput from "../../molecules/FormInput";
import Button from "../../atoms/Button";
import H2 from "../../atoms/H2";
import { CreateUserMutationVariables } from "../../../generated/graphql";
import { Colors } from "../../../styles/colors";

const Container = styled.div`
  justify-content: center;
  text-align: center;
  margin-top: 35px;
`;

const Form = styled.form`
  height: 290px;
`;

const HeaderContainer = styled.div`
  border-bottom: solid 0.5px ${Colors.cloud};
  margin-bottom: 15%;
  margin: 5%;
  width: 90%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

type SignupFormData = {
  name: string;
  email: string;
  confirmEmail: string;
  password: string;
};

const SignupFormSchema = yup.object().shape({
  name: yup.string().required("A name is required."),
  email: yup
    .string()
    .email("The email address you supplied is invalid.")
    .required("Please enter your email."),
  confirmEmail: yup
    .string()
    .email("The email address you supplied is invalid.")
    .oneOf([yup.ref("email"), null], "Email address doesn't match")
    .required("Please enter your email."),
  password: yup.string().required("Enter a password to continue."),
});

const createNewUser = gql`
  mutation CreateUser($name: String!, $email: String!, $password: String!) {
    createUser(name: $name, email: $email, password: $password) {
      name
      email
      password
    }
  }
`;

const SignupForm: React.FunctionComponent = () => {
  const { errors, handleSubmit, register } = useForm<SignupFormData>({
    validationSchema: SignupFormSchema,
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [createUser] = useMutation<CreateUserMutationVariables>(createNewUser, {
    onError: (e) => {
      console.log(e);
      setShowErrorModal(true);
    },
    onCompleted: () => {
      setShowSuccessModal(true);
    },
  });

  let history = useHistory();

  const handleCTAClick = () => {
    history.push("/login");
  };

  const onSubmit = handleSubmit(({ name, email, password }) => {
    createUser({
      variables: {
        name: name,
        email: email,
        password: password,
      },
    });
  });

  return (
    <Container>
      <HeaderContainer>
        <H2 color={Colors.eggplantDark}>Sign up with your email address</H2>
      </HeaderContainer>
      <Form>
        <FormInput
          id="name"
          name="name"
          placeholder="Preferred name"
          error={errors.name}
          register={register}
          required
        />
        <FormInput
          id="email"
          name="email"
          placeholder="Email"
          error={errors.email}
          register={register}
          required
        />
        <FormInput
          id="confirmEmail"
          name="confirmEmail"
          placeholder="Confirm email"
          error={errors.confirmEmail}
          register={register}
          required
        />
        <FormInput
          id="password"
          name="password"
          placeholder="Password"
          error={errors.password}
          register={register}
          required
        />
      </Form>
      <ButtonContainer>
        <Button
          theme="pill"
          color={Colors.eggplantDark}
          activeColor={Colors.eggplantMed}
          hoverColor={Colors.eggplantLight}
          onClick={onSubmit}
        >
          Sign up
        </Button>
      </ButtonContainer>
      <AlertModal
        type="Success"
        cta="Back to List"
        ctaOnClick={handleCTAClick}
        message="Account successfully created. Welcome to Listify!"
        show={showSuccessModal}
        handleClose={() => setShowSuccessModal(!showSuccessModal)}
      />
      <AlertModal
        type="Error"
        cta="Try again"
        ctaOnClick={handleCTAClick}
        message="Uh oh, something went wrong. Are you sure you don't already have an account with us?"
        show={showErrorModal}
        handleClose={() => setShowErrorModal(!showErrorModal)}
      />
    </Container>
  );
};

export default SignupForm;
