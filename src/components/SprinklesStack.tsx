import React, { PropsWithChildren } from "react";
import {
  normalizeResponsiveValue,
  responsiveArray,
  responsiveSupportedProps,
  ResponsiveValue,
  sprinkles,
  SprinklesFlexboxProps,
} from "../styles/sprinkles.css";
import { spacing as spacingRules, vars } from "../styles/theme/baseTheme.css";
import SprinklesBox from "./SprinklesBox";
import { baseStackStyle } from "./sprinkles-stack.css";

export type StackProps = PropsWithChildren<{
  direction: ResponsiveValue<
    typeof responsiveSupportedProps.flexDirection[number]
  >;
  align: SprinklesFlexboxProps["alignItems"];
  justify: SprinklesFlexboxProps["justifyContent"];
  spacing: ResponsiveValue<keyof typeof spacingRules>;
}>;

/**
 *
 * @param partial the input of a sprinkles prop
 *
 * @return fills a value for each breakpoint avoiding null entries
 * @example (partial :["column", null, null, "column-reverse"] ) => returns {
 *     "xs": "column",
 *     "sm": "column",
 *     "md": "column",
 *     "lg": "column-reverse",
 *     "xl": "column-reverse",
 *     "2xl": "column-reverse"
 * }
 */
const getFullyResponsiveValue = <T extends string | number>(
  partial: ResponsiveValue<T>
): Record<typeof responsiveArray[number], T> => {
  const normalized = normalizeResponsiveValue(partial);
  return responsiveArray.reduce((acc, breakpoint, currentIndex, brsArr) => {
    return Object.assign(acc, {
      [breakpoint]: normalized[breakpoint] ?? acc[brsArr[currentIndex - 1]],
    });
  }, {} as Record<typeof responsiveArray[number], T>);
};

export const SprinklesStack = ({ children, spacing, ...props }: StackProps) => {
  const directionsByBreakpoints = getFullyResponsiveValue(props.direction);
  const spacingSizes = getFullyResponsiveValue(spacing);
  console.log(directionsByBreakpoints, spacingSizes);
  const gaps = responsiveArray.reduce(
    (acc, breakpoint) => {
      const direction = directionsByBreakpoints[breakpoint];
      const size = spacingSizes[breakpoint];

      const isRow = direction.includes("row");
      return {
        columnGap: Object.assign(acc.columnGap, {
          [breakpoint]: isRow ? size : null,
        }),
        rowGap: Object.assign(acc.rowGap, {
          [breakpoint]: !isRow ? size : null,
        }),
      };
    },
    {
      columnGap: {},
      rowGap: {},
    } as Record<
      "columnGap" | "rowGap",
      ResponsiveValue<keyof typeof spacingRules>
    >
  );
  console.log(gaps);
  return (
    <SprinklesBox
      className={baseStackStyle}
      flexDirection={props.direction}
      alignItems={props.align}
      justifyContent={props.justify}
      {...gaps}
    >
      {children}
    </SprinklesBox>
  );
};
