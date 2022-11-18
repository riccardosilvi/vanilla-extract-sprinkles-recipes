import React from "react";
import { VanillaExtract } from "./vanillaExtract";
import { StyledComps } from "./styledComponents/StyledComps";

type SectionName = "vextract" | "scomponents";

const THEMING_COMPONENTS = {
  vextract: () => <VanillaExtract />,
  scomponents: () => <StyledComps />,
};

export const ThemingSection = () => {
  const [currentSection, setCurrentSection] =
    React.useState<SectionName>("scomponents");
  const SectionComponent = THEMING_COMPONENTS[currentSection];
  return (
    <div>
      <h1>THEMING</h1>
      <p>Select your theme functionality</p>
      <select
        value={currentSection}
        onChange={(e) => setCurrentSection(e.target.value as SectionName)}
      >
        <option value={"vextract"}>styled components</option>
        <option value={"scomponents"}>vanilla-extract</option>
      </select>
      <SectionComponent />
    </div>
  );
};
