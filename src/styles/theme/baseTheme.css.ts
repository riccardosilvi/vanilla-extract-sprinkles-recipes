import { createThemeContract } from "@vanilla-extract/css";

const SYSTEM_FONT = `Matter YP, Averta Std, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif`;

export const BREAKPOINTS = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1680
} as const;

const borderStyle = {
  default: "1px solid",
  interactive: "2px solid"
};

const radii = {
  xs: `0.25 rem`,
  sm: `0.5 rem`,
  md: `0.75 rem`,
  lg: `1 rem`
};

const spacing = {
  "6xs": `2px`,
  "5xs": `4px`,
  "4xs": `8px`,
  "3xs": `12px`,
  "2xs": `16px`,
  xs: `24px`,
  sm: `32px`,
  md: `40px`,
  lg: `48px`,
  xl: `56px`,
  "2xl": `64px`
};

const sizing = {
  "2xs": `16`,
  xs: `24`,
  sm: `32`,
  md: `40`,
  lg: `48`,
  xl: `56`,
  "2xl": `64`
};

export const baseTheme = {
  font: {
    body: SYSTEM_FONT
  },
  borderStyle,
  radii,
  spacing,
  sizing
};

export const vars = createThemeContract({
  colors: {
    background: {
      primary: ``,
      secondary: ``
    },
    text: {
      primary: ``,
      secondary: ``,
      disable: ``
    }
  },
  font: {
    body: ``
  },
  spacing: {
    "6xs": ``,
    "5xs": ``,
    "4xs": ``,
    "3xs": ``,
    "2xs": ``,
    xs: ``,
    sm: ``,
    md: ``,
    lg: ``,
    xl: ``,
    "2xl": ``
  },
  sizing: {
    "2xs": ``,
    xs: ``,
    sm: ``,
    md: ``,
    lg: ``,
    xl: ``,
    "2xl": ``
  },
  radii: {
    xs: ``,
    sm: ``,
    md: ``,
    lg: ``
  },
  borderStyle: {
    default: ``,
    interactive: ``
  }
});
