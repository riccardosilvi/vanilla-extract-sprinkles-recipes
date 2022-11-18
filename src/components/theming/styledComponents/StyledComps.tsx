import { ThemeContextProvider } from "./theme/theme";
import { ThemedSection, ThemedText } from "./theme/common";
import { ContractBased } from "./contractBased";
import React from "react";

const Instructions = () => (
  <ThemedSection>
    <ThemedText>
      With styled components or any other Css In JS solution what you get is
      that every styled element gets rerendered on the page on theme toggled.
      Check the profiler to spot and feel how this could scale in a production
      site
    </ThemedText>
  </ThemedSection>
);
export const StyledComps = () => (
  <ThemeContextProvider>
    <ThemedSection>
      <ContractBased />
    </ThemedSection>
    <Instructions />
  </ThemeContextProvider>
);
