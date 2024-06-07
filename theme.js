import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Open Sans, sans-serif",
  },
  palette: {
    primary: {
      main: "#10000E", // Sidebar color
    },
    secondary: {
      main: "#FFD6FB", // Tab and some card color
      light: "#F5F5F5",
    },
    error: {
      main: "#E94057", // Error color
    },
    success: {
      main: "#00A12D", // Success color
    },
    info: {
      main: "#9747FF", // Info color
      dark: "#2C3FA5", // Info dark color
    },
    warning: {
      main: "#F27121", // Warning color
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: "#E94057", // Default Button color
          color: "#FFFFFF",
          "&:hover": {
            background: "#E94057",
          },
          borderRadius: "12px",
        },
        variantContainedSecondary: {
          background: "#9747FF", // Secondary Button background color
          color: "#FFFFFF",
          "&:hover": {
            background: "#9747FF",
          },
        },
      },
      variants: [
        {
          props: { variant: "containedSecondary" },
          style: {
            background: "#9747FF",
            color: "#FFFFFF",
            "&:hover": {
              background: "#9747FF",
            },
          },
        },
      ],
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFD6FB", // Tab color
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFD6FB", // Card color
        },
      },
    },
  },
});

export default theme;
