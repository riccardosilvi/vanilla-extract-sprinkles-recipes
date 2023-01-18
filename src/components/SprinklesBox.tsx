import React, { PropsWithChildren } from "react";
import {
  Sprinkles,
  SprinklesSpaceProps,
  sprinkles,
} from "../styles/sprinkles.css";

export type SprinklesBoxProps = PropsWithChildren<
  React.HTMLAttributes<HTMLDivElement> & SprinklesSpaceProps
>;
export const SprinklesBox = ({
  className = "",
  children,
  ...rest
}: SprinklesBoxProps) => {
  return (
    <div className={`sprinkles-box ${className} ${sprinkles(rest)}`} {...rest}>
      {children}
    </div>
  );
};

export default SprinklesBox;
