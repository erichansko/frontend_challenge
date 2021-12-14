module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
  darkMode: false,
  theme: {
    screens: {
      xs: '556px',
      sm: '768px',
      md: '1024px',
      lg: '1366px',
      xl: '1921px',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
