import { BREAKPOINTS, vars } from "./theme/baseTheme.css";
import {
  ConditionalValue,
  createMapValueFn,
  createNormalizeValueFn,
  createSprinkles,
  defineProperties,
} from "@vanilla-extract/sprinkles";

const { spacing } = vars;
function transformBreakpoints<Output>(input: Record<string, any>) {
  let responsiveConditions!: Output;

  Object.entries(input).forEach(([key, value]) => {
    if (value === 0) {
      responsiveConditions = {
        ...responsiveConditions,
        [key]: {},
      };
    } else {
      responsiveConditions = {
        ...responsiveConditions,
        [key]: {
          "@media": `screen and (min-width: ${value}px)`,
        },
      };
    }
  });

  return responsiveConditions;
}

export const responsiveSupportedProps = {
  position: [`relative`],
  display: [`none`, `block`, `inline`, `inline-block`, `flex`],
  alignItems: [`flex-start`, `center`, `flex-end`, `baseline`],
  justifyContent: [`flex-start`, `center`, `flex-end`, `space-between`],
  flexDirection: [`row`, `row-reverse`, `column`, `column-reverse`],
  flexWrap: [`wrap`, `nowrap`],
  padding: spacing,
  paddingTop: spacing,
  paddingBottom: spacing,
  paddingLeft: spacing,
  paddingRight: spacing,
  margin: spacing,
  marginTop: spacing,
  marginBottom: spacing,
  marginLeft: spacing,
  marginRight: spacing,
  columnGap: spacing,
  rowGap: spacing,
} as const;

export const responsiveArray = ["xs", "sm", "md", "lg", "xl", "2xl"] as const;

const responsiveProperties = defineProperties({
  conditions:
    transformBreakpoints<Record<keyof typeof BREAKPOINTS, {}>>(BREAKPOINTS),
  responsiveArray: responsiveArray,
  defaultCondition: "xs" as const,
  properties: responsiveSupportedProps,
  // this composes rules and must be ordered!
  // "px" and "py" are after "p" so they can override it
  shorthands: {
    p: [`paddingTop`, `paddingBottom`, `paddingLeft`, `paddingRight`],
    px: [`paddingLeft`, `paddingRight`],
    py: [`paddingTop`, `paddingBottom`],
    m: [`marginTop`, `marginBottom`, `marginLeft`, `marginRight`],
    mx: [`marginLeft`, `marginRight`],
    my: [`marginTop`, `marginBottom`],
  },
});

export const sprinkles = createSprinkles(responsiveProperties);

export const mapResponsiveValue = createMapValueFn(responsiveProperties);

export const normalizeResponsiveValue =
  createNormalizeValueFn(responsiveProperties);

export type ResponsiveValue<Value extends string | number> = ConditionalValue<
  typeof responsiveProperties,
  Value
>;

export type Sprinkles = Parameters<typeof sprinkles>[0];

// Props can be grouped by picking from sprinkles
export type SprinklesSpaceProps = Pick<
  Sprinkles,
  | "padding"
  | "paddingTop"
  | "paddingBottom"
  | "paddingLeft"
  | "paddingRight"
  | "margin"
  | "marginTop"
  | "marginBottom"
  | "marginLeft"
  | "marginRight"
  | "p"
  | "px"
  | "py"
  | "m"
  | "mx"
  | "my"
>;

export type SprinklesFlexboxProps = Pick<
  Sprinkles,
  "justifyContent" | "alignItems" | "flexDirection" | "flexWrap"
>;
