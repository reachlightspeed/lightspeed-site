module.exports = {
  theme: {
    screens: {
      xs: "336px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
    fontFamily: {
      body: [
        "-apple-system",
        '"SF Pro Text"',
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
    extend: {
      colors: {
        spacepurple: {
          lightest: "#C5CDFF",
          lighter: "#839AEC",
          light: "#5675E6",
          default: "#3b5ee2",
          dark: "#1E2A61",
          darker: "#141421",
          darkest: "#06060F",
        },
      },
      borderWidth: {
        default: "1px",
        "0": "0",
        "2": "2px",
        "3": "3px",
        "4": "4px",
        "6": "6px",
        "8": "8px",
      },
      lineHeight: {
        none: 1,
        tight: 1.125,
        snug: 1.25,
        normal: 1.5,
        relaxed: 1.625,
        loose: 2,
      },
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
      },
      spacing: {
        "-3px": "-3px",
      },
      maxWidth: {
        "7xl": "80rem",
        "8xl": "90rem",
      },
    },
  },
  variants: {
    borderWidth: [
      "responsive",
      "hover",
      "focus",
      "group-hover"
    ],
    backgroundColor: [
      "dark",
      "dark-hover",
      "dark-group-hover",
      "dark-even",
      "dark-odd",
    ],
    borderColor: [
      "responsive",
      "hover",
      "focus",
      "group-hover",
      "dark",
      "dark-focus",
      "dark-focus-within",
    ],
    textColor: [
      "responsive",
      "hover",
      "active",
      "dark",
      "dark-hover",
      "dark-active",
      "dark-placeholder",
    ],
    opacity: ["dark"],
  },
  plugins: [require("tailwindcss-dark-mode")()],
};