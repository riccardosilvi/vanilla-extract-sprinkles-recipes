import { themedSection, themedText } from "./themed.css";
import React from "react";
import { useTheme } from "../theme";
import { ThemeToggler } from "./ThemeToggler";

const Title = () => <h1>Welcome to themes</h1>;

export const ContractBased = () => {
  return (
    <article className={themedSection}>
      <Title />
      <ThemeToggler />
    </article>
  );
};
