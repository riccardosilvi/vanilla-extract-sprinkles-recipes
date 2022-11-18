import { createThemeContract } from "@vanilla-extract/css";

// this is empty because is kind of an "interface"
// and its only purpose is to create a base to be expanded
export const contractVars = createThemeContract({
  spacing: {
    base: null,
    section: null,
  },
  color: {
    brand: null,
    background: null,
  },
  font: {
    body: null,
  },
});
