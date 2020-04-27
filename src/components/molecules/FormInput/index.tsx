import React from "react";
import styled from "styled-components";
import Label from "../../atoms/Label";
import Input, { InputProps } from "../../atoms/Input";

const Container = styled.div`
  margin-top: 30px;
`;

export interface FormInputProps extends InputProps {
  label?: string;
}

const FormInput: React.FunctionComponent<FormInputProps> = ({
  id,
  name,
  label,
  maxLength,
  placeholder,
  register,
  required,
}) => (
  <Container>
    {label && <Label color="#fff">{label}</Label>}
    <Input
      id={id}
      name={name}
      maxLength={maxLength}
      placeholder={placeholder}
      required={required}
      register={register}
    />
  </Container>
);

export default FormInput;
