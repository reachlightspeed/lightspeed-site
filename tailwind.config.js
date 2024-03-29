module.exports = {
  content: ["./src/**/*.{html,js,njk,md}"],
  theme: {
    fontFamily: {
      sans: ['Avenir Next', 'Avenir', 'Segoe UI', 'Helvetica', 'arial', 'sans-serif'],
      headline: ['Avenir Next', 'Avenir', 'Century Gothic', 'Helvetica', 'arial', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        lightspeed: {
          green: '#85F8A2',
          teal: '#46999B',
          teal_dark: '#128387',
          blue: '#4A84BE',
          purple: '#7060B4',
          night: '#0F153A',
          midnight: '#0A0C2A',
        }
      },
      fontSize: {
        'md': '.9375rem',
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}