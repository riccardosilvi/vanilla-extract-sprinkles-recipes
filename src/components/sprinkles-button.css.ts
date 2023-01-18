import { vars } from "../styles/theme/baseTheme.css";
import { styleVariants } from "@vanilla-extract/css";
import { sprinkles } from "../styles/sprinkles.css";

const { colors, sizing } = vars;

export const variantPropStyles = {
  primary: {
    background: colors.background.primary,
    color: colors.text.primary,
  },
  secondary: {
    background: colors.background.secondary,
    color: colors.text.secondary,
  },
};
export const variantPropVariants = styleVariants(variantPropStyles, (props) => [
  { fontSize: sizing.xs },
  props,
]);

export const sizeVariants = styleVariants({
  sm: [
    sprinkles({
      py: "2xs",
      px: "xs",
    }),
  ],
  md: [
    sprinkles({
      py: ["xs"],
      px: ["sm"],
    }),
  ],
});
