import React, { ReactNode } from "react";
import Modal from "@material-ui/core/Modal";
import styled from "styled-components";
import Fade from "@material-ui/core/Fade";
import { Colors } from "../../../styles/colors";

const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MessageContainer = styled.div`
  width: 350px;
  height: 300px;
  justify-content: center;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 0 10px ${Colors.eggplantMed};
  border-radius: 0.5em;
  outline: 0;
`;

const IconContainer = styled.div`
  margin-top: 25px;
  margin-bottom: 10px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

const Message = styled.div`
  margin: 10px 15px 35px 15px;
  padding-left: 18px;
  padding-right: 18px;
  line-height: 22px;
`;

interface TransitionModalProps {
  button?: ReactNode;
  handleClose?: () => void;
  icon?: ReactNode;
  message: string;
  title: string;
  show: boolean;
}

const TransitionModal: React.FunctionComponent<TransitionModalProps> = ({
  button,
  handleClose,
  icon,
  message,
  title,
  show,
}) => (
  <StyledModal
    aria-labelledby="transition-modal-title"
    aria-describedby="transition-modal-description"
    open={show}
    onClose={handleClose}
    closeAfterTransition
    BackdropProps={{
      timeout: 500,
    }}
  >
    <Fade in={show}>
      <MessageContainer>
        {icon && <IconContainer>{icon}</IconContainer>}
        {title && <Title id="transition-modal-title">{title}</Title>}
        <Message id="transition-modal-description">{message}</Message>
        {button ?? null}
      </MessageContainer>
    </Fade>
  </StyledModal>
);

export default TransitionModal;
