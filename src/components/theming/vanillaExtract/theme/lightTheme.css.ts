import { createTheme } from "@vanilla-extract/css";
import { contractVars } from "./contract.css";

export const lightThemeClass = createTheme(contractVars, {
  spacing: {
    base: "8",
    section: "16",
  },
  color: {
    brand: "blue",
    background: "yellow",
  },
  font: {
    body: "helvetica",
  },
});
