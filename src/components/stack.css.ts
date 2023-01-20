import { style, StyleRule } from "@vanilla-extract/css";
import { spacing as spacingRules, vars } from "../styles/theme/baseTheme.css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { Property } from "csstype";
import React from "react";

type CssPropertyValues<
  T extends keyof React.CSSProperties,
  N extends React.CSSProperties[T]
> = readonly Extract<React.CSSProperties[T], N>[];

const FLEX_DIRECTIONS: CssPropertyValues<
  "flexDirection",
  "row" | "row-reverse" | "column" | "column-reverse"
> = ["row", "row-reverse", "column", "column-reverse"] as const;

const ALIGN_RULES: CssPropertyValues<
  "alignItems",
  `flex-start` | `center` | `flex-end` | `baseline`
> = [`flex-start`, `center`, `flex-end`, `baseline`] as const;

const JUSTIFY_RULES: CssPropertyValues<
  "justifyContent",
  `flex-start` | `center` | `flex-end` | `space-between`
> = [`flex-start`, `center`, `flex-end`, `space-between`] as const;

type MarginRule =
  | Property.MarginTop
  | Property.MarginBottom
  | Property.MarginLeft
  | Property.MarginRight;

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

const mapVariants = <VariantName extends Readonly<string>>(
  variantNames: Readonly<VariantName[]>,
  mapFn?: (variantName: VariantName) => StyleRule
): Record<VariantName[][number], StyleRule> =>
  variantNames.reduce<Record<VariantName, StyleRule>>(
    (acc, variantName) =>
      Object.assign(acc, {
        [variantName]: mapFn?.(variantName) ?? {},
      }),
    {} as Record<VariantName, StyleRule>
  );

export const stackParent = recipe({
  base: { display: "flex" },
  variants: {
    direction: mapVariants(FLEX_DIRECTIONS, (variantName) => ({
      flexDirection: variantName,
    })),
    align: mapVariants(ALIGN_RULES, (variantName) => ({
      alignItems: variantName,
    })),
    justify: mapVariants(JUSTIFY_RULES, (variantName) => ({
      justifyContent: variantName,
    })),
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
    direction: mapVariants(FLEX_DIRECTIONS),
    spacing: mapVariants(SPACINGS_KEYS),
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
            [RULE_BY_DIRECTION[direction]]: vars.spacing[spacing],
          },
        },
      }),
    }));
  }),
});

export type StackParentVariants = RecipeVariants<typeof stackParent>;
export type StackChildVariants = RecipeVariants<typeof stackChild>;
