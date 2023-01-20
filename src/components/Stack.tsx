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
export const Stack = ({
  children,
  spacing,
  justify,
  align,
  direction,
}: StackProps) => {
  const stackParentClass = stackParent({
    direction,
    align,
    justify,
  });
  const stackChildClass = stackChild({
    direction,
    spacing,
  });
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
