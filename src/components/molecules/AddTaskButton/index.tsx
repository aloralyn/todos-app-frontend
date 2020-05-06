import React from "react";
import { MdPlaylistAdd } from "react-icons/md";
import Button from "../../atoms/Button";

export interface AddTaskButtonProps {
  onClick: (e?: React.BaseSyntheticEvent<object, any, any> | undefined) => void;
}

const AddTaskButton: React.FunctionComponent<AddTaskButtonProps> = ({
  onClick,
}) => (
  <Button onClick={onClick} theme="square">
    <MdPlaylistAdd color="white" size={22} />
  </Button>
);

export default AddTaskButton;
