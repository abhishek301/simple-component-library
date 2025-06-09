/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./.storybook/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    colors: {
      lavender: '#f2f0f5',
      primary: '#d71923',
      muted: '#76757a',
      dark: '#1c1c1e',
      white: '#ffffff',
      black: '#000000',
      'gray-lighter': '#e3e3e3',
      'gray-light': '#c8c8c8',
      'gray-mid': '#d3d3d3',
      },
      fontFamily: {
        // Set Inter as default sans font with system fallbacks
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        // Also provide it as explicit option
        'inter': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};