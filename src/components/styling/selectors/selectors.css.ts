import { style } from "@vanilla-extract/css";

export const hoverCursorPointer = style({
  ":hover": {
    cursor: "pointer",
  },
});

export const hoverColor = style({
  ":hover": {
    color: "var(--yellow-300)",
  },
});

/***** complex selectors ****/

// to refer a parent i have to create a style for it
// use the selectors key and refer current element via &

export const referrableParent = style({});
export const greenIfInReferrableParent = style({
  selectors: {
    [`${referrableParent} > &`]: {
      color: "green",
    },
  },
});

// i can also do the trick with regular classes
// just remember to use & to refer the current element

export const redReferreableParentClass = "red-in-here";
export const redIfInReferrableParent = style({
  selectors: {
    [`div.${redReferreableParentClass} > &`]: {
      color: "red",
    },
  },
});
