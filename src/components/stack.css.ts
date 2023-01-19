import { globalStyle, style, StyleRule } from "@vanilla-extract/css";
import { spacing as spacingRules, vars } from "../styles/theme/baseTheme.css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { Globals, Property } from "csstype";

const FLEX_DIRECTIONS = [
  "row",
  "row-reverse",
  "column",
  "column-reverse",
] as readonly Exclude<Property.FlexDirection, Globals>[];

const ALIGN_RULES = [`flex-start`, `center`, `flex-end`, `baseline`] as const;
const JUSTIFY_RULES = [
  `flex-start`,
  `center`,
  `flex-end`,
  `space-between`,
] as const;

type MarginRule =
  | Property.MarginTop
  | Property.MarginBottom
  | Property.MarginLeft
  | Property.MarginRight;

export type SpacingValue = keyof typeof vars.spacing;

const RULE_BY_DIRECTION: Record<typeof FLEX_DIRECTIONS[number], MarginRule> = {
  row: "marginLeft",
  column: "marginTop",
  "row-reverse": "marginRight",
  "column-reverse": "marginBottom",
} as const;

const SPACINGS_KEYS = Object.keys(spacingRules) as Array<
  keyof typeof spacingRules
>;

export const stackElementClass = style({});

export const stackParent = recipe({
  base: { display: "flex" },
  variants: {
    direction: {
      row: {
        flexDirection: "row",
      },
      "row-reverse": {
        flexDirection: "row-reverse",
      },
      column: {
        flexDirection: "column",
      },
      "column-reverse": {
        flexDirection: "column-reverse",
      },
    },
    align: ALIGN_RULES.reduce<Record<typeof ALIGN_RULES[number], StyleRule>>(
      (acc, key) =>
        Object.assign(acc, {
          [key]: {
            alignItems: key,
          },
        }),
      {} as Record<typeof ALIGN_RULES[number], StyleRule>
    ),
    justify: JUSTIFY_RULES.reduce<
      Record<typeof JUSTIFY_RULES[number], StyleRule>
    >(
      (acc, key) =>
        Object.assign(acc, {
          [key]: {
            justifyContent: key,
          },
        }),
      {} as Record<typeof JUSTIFY_RULES[number], StyleRule>
    ),
    spacing: SPACINGS_KEYS.reduce<
      Record<typeof SPACINGS_KEYS[number], StyleRule>
    >(
      (acc, key) => Object.assign(acc, { [key]: {} }),
      {} as Record<typeof SPACINGS_KEYS[number], StyleRule>
    ),
  },
});
export const stackChild = recipe({
  base: style({
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
  }),
  variants: {
    direction: {
      row: {},
      "row-reverse": {},
      column: {},
      "column-reverse": {},
    },
    align: ALIGN_RULES.reduce<Record<typeof ALIGN_RULES[number], StyleRule>>(
      (acc, key) =>
        Object.assign(acc, {
          [key]: {},
        }),
      {} as Record<typeof ALIGN_RULES[number], StyleRule>
    ),
    justify: JUSTIFY_RULES.reduce<
      Record<typeof JUSTIFY_RULES[number], StyleRule>
    >(
      (acc, key) =>
        Object.assign(acc, {
          [key]: {},
        }),
      {} as Record<typeof JUSTIFY_RULES[number], StyleRule>
    ),
    spacing: SPACINGS_KEYS.reduce<
      Record<typeof SPACINGS_KEYS[number], StyleRule>
    >(
      (acc, key) => Object.assign(acc, { [key]: {} }),
      {} as Record<typeof SPACINGS_KEYS[number], StyleRule>
    ),
  },
  compoundVariants: FLEX_DIRECTIONS.flatMap((direction) => {
    return SPACINGS_KEYS.map((spacing) => ({
      variants: {
        direction,
        spacing,
      },
      style: style({
        selectors: {
          [`${stackElementClass} > & + &`]: {
            [RULE_BY_DIRECTION[direction]]: spacingRules[spacing],
          },
        },
      }),
    }));
  }),
});

export type StackParentVariants = RecipeVariants<typeof stackParent>;
export type StackChildVariants = RecipeVariants<typeof stackChild>;
