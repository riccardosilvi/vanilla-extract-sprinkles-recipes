import React from "react";
import { ThemeToggler } from "../theme/theme";
import { themedSection, themedText } from "../theme/common.css";

const Title = () => (
  <h1 className={themedText}>Welcome to themes with Vanilla Extract</h1>
);

export const ContractBased = () => {
  return (
    <article className={themedSection}>
      <Title />
      <ThemeToggler />
    </article>
  );
};
