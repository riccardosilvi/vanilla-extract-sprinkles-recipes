import React, { PropsWithChildren } from "react";
import { sizeVariants, variantPropVariants } from "./sprinkles-button.css";

export type SprinklesButtonProps = PropsWithChildren<
  React.HTMLAttributes<HTMLButtonElement> & {
    size: "sm" | "md";
    variant: "primary" | "secondary";
  }
>;
export const SprinklesButton = ({
  className = "",
  children,
  size,
  variant,
  ...rest
}: SprinklesButtonProps) => {
  const sizeClass = sizeVariants[size];
  const variantClass = variantPropVariants[variant];
  return (
    <button
      className={`sprinkles-button ${className} ${sizeClass} ${variantClass}`}
      {...rest}
    >
      {children}
    </button>
  );
};
