import React from "react";
import styled from "styled-components";
import Label from "../../atoms/Label";
import TextArea, { TextAreaProps } from "../../atoms/TextArea";

const Container = styled.div`
  margin-top: 30px;
`;

interface FormTextAreaProps extends TextAreaProps {
  label?: string;
}

const FormTextArea: React.FunctionComponent<FormTextAreaProps> = ({
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
    <TextArea
      id={id}
      name={name}
      maxLength={maxLength}
      placeholder={placeholder}
      required={required}
      register={register}
    />
  </Container>
);

export default FormTextArea;
