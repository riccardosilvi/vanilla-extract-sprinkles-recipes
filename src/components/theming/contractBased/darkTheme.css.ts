import { createTheme } from "@vanilla-extract/css";
import { contractVars } from "./contract.css";

export const darkThemeClass = createTheme(contractVars, {
  spacing: {
    base: "8",
    section: "16",
  },
  color: {
    brand: "red",
    background: "black",
  },
  font: {
    body: "helvetica",
  },
});
