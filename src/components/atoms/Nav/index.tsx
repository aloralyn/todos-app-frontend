import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  height: 80px;
  width: 100%;
  position: fixed;
  align-items: center;
  text-align: right;
  background-image: linear-gradient(
    to bottom,
    #282c34 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
`;

interface NavBarProps {
  children: ReactNode;
}

const Nav: React.FunctionComponent<NavBarProps> = ({ children }) => (
  <StyledNav>{children}</StyledNav>
);

export default Nav;
