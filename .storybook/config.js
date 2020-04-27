import React from "react";
import {configure, addParameters, addDecorator} from '@storybook/react';
import { ThemeProvider } from "styled-components";
import {themes} from '@storybook/theming';

import {DocsPage, DocsContainer} from '@storybook/addon-docs/blocks';
import GlobalStyles from "../src/components/particles/globalStyles";

const req = require.context('../src', true, /\.story\.(ts|tsx|mdx)$/);

addParameters({
  options: {
    theme: themes.dark,
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});


const themeDefault = {
	"primary": "#4E2ECD"
}


const GlobalWrapper = storyFn => (
		<ThemeProvider theme={themes.dark}>	
			<GlobalStyles/>
			{storyFn()}
		</ThemeProvider>
);

addDecorator(GlobalWrapper);