import React from "react";
import Button from "../../atoms/Button";
import { MdPlaylistAdd } from "react-icons/md";

export interface AddTaskButtonProps {
  onClick: (e?: React.BaseSyntheticEvent<object, any, any> | undefined) => void;
}

const AddTaskButton: React.FunctionComponent<AddTaskButtonProps> = ({
  onClick,
}) => (
  <Button onClick={onClick}>
    <MdPlaylistAdd color="white" size={22} />
  </Button>
);

export default AddTaskButton;
