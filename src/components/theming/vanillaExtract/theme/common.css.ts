import { style } from "@vanilla-extract/css";
import { contractVars } from "./contract.css";

// for each themed element refer to contract vars
export const themedText = style({
  color: contractVars.color.brand,
  fontFamily: contractVars.font.body,
});

export const themedSection = style({
  padding: contractVars.spacing.section,
  background: contractVars.color.background,
});
