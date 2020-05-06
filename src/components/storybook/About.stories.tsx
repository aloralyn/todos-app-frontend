import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";

const Container = styled.div`
  margin: 20px;
  color: #fff;
  line-height: 20px;
`;

const StyledLink = styled.a`
  color: #fff;
  :active,
  :hover {
    color: #ff00bf;
  }
`;

storiesOf("About", module).add("Welcome!", () => (
  <Container>
    <h3>Brief Intro:</h3>
    <div>
      <p>
        This is a UI component dev environment for a toy "Todo app" project.
        From a UI design perspective, the goal of the project was to (1) learn
        and implement Storybook for a React app and (2) dive deep into
        understanding Brad Frost's{" "}
        <StyledLink
          href="https://bradfrost.com/blog/post/atomic-web-design/"
          target="_blank"
        >
          Atomic Design
        </StyledLink>{" "}
        and putting it practice.
      </p>
    </div>
    <div>
      <p>
        Inspired by chemistry, atomic design is a methodology for architecturing
        design systems. This storybook is organized by the five distinct levels
        in atomic design:
      </p>
      <ul>
        <li>Atoms</li>
        <li>Molecules</li>
        <li>Organisms</li>
        <li>Templates</li>
        <li>Pages</li>
      </ul>
    </div>
  </Container>
));
