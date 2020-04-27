import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 400px;
  align-items: center;
  justify-content: flex-end;
  padding: 20px;
  background-color: #362d59;
`;

const FormContainer = styled.div`
  background: #ffffff;
  color: #362d59;
  border-radius: 0.5rem;
  width: 650px;
  @media (min-width: 100px) .css-5kd2s7 {
    width: 28.33333333333333%;
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 0fr 0fr;
  grid-gap: 1rem 0rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

const Title = styled.h3`
  line-height: 1.25;
  text-align: center;
`;

const Field = styled.div`
  display: block;
  margin-left: 30px;
  margin-right: 10px;
`;

const Label = styled.label`
  display: block;
  color: #362d59;
  font-weight: 500;
  font-size: 0.975rem;
  margin-bottom: 0.375rem;
`;

const Input = styled.input`
  border: 1px solid #cfcfdb;
  border-radius: 0.375rem;
  line-height: 1.5;
  padding: 0.3125rem 0.5rem;
  color: #362d59;
  width: 250px;
  font-size: 1rem;
  &::selection {
    background: #e1567c;
    color: #fff;
  }
`;

const SubmitButtonDiv = styled.div`
  margin: 1.5rem 0;
  display: block;
  text-align: center;
`;

const Line = styled.hr`
  display: block;
  width: 90%;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  margin-inline-start: auto;
  margin-inline-end: auto;
  overflow: hidden;
`;

const SubmitButton = styled.button`
  background-color: #e1567c;
  color: #fff;
  border-color: rgb(216, 216, 216) rgb(209, 209, 209) rgb(186, 186, 186);
  box-shadow: 0 2px 0 rgba(54, 45, 89, 0.1);

  user-select: none;
  width: 200px;
  height: 40px;

  border-radius: 5rem;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.875rem;
  font-weight: 800;
  font-size: 0.78rem;
  cursor: pointer;
  transition: box-shadow 0.3s;
  will-change: box-shadow;
`;

const Description = styled.div`
  display: flex-start;
  font-size: 50px;
  color: white;
`;

type FormData = {
  username: string;
  email: string;
  password: string;
};

const createNewUser = gql`
  mutation CreateUser($name: String!, $email: String!, $password: String!) {
    createUser(name: $name, email: $email, password: $password) {
      name
      email
      password
    }
  }
`;

const SignUp: React.FunctionComponent = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [createUser] = useMutation<any>(createNewUser, {
    onCompleted: () => console.log("yo?"),
  });

  const onSubmit = handleSubmit(({ username, email, password }) => {
    createUser({
      variables: {
        name: "lyn",
        email: "lyn@lyn.com",
        password: "test1234",
      },
    });
  });

  return (
    <Container>
      <Description>Start tracking your sh!t today!</Description>
      <FormContainer>
        <Title>Get Started</Title>
        <Line />
        <Form onSubmit={onSubmit}>
          <Field>
            <Label>Username</Label>
            <Input name="username" ref={register} />
          </Field>
          <Field>
            <Label>Password</Label>
            <Input name="password" ref={register} />
          </Field>
          <Field>
            <Label>Email Address</Label>
            <Input name="email" ref={register} />
          </Field>
          <Field>
            <Label>Special Code</Label>
            <Input name="code" ref={register} />
          </Field>
        </Form>
        <SubmitButtonDiv>
          <SubmitButton type="button" onClick={onSubmit}>
            Create your account
          </SubmitButton>
        </SubmitButtonDiv>
      </FormContainer>
    </Container>
  );
};

export default SignUp;
