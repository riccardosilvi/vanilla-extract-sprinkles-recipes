import React, { PropsWithChildren } from "react";
import { darkThemeClass } from "./contractBased/darkTheme.css";
import { lightThemeClass } from "./contractBased/lightTheme.css";

type ThemeClass = typeof darkThemeClass | typeof lightThemeClass;

type ThemeContextValue = {
  themeClass: ThemeClass;
  toggleTheme: () => void;
};
const ThemeContext = React.createContext<ThemeContextValue>({
  themeClass: lightThemeClass,
  toggleTheme: () => {},
});

type Props = {
  initialThemeClass?: ThemeClass;
};

export const ThemeContextProvider = ({
  children,
  initialThemeClass = lightThemeClass,
}: PropsWithChildren<Props>) => {
  const [theme, setTheme] = React.useState<ThemeClass>(initialThemeClass);
  return (
    <ThemeContext.Provider
      value={{
        themeClass: theme,
        toggleTheme: React.useCallback(() => {
          setTheme((prevTheme) =>
            prevTheme === lightThemeClass ? darkThemeClass : lightThemeClass
          );
        }, []),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return React.useContext(ThemeContext);
};
