module.exports = {
  content: ["./src/**/*.{html,js,njk}"],
  theme: {
    fontFamily: {
      sans: ['Avenir Next', 'Avenir', 'Segoe UI', 'Helvetica', 'helvetica', 'sans-serif'],
    },
    extend: {
      colors: {
        lightspeed: {
          green: '#85F8A2',
          blue: '#4A84BE',
          purple: '#7060B4',
        }
      }
    }
  },
  plugins: [],
}