import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 360px;
  height: 250px;
  border: 1px solid black;
  align-items: center;
`;

const Form = styled.form`
  display: block;
  justify-content: center;
  margin: 2px;
`;

const Field = styled.label``;

const Label = styled.div`
  font-size: 16px;
`;

const TextArea = styled.textarea`
  height: 100px;
  width: 350px;
  border-radius: 0.2rem;
  position: relative;
  background-color: rgba(255, 255, 255, 0.3);
  transition: 0.3s all;
`;

const SubmitButton = styled.input`
  color: #fff;
  width: 100%;
  height: 20px;
  border-radius: 0.2rem;
  background-color: #e1567c;
  box-shadow: 0 2px 0 rgba(54, 45, 89, 0.1);
  border-color: transparent;
`;

const TaskForm: React.FunctionComponent = () => (
  <Container>
    <Form>
      <Field>
        <Label>Enter your todo:</Label>
        <TextArea />
      </Field>
      <SubmitButton type="submit" value="Submit" />
    </Form>
  </Container>
);

export default TaskForm;
