import React from "react";
import styled from "styled-components";

const Button = styled.button`
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

interface PillButtonProps {
  cta: string;
  onClick: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
}

const PillButton: React.FunctionComponent<PillButtonProps> = ({
  cta,
  onClick,
}) => {
  return (
    <Button type="button" onClick={onClick}>
      {cta}
    </Button>
  );
};

export default PillButton;
