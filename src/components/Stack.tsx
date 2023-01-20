import React, { PropsWithChildren } from "react";
import { stackParent, StackVariants } from "./stack.css";

export type StackProps = PropsWithChildren<StackVariants>;
export const Stack = ({ children, ...props }: StackProps) => (
  <div className={`stack-parent ${stackParent(props)}`}>{children}</div>
);
