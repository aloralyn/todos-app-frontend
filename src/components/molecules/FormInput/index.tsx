import React from "react";
import styled from "styled-components";
import Label from "../../atoms/Label";
import Input, { InputProps } from "../../atoms/Input";
import { Colors } from "../../../styles/colors";
import { FieldError } from "react-hook-form";

const Container = styled.div<{ error?: FieldError }>`
  margin-bottom: ${({ error }) => (error ? "8px" : "30px")};
`;

const Error = styled.div`
  color: ${Colors.strawberry};
  font-size: 14px;
  margin-top: 5px;
  margin-left: 10px;
  text-align: left;
`;

export interface FormInputProps extends InputProps {
  label?: string;
  error?: FieldError;
}

const FormInput: React.FunctionComponent<FormInputProps> = ({
  id,
  name,
  error,
  label,
  maxLength,
  placeholder,
  register,
  required,
}) => (
  <Container error={error}>
    {label && <Label color="#fff">{label}</Label>}
    <Input
      id={id}
      name={name}
      maxLength={maxLength}
      placeholder={placeholder}
      required={required}
      register={register}
    />
    {error && <Error>{error.message}</Error>}
  </Container>
);

export default FormInput;
