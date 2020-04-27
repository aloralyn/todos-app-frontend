import React, { useRef, useReducer } from "react";
import Overlay from "react-overlays/Overlay";

const PLACEMENTS = ["left", "top", "right", "bottom"];

const initialSstate = {
  show: false,
  placement: null,
};

function reducer(state: any, [type, payload]: any) {
  switch (type) {
    case "placement":
      return { show: !!payload, placement: payload };
    case "hide":
      return { ...state, show: false, placement: null };
    default:
      return state;
  }
}

function OverlayExample() {
  const [{ placement }, dispatch] = useReducer(reducer, initialSstate);
  const triggerRef = useRef(null);
  const containerRef = useRef(null);

  const handleClick = () => {
    const nextPlacement = PLACEMENTS[PLACEMENTS.indexOf(placement) + 1];

    dispatch(["placement", nextPlacement]);
  };

  return (
    <div className="flex flex-col items-center" ref={containerRef}>
      <button
        type="button"
        className="btn mb-4"
        id="overlay-toggle"
        ref={triggerRef}
        onClick={handleClick}
      >
        I am an Overlay target
      </button>
      <p>Keep clicking to see the placement change.</p>

      <Overlay
        show={true}
        rootClose
        // onHide={() => dispatch("hide")}
        placement="bottom"
        container={containerRef}
        target={triggerRef}
      >
        {({ props, arrowProps, placement }) => (
          // <Tooltip {...props} placement={placement}>
          //   <Body>
          <div>
            I&rsquo;m placed to the <strong>hhh</strong>
          </div>
          //   </Body>
          // </Tooltip>
        )}
      </Overlay>
    </div>
  );
}

export default OverlayExample;
