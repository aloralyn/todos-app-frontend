import React from "react";
import { RiEmotionHappyLine, RiEmotionNormalLine } from "react-icons/ri";
import styled from "styled-components";
import Button from "../../atoms/Button";
import TransitionModal from "../../molecules/TransitionModal";
import { Colors } from "../../../styles/colors";

export type Alert = "Success" | "Error";

const HappyIcon = styled(RiEmotionHappyLine)`
  transform: rotate(180deg);
`;

const getIcon = (type: Alert) => {
  switch (type) {
    case "Success":
      return <HappyIcon size={54} color={Colors.lychee} />;
    case "Error":
      return <RiEmotionNormalLine size={54} color={Colors.lychee} />;
  }
};

interface AlertModalProps {
  type: Alert;
  cta: string;
  ctaOnClick: () => void;
  handleClose: () => void;
  message: string;
  show: boolean;
}

const AlertModal: React.FunctionComponent<AlertModalProps> = ({
  type,
  cta,
  ctaOnClick,
  handleClose,
  message,
  show,
}) => (
  <TransitionModal
    show={show}
    title={type}
    message={message}
    handleClose={handleClose}
    icon={getIcon(type)}
    button={
      <Button theme="pill" activeColor={Colors.forest} onClick={ctaOnClick}>
        {cta}
      </Button>
    }
  />
);

export default AlertModal;
