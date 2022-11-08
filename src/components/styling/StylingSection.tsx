import { CssVars } from "./cssVars";
import { Basics } from "./basics";
import { MediaQueries } from "./mediaQueries";
import { Selectors } from "./selectors";
import { More } from "./more";

export const StylingSection = () => {
  return (
    <div>
      <Basics />
      <CssVars />
      <MediaQueries />
      <Selectors />
      <More />
    </div>
  );
};
