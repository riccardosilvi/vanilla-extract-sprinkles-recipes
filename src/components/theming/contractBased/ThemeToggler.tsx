import { themedText } from "./themed.css";
import React from "react";
import { useTheme } from "../theme";

export const ThemeToggler = () => {
  const { toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} className={themedText}>
      ToggleTheme
    </button>
  );
};
