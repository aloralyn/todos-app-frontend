import React, { ReactNode } from "react";
import { Transition } from "react-transition-group";
import styled from "styled-components";

const Conatiner = styled.div`
  left: 0;
  right: 0;
  bottom: 0;
  position: sticky;
  text-align: center;
  margin-bottom: 15px;
`;

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
  unmounted: { opacity: 0 },
};

interface TransitionOverlayProps {
  show: boolean;
  timeout?: number;
  children?: ReactNode;
}

const TransitionOverlay: React.FunctionComponent<TransitionOverlayProps> = ({
  show,
  timeout,
  children,
}) => {
  const duration = timeout ?? 800;

  return (
    <Conatiner>
      <Transition in={show} timeout={duration}>
        {(state) => (
          <div
            style={{
              transition: `opacity ${duration}ms ease-in-out`,
              opacity: 0,
              ...transitionStyles[state],
            }}
          >
            {children}
          </div>
        )}
      </Transition>
    </Conatiner>
  );
};

export default TransitionOverlay;
