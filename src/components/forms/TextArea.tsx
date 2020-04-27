import React from "react";
import styled from "styled-components";
import { FormContextValues } from "react-hook-form";

const Container = styled.div`
  display: block;
  margin-left: 30px;
  margin-right: 10px;
`;

const TextAreaInput = styled.textarea`
  border: 5px solid;
  border-image-source: linear-gradient(
    to left,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  border-image-slice: 1;
  border-radius: 0.375rem;
  line-height: 1.5;
  padding: 0.3125rem 0.5rem;
  color: #362d59;
  width: 90%;
  height: 100px;
  font-size: 1rem;
  &::selection {
    background: #e1567c;
    color: #fff;
  }
  resize: none;
  outline: none;
`;

interface TextAreaProps {
  id: string;
  label: string;
  name: string;
  description?: string;
  register: FormContextValues["register"];
  required: boolean;
}

const TextArea: React.FunctionComponent<TextAreaProps> = ({
  id,
  label,
  name,
  description,
  register,
  required,
  ...rest
}) => {
  return (
    <>
      <Container>
        <TextAreaInput
          id={id}
          name={name}
          placeholder={description}
          ref={register && register({ maxLength: 150, required })}
          {...rest}
        />
      </Container>
    </>
  );
};

export default TextArea;
