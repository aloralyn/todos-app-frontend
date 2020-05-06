import React from "react";
import { RiEmotionHappyLine } from "react-icons/ri";
import styled from "styled-components";
import Button from "../../atoms/Button";
import TransitionModal from "../../molecules/TransitionModal";
import { Colors } from "../../../styles/colors";

const HappyIcon = styled(RiEmotionHappyLine)`
  transform: rotate(180deg);
`;

interface SuccessModalProps {
  cta: string;
  ctaOnClick: () => void;
  handleClose: () => void;
  message: string;
  show: boolean;
}

const SuccessModal: React.FunctionComponent<SuccessModalProps> = ({
  cta,
  ctaOnClick,
  handleClose,
  message,
  show,
}) => (
  <TransitionModal
    show={show}
    title="Success"
    message={message}
    handleClose={handleClose}
    icon={<HappyIcon size={54} color={Colors.lychee} />}
    button={
      <Button theme="pill" activeColor={Colors.forest} onClick={ctaOnClick}>
        {cta}
      </Button>
    }
  />
);

export default SuccessModal;
