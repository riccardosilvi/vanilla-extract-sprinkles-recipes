import React from "react";
import { ThemeToggler } from "../theme/theme";
import { themedSection } from "../theme/common.css";

const Title = () => <h1>Welcome to themes</h1>;

export const ContractBased = () => {
  return (
    <article className={themedSection}>
      <Title />
      <ThemeToggler />
    </article>
  );
};
