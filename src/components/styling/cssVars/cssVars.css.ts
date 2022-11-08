import { style, createVar } from "@vanilla-extract/css";

// scopedVar
const darkenedBlueScopedVar = createVar();

export const sectionStyle = style({
  backgroundColor: "var(--black)",
});

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
