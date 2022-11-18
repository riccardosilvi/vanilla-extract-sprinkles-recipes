import React, { PropsWithChildren } from "react";
import { lightThemeClass } from "../../vanillaExtract/theme/lightTheme.css";
import { darkThemeClass } from "../../vanillaExtract/theme/darkTheme.css";
import { themedText } from "../../vanillaExtract/theme/common.css";
import { ThemedButton } from "./common";
import { ThemeProvider } from "styled-components";
export type SCTheme = {
  spacing: {
    base: string | number;
    section: string | number;
  };
  color: {
    brand: string;
    background: string;
  };
  font: {
    body: string;
  };
};
export const lightTheme = {
  spacing: {
    base: 8,
    section: 16,
  },
  color: {
    brand: "blue",
    background: "yellow",
  },
  font: {
    body: "helvetica",
  },
};

export const darkTheme = {
  spacing: {
    base: 8,
    section: 16,
  },
  color: {
    brand: "red",
    background: "black",
  },
  font: {
    body: "helvetica",
  },
};
type ThemeName = "dark" | "light";

const themes: Record<ThemeName, SCTheme> = {
  dark: darkTheme,
  light: lightTheme,
};

type ThemeContextValue = {
  toggleTheme: () => void;
};
const ThemeContext = React.createContext<ThemeContextValue>({
  toggleTheme: () => {},
});
type Props = {
  initialThemeName?: ThemeName;
};

export const ThemeContextProvider = ({
  children,
  initialThemeName = "light",
}: PropsWithChildren<Props>) => {
  const [themeName, setThemeName] = React.useState<ThemeName>(initialThemeName);
  return (
    <ThemeContext.Provider
      value={{
        toggleTheme: React.useCallback(() => {
          setThemeName((prevThemeName) =>
            prevThemeName === "light" ? "dark" : "light"
          );
        }, []),
      }}
    >
      <ThemeProvider theme={themes[themeName]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return React.useContext(ThemeContext);
};

export const ThemeToggler = () => {
  const { toggleTheme } = useTheme();
  return <ThemedButton onClick={toggleTheme}>ToggleTheme</ThemedButton>;
};
