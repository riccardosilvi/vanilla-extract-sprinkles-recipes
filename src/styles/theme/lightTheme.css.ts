import { createTheme } from "@vanilla-extract/css";
import { baseTheme, vars } from "./baseTheme.css";

export const lightThemeClass = createTheme(vars, {
  ...baseTheme,
  colors: {
    background: {
      primary: `#FFFFFF`,
      secondary: `#E0E0E0`
    },
    text: {
      primary: `#000000`,
      secondary: `#7C7C7C`,
      disable: `#BCBCBC`
    }
  }
});
