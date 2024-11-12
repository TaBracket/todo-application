// theme.js
import { createTheme } from "@mui/material/styles";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#1976d2",
          },
          secondary: {
            main: "#2a9d8f",
          },
          tertiary: {
            main: "#fb6f92",
          },
        }
      : {
          primary: {
            main: "#72ddf7",
          },
          secondary: {
            main: "#60d394",
          },
          tertiary: {
            main: "#f694c1",
          },
        }),
  },
});

export const createAppTheme = (mode) => createTheme(getDesignTokens(mode));
