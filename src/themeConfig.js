import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0095f6",
    },
    secondary: {
      main: "#aed581",
    },
    font: {
      light: "#ffffff",
      grey: "#a2a2a2",
      dark: "#000",
    },
    background: {
      primary: "#fff",
      secondary: "#fafafa",
    },
    border: {
      grey: "#dbdbdb",
      dark: "$000",
    },
    actions: {
      action: "#0095f6",
      danger: "#ed4956",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});
