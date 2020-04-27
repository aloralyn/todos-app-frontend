import React, { ReactNode } from "react";
import styled from "styled-components";

type Theme = "default" | "square" | "rectangle";

const StyledButton = styled.button<{ color?: string; theme: Theme }>`
  background-color: ${({ color }) => color ?? "#1ab953"};
  color: #fff;
  user-select: none;
  ${({ theme }) =>
    theme === "square" &&
    `width: 45px;
    height: 35px;
    padding: 0 0.875rem;
    `};
  ${({ theme }) =>
    theme === "rectangle" &&
    `width: 105px;
    height: 35px;
    padding: 0.25rem;
    `};
  border-radius: 0.7rem;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 0.78rem;
  transition: box-shadow 0.3s;
  will-change: box-shadow;
  :active {
    ${({ theme }) =>
      theme === "square" &&
      `width: 50px;
      height: 40px;
    `};
    ${({ theme }) =>
      theme === "rectangle" &&
      `width: 115px;
    height: 40px;
  `};
    font-weight: 900;
    font-size: 1rem;
  }
  outline: 0 !important;
`;

export interface ButtonProps {
  color?: string;
  children?: ReactNode;
  disabled?: boolean;
  type?: "reset" | "submit";
  theme?: Theme;
  onClick: (e?: React.BaseSyntheticEvent<object, any, any>) => void;
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  color,
  type,
  theme,
  children,
  disabled,
  onClick,
}) => {
  return (
    <StyledButton
      color={color}
      type={type ?? "button"}
      onClick={onClick}
      disabled={disabled ?? false}
      theme={theme ?? "default"}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
