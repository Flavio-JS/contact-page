import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { themes } from "@storybook/theming";
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../src/styles/Global.styles";
import { withNextFont } from "./decorators/withNextFont";
import { withQueryClient } from "./decorators/withClientProvider";
import { initialize, mswDecorator } from "msw-storybook-addon";
import { DefaultTheme } from "../src/styles/theme";

initialize();

const preview: Preview = {
  decorators: [
    withNextFont,
    withQueryClient,
    withThemeFromJSXProvider({
      defaultTheme: "default",
      Provider: ThemeProvider,
      themes: DefaultTheme,
      GlobalStyles: GlobalStyle,
    }),
    mswDecorator,
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      themes: themes.dark,
    },
  },
};

export default preview;
