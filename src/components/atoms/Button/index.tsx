import React, { ReactNode } from "react";
import styled from "styled-components";
import { Colors } from "../../../styles/colors";

type Theme = "default" | "pill" | "rectangle" | "square";

const StyledButton = styled.button<{
  color?: string;
  activeColor?: string;
  hoverColor?: string;
  theme: Theme;
}>`
  background-color: ${({ color }) => color ?? Colors.chlorophyll};
  color: #fff;
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
  ${({ theme }) =>
      theme === "pill"
        ? `
    width: 200px;
    height: 40px;
    border-radius: 5rem;
    border: none;`
        : `
    border-radius: 0.7rem;
    border: none; 
  `}
    :hover {
    ${({ hoverColor }) =>
      hoverColor &&
      `cursor: pointer;
    background-color: ${hoverColor};`}
  }
  :active {
    ${({ theme }) =>
      theme === "square" &&
      `width: 50px;
      height: 40px;
      font-weight: 900;
      font-size: 1rem;
    `};
    ${({ theme }) =>
      theme === "rectangle" &&
      `width: 115px;
      height: 40px;
      font-weight: 900;
      font-size: 1rem;
    `};
    ${({ theme }) =>
      theme === "rectangle" &&
      `width: 115px;
      height: 40px;
      font-weight: 900;
      font-size: 1rem;
    `};
    ${({ theme, activeColor }) =>
      theme === "pill" &&
      `
      background-color: ${activeColor ? activeColor : Colors.rose}
    `};
  }
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 0.78rem;
  text-transform: uppercase;
  transition: box-shadow 0.3s;
  will-change: box-shadow;
  outline: 0 !important;
`;
// user-select: none;
export interface ButtonProps {
  theme?: Theme;
  color?: string;
  activeColor?: string;
  hoverColor?: string;
  children?: ReactNode;
  disabled?: boolean;
  onClick: (e?: React.BaseSyntheticEvent<object, any, any>) => void;
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  theme,
  color,
  activeColor,
  hoverColor,
  children,
  disabled,
  onClick,
}) => {
  return (
    <StyledButton
      color={color}
      activeColor={activeColor}
      hoverColor={hoverColor}
      onClick={onClick}
      disabled={disabled ?? false}
      theme={theme ?? "default"}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
