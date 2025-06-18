import type { Preview } from '@storybook/react';
import '../src/index.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'gray-lighter',
      values: [
        { name: 'gray-lighter', value: '#e3e3e3' },
        { name: 'white', value: '#ffffff' },
        { name: 'dark', value: '#1c1c1e' },
      ],
    },
  },
};

export default preview;
