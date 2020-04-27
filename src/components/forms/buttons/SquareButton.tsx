import React from "react";
import styled from "styled-components";
import { MdPlaylistAdd } from "react-icons/md";

const Button = styled.button`
  background-color: #1ab953;
  color: #fff;
  user-select: none;
  width: 45px;
  height: 35px;
  border-radius: 0.7rem;
  border: none;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.875rem;
  font-weight: 800;
  font-size: 0.78rem;
  transition: box-shadow 0.3s;
  will-change: box-shadow;
  :active {
    width: 50px;
    height: 40px;
    font-weight: 900;
    font-size: 1rem;
  }
  outline: 0 !important;
`;

interface SquareButtonProps {
  onClick: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
}

const SquareButton: React.FunctionComponent<SquareButtonProps> = ({
  onClick,
}) => {
  return (
    <Button type="button" onClick={onClick}>
      <MdPlaylistAdd color="white" size={22} />
    </Button>
  );
};

export default SquareButton;
