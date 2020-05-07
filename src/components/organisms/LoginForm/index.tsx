import React from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import FormInput from "../../molecules/FormInput";
import Button from "../../atoms/Button";
import { FETCH_USER } from "../../../store/user/types";
import { Colors } from "../../../styles/colors";
import {
  AuthenticatedUser,
  LoginUserMutation,
} from "../../../generated/graphql";

const Container = styled.div`
  width: 400px;
`;

const ButtonContainer = styled.div`
  padding: 10px;
`;

const loginUser = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      _id
      name
      email
      token
    }
  }
`;

type LoginFormData = {
  email: string;
  password: string;
};

const LoginFormValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("The email address you supplied is invalid.")
    .required("Please enter your email."),
  password: yup.string().required("Enter your password."),
});

const LoginForm: React.FunctionComponent = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const setToken = (user: AuthenticatedUser) => {
    dispatch({ type: FETCH_USER, payload: user });
    const auth = JSON.stringify({
      id: user._id,
      idToken: user.token,
    });
    localStorage.setItem("auth", auth);
  };
  const { errors, handleSubmit, register } = useForm<LoginFormData>({
    validationSchema: LoginFormValidationSchema,
  });

  const [authenticateUser] = useMutation<LoginUserMutation>(loginUser, {
    onCompleted: (data) => {
      if (data.loginUser) {
        setToken(data.loginUser);
        history.push("/");
      }
    },
  });

  const onSubmit = handleSubmit(({ email, password }) => {
    authenticateUser({
      variables: {
        email: email,
        password: password,
      },
    });
  });

  return (
    <Container>
      <FormInput
        id="email"
        name="email"
        placeholder="Email"
        error={errors.email}
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
      <ButtonContainer>
        <Button theme="pill" activeColor={Colors.forest} onClick={onSubmit}>
          Log In
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default LoginForm;
