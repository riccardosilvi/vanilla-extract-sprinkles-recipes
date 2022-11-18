import { style, createVar } from "@vanilla-extract/css";
import { blackVar } from "../../../app.css";

// scopedVar
const darkenedBlueScopedVar = createVar();

// variables can be recalled programmatically
export const sectionStyle = style({
  backgroundColor: blackVar,
});

// or can be recalled by hardcoding them
export const textStyle = style({
  color: "var(--white)",
});

export const scopedBlue = style({
  vars: {
    [darkenedBlueScopedVar]: "blue",
  },
});

export const scopedVarBorder = style({
  borderStyle: "dashed",
  borderColor: `${darkenedBlueScopedVar}`,
});
