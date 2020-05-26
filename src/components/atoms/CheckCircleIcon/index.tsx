import React from "react";
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleLine,
} from "react-icons/ri";

interface CheckCircleIconProps {
  isChecked: boolean;
  size?: number;
  onClick?: () => void;
}

const CheckCircleIcon: React.FunctionComponent<CheckCircleIconProps> = ({
  isChecked,
  size,
  onClick,
}) => (
  <>
    {isChecked ? (
      <RiCheckboxCircleLine color="fff" size={size} onClick={onClick} />
    ) : (
      <RiCheckboxBlankCircleLine color="#fff" size={size} onClick={onClick} />
    )}
  </>
);

export default CheckCircleIcon;
