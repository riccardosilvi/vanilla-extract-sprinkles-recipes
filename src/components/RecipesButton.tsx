import React, { PropsWithChildren } from "react";
import { button, ButtonVariants } from "./recipes-button.css";

export type RecipesButtonProps = PropsWithChildren<
  React.HTMLAttributes<HTMLButtonElement> & ButtonVariants
>;

export const RecipesButton = ({
  className = "",
  children,
  size,
  variant,
  ...rest
}: RecipesButtonProps) => {
  const recipeClass = button({ size, variant });
  return (
    <button className={`recipes-button ${className} ${recipeClass}`} {...rest}>
      {children}
    </button>
  );
};
