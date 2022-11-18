import React, { PropsWithChildren } from "react";
import { ContractBased } from "./contractBased";
import { ThemeContextProvider, useTheme } from "./theme/theme";
import { themedText } from "./theme/common.css";

const SectionContainer = ({ children }: PropsWithChildren<{}>) => {
  const { themeClass } = useTheme();
  return <section className={themeClass}>{children}</section>;
};

const Instructions = () => (
  <section>
    <p className={themedText}>
      The good part is that changing a theme triggers way fewer renders since
      the css is already in place the only re-rendering components are the one
      connected to context directly! All the components are anyway connected to
      the theme since it is just a class in the top-tree element
      SectionContainer
    </p>
  </section>
);
export const ThemingSection = () => {
  return (
    <ThemeContextProvider>
      <SectionContainer>
        <ContractBased />
      </SectionContainer>
      <Instructions />
    </ThemeContextProvider>
  );
};
