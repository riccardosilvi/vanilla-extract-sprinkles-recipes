import { StyleRule } from "@vanilla-extract/css";
import { spacing as spacingRules, vars } from "../styles/theme/baseTheme.css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
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

const SPACINGS_KEYS = Object.keys(spacingRules) as Array<
  keyof typeof spacingRules
>;

const mapVariantValues = <V extends Readonly<string>>(
  variantValues: Readonly<V[]>,
  mapFn?: (value: V) => StyleRule
): Record<V, StyleRule> =>
  variantValues.reduce<Record<V, StyleRule>>(
    (acc, value) =>
      Object.assign(acc, {
        [value]: mapFn?.(value) ?? {},
      }),
    {} as Record<V, StyleRule>
  );

export const stackParent = recipe({
  base: { display: "flex" },
  variants: {
    direction: mapVariantValues(FLEX_DIRECTIONS, (variantValue) => ({
      flexDirection: variantValue,
    })),
    align: mapVariantValues(ALIGN_RULES, (variantValue) => ({
      alignItems: variantValue,
    })),
    justify: mapVariantValues(JUSTIFY_RULES, (variantValue) => ({
      justifyContent: variantValue,
    })),
    spacing: mapVariantValues(SPACINGS_KEYS),
  },
  compoundVariants: FLEX_DIRECTIONS.flatMap((direction) => {
    return SPACINGS_KEYS.map((spacing) => ({
      variants: {
        direction,
        spacing,
      },
      style: {
        columnGap: direction.includes("row") ? vars.spacing[spacing] : 0,
        rowGap: direction.includes("column") ? vars.spacing[spacing] : 0,
      },
    }));
  }),
});

export type StackVariants = RecipeVariants<typeof stackParent>;
