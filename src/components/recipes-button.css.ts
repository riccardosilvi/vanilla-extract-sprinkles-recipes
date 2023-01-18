import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { vars } from "../styles/theme/baseTheme.css";

const { colors, sizing, spacing } = vars;
export const button = recipe({
  //common styles for element
  base: {
    fontSize: sizing.xs,
  },
  variants: {
    variant: {
      primary: {
        background: colors.background.primary,
        color: colors.text.primary,
      },
      secondary: {
        background: colors.background.secondary,
        color: colors.text.secondary,
      },
    },
    size: {
      sm: {
        paddingTop: spacing["2xs"],
        paddingBottom: spacing["2xs"],
        paddingLeft: spacing["xs"],
        paddingRight: spacing["xs"],
      },
      md: {
        paddingTop: spacing["xs"],
        paddingBottom: spacing["xs"],
        paddingLeft: spacing["sm"],
        paddingRight: spacing["sm"],
      },
    },
  },
});

// util type generation!!!
export type ButtonVariants = RecipeVariants<typeof button>;
