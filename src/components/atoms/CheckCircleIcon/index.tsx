import React from "react";
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleLine,
} from "react-icons/ri";

interface CheckCircleIconProps {
  isChecked: boolean;
  size?: number;
}

const CheckCircleIcon: React.FunctionComponent<CheckCircleIconProps> = ({
  isChecked,
  size,
}) => (
  <>
    {isChecked ? (
      <RiCheckboxCircleLine color="fff" size={size} />
    ) : (
      <RiCheckboxBlankCircleLine color="#fff" size={size} />
    )}
  </>
);

export default CheckCircleIcon;
