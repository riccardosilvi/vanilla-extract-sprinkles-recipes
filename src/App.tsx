import React from "react";
import reactLogo from "./assets/react.svg";
import { darkThemeClass } from "./styles/theme/darkTheme.css";
import { lightThemeClass } from "./styles/theme/lightTheme.css";

const THEMES = {
    dark: darkThemeClass,
    light: lightThemeClass
};
function App() {
    const [themeClass, setThemeClass] = React.useState(THEMES.light);
  return (
    <div className={`App ${themeClass}`}>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <img
          src="vanilla-extract.svg"
          className="logo"
          alt="vanilla-extract logo"
        />
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Vanilla-Extract</h1>
    </div>
  );
}

export default App;
