import React from "react";
import styled from "styled-components";
import { FormContextValues } from "react-hook-form";

const StyledInput = styled.input`
  border: 5px solid;
  border-image-source: linear-gradient(
    to left,
    rgba(148, 187, 233, 1) 0%,
    rgba(238, 174, 202, 1) 100%
  );
  border-image-slice: 1;
  border-radius: 0.375rem;
  line-height: 1.5;
  padding: 0.3125rem 0.5rem;
  color: #362d59;
  width: 90%;
  font-size: 1rem;
  &::selection {
    background: #e1567c;
    color: #fff;
  }
  outline: none;
`;

export interface InputProps {
  id: string;
  name: string;
  label?: string;
  placeholder?: string;
  maxLength?: number;
  register?: FormContextValues["register"];
  required?: boolean;
}

const Input: React.FunctionComponent<InputProps> = ({
  id,
  label,
  name,
  placeholder,
  maxLength,
  register,
  required,
  ...rest
}) => (
  <StyledInput
    id={id}
    name={name}
    placeholder={placeholder}
    maxLength={maxLength}
    ref={register && register({ maxLength: 80, required })}
    {...rest}
  />
);

export default Input;
