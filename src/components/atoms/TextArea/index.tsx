import React from "react";
import styled from "styled-components";
import { FormContextValues } from "react-hook-form";

const TextAreaInput = styled.textarea`
  border: 4px solid;
  border-image-source: linear-gradient(to left, #eeaeca 0%, #636fa4 100%);
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

export interface TextAreaProps {
  id: string;
  name: string;
  maxLength: number;
  placeholder?: string;
  required?: boolean;
  register?: FormContextValues["register"];
}

const TextArea: React.FunctionComponent<TextAreaProps> = ({
  id,
  name,
  maxLength,
  placeholder,
  register,
  required,
  ...rest
}) => {
  return (
    <TextAreaInput
      id={id}
      name={name}
      placeholder={placeholder}
      ref={register && register({ maxLength: maxLength, required })}
      {...rest}
    />
  );
};

export default TextArea;
