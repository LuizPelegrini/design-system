import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming'
import '@stamblew/react/dist/index.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    // sets the dark theme in component preview
    backgrounds: {
      default: 'dark'
    },
    // sets dark theme in pages (mdx)
    docs: {
      theme: themes.dark
    }
  },
};

export default preview;
