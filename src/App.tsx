import React from "react";
import reactLogo from "./assets/react.svg";
import { darkThemeClass } from "./styles/theme/darkTheme.css";
import { lightThemeClass } from "./styles/theme/lightTheme.css";
import SprinklesBox from "./components/SprinklesBox";
import { SprinklesButton } from "./components/SprinklesButton";
import { RecipesButton } from "./components/RecipesButton";
import { Stack } from "./components/Stack";
import { SprinklesStack } from "./components/SprinklesStack";

const THEMES = {
  dark: darkThemeClass,
  light: lightThemeClass,
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
      <SprinklesBox p={"2xl"} m={["sm", "lg", "xl", "2xl"]}>
        <h1>Vite + React + Vanilla-Extract</h1>
      </SprinklesBox>
      <SprinklesStack
        direction={["column", null, null, "column-reverse"]}
        spacing={["xs", "2xl", "2xl", "lg"]}
        justify={"center"}
        align={"center"}
      >
        <h1>
          This is a column stack with sprinkles <br />
          features a row stack inside for buttons
          <br />
          responsively applies column-reverse
        </h1>
        <SprinklesStack
          direction={"row"}
          spacing={["2xs", null, null, "2xl"]}
          justify={"space-between"}
          align={"center"}
        >
          <SprinklesButton size={"sm"} variant={"primary"}>
            Drop a Like for sprinkles
          </SprinklesButton>
          <SprinklesButton size={"sm"} variant={"primary"}>
            Drop a Like for recipes
          </SprinklesButton>
        </SprinklesStack>
      </SprinklesStack>
      <Stack
        direction={"column"}
        spacing={"sm"}
        justify={"space-between"}
        align={"center"}
      >
        <h1>This is a column stack with a row stack inside for buttons</h1>
        <Stack
          direction={"row"}
          spacing={"md"}
          justify={"space-between"}
          align={"center"}
        >
          <SprinklesButton size={"sm"} variant={"primary"}>
            Drop a Like for sprinkles
          </SprinklesButton>
          <RecipesButton size={"sm"} variant={"primary"}>
            Drop a Like for recipes
          </RecipesButton>
        </Stack>
      </Stack>
    </div>
  );
}

export default App;
