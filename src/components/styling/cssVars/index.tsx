import {
  textStyle,
  scopedVarBorder,
  sectionStyle,
  scopedBlue,
} from "./cssVars.css";

export const CssVars = () => {
  return (
    <section className={`css-vars-section ${sectionStyle}`}>
      <h2>CSS vars</h2>
      <p className={textStyle}>
        I can reference a global variable through a "style" call (color:
        "var(--white)")
      </p>
      <h3 style={{ color: "var(--orange-300)" }}>
        I can reference it regularly in trough a style object
      </h3>
      <div className={scopedBlue}>
        <h4 className={`${scopedVarBorder} ${textStyle}`}>
          I can create a scoped var and use it inside the parent element. <br />
          In this case it's working because the wrapping div creates the var.
          <br />
          The dashed border is blue
        </h4>
      </div>
      <h4 className={`${scopedVarBorder} ${textStyle}`}>
        If i try to use a scoped var outside its parent element nothing happens
        <br />
        The dashed border is white because the scoped var has no effect here
      </h4>
    </section>
  );
};
