import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { StylingSection } from "./components/styling/StylingSection";
import { AppContainer, appStyle } from "./app.css";
import { ThemingSection } from "./components/theming/ThemingSection";
import { CompositionSection } from "./components/composition/CompositionSection";

type SectionName = "styling" | "theming" | "composition";

const SECTIONS_COMPONENTS = {
  theming: () => <ThemingSection />,
  styling: () => <StylingSection />,
  composition: () => <CompositionSection />,
};

function App() {
  const [currentSection, setCurrentSection] = useState<SectionName>("theming");

  const SectionComponent = SECTIONS_COMPONENTS[currentSection];

  return (
    <div className={`App ${appStyle} ${AppContainer}`}>
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
      <select
        value={currentSection}
        onChange={(e) => setCurrentSection(e.target.value as SectionName)}
      >
        <option value={"theming"}>theming</option>
        <option value={"styling"}>styling</option>
        <option value={"composition"}>composition</option>
      </select>
      <SectionComponent />
    </div>
  );
}

export default App;
