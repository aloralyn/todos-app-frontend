import React from "react";
import { addParameters, addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { themes } from "@storybook/theming";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
import StoryRouter from "storybook-react-router";
import GlobalStyles from "../src/components/particles/globalStyles";
import ProviderWrapper from "../src/components/storybook/decorators/Provider";
import configureStore from "../src/store";

const store = configureStore();
const withProvider = (story) => (
  <ProviderWrapper store={store}>{story()}</ProviderWrapper>
);

addParameters({
  options: {
    theme: themes.dark,
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

const GlobalWrapper = (storyFn) => (
  <ThemeProvider theme={themes.dark}>
    <GlobalStyles />
    {storyFn()}
  </ThemeProvider>
);

addDecorator(GlobalWrapper);
addDecorator(withProvider);
addDecorator(StoryRouter());
