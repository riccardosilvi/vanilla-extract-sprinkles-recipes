import React, { PropsWithChildren } from "react";
import {
  stackChild,
  StackChildVariants,
  stackElementClass,
  stackParent,
  StackParentVariants,
} from "./stack.css";

export type StackProps = PropsWithChildren<
  StackParentVariants & StackChildVariants
>;
export const Stack = ({ children, ...props }: StackProps) => {
  const stackParentClass = stackParent(props);
  const stackChildClass = stackChild(props);
  const childrenArray = React.Children.toArray(children);
  return (
    <div className={`stack-parent ${stackElementClass}  ${stackParentClass}`}>
      {childrenArray.map((child, index) => (
        <div className={`stack-child ${stackChildClass}`} key={index}>
          {child}
        </div>
      ))}
    </div>
  );
};
