import React from "react";
import { ThemeToggler } from "../theme/theme";
import { ThemedArticle, ThemedTitle } from "../theme/common";

const Title = () => (
  <ThemedTitle>Welcome to themes with Styled Components</ThemedTitle>
);

export const ContractBased = () => {
  return (
    <ThemedArticle>
      <Title />
      <ThemeToggler />
    </ThemedArticle>
  );
};
