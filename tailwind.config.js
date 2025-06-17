/** @type {import('tailwindcss').Config} */
const designSystemPreset = {
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
      fontSize: {
        // Custom typography scale based on your design
        'heading-1': ['60px', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-2': ['40px', { lineHeight: '1.2', fontWeight: '600' }],
        'heading-3': ['30px', { lineHeight: '1.3', fontWeight: '600' }],
        'heading-4': ['24px', { lineHeight: '1.4', fontWeight: '600' }],
        'heading-5': ['20px', { lineHeight: '1.4', fontWeight: '600' }],
        'heading-6': ['18px', { lineHeight: '1.4', fontWeight: '600' }],
        'body': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'subbody': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'eyebrow': ['14px', { lineHeight: '1.4', fontWeight: '500', letterSpacing: '0.05em' }],
      },
      spacing: {
        // Custom spacing scale based on your design
        // Desktop spacing
        '8': '8px',
        '12': '12px',
        '24': '24px',
        '32': '32px',
        '60': '60px',
        '96': '96px',
        '156': '156px',
        // Mobile spacing
        '18': '18px',
        '40': '40px',
        '68': '68px',
        '128': '128px',
      },
    },
  },
  plugins: [],
};

// For your internal library development
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./.storybook/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [designSystemPreset],
};

// Export the preset for consumers
module.exports.designSystemPreset = designSystemPreset;