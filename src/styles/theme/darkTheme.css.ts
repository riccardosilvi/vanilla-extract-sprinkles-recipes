import { createTheme } from "@vanilla-extract/css";
import { baseTheme, vars } from "./baseTheme.css";

export const darkThemeClass = createTheme(vars, {
  ...baseTheme,
  colors: {
    background: {
      primary: `#000000`,
      secondary: `#131312`
    },
    text: {
      primary: `#FFFFFF`,
      secondary: `#7C7C7C`,
      disable: `#5A5A5A`
    }
  }
});
