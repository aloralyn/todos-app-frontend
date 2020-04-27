import React from "react";
import styled from "styled-components";
import { FormContextValues } from "react-hook-form";

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
  text-align: left;
`;

const Input = styled.input`
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

interface InputFieldProps {
  id: string;
  label?: string;
  description?: string;
  name: string;
  register: FormContextValues["register"];
  required: boolean;
}

const InputField: React.FunctionComponent<InputFieldProps> = ({
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
      <Field>
        {label && <Label>{label}</Label>}
        <Input
          id={id}
          name={name}
          placeholder={description}
          ref={register && register({ maxLength: 80, required })}
          {...rest}
        />
      </Field>
    </>
  );
};

export default InputField;
