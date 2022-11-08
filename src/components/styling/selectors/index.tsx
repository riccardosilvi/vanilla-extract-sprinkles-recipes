import {
  greenIfInReferrableParent,
  hoverColor,
  hoverCursorPointer,
  redIfInReferrableParent,
  redReferreableParentClass,
  referrableParent,
} from "./selectors.css";

export const Selectors = () => {
  return (
    <section>
      <h2>Selectors</h2>
      <p className={`${hoverColor} ${hoverCursorPointer}`}>
        simple pseudo selectors like ":hover" can be written straight
      </p>
      <div>
        <h3 className={`${referrableParent} `}>
          referring a child from parent is a little bit cumbersome...
          <br />
          you have to refer the possible parent from the child creating a style
          for it.
          <br />
          <span className={greenIfInReferrableParent}>
            This becomes green because is in the expected parent
          </span>
        </h3>
      </div>
      <div className={redReferreableParentClass}>
        <p className={redIfInReferrableParent}>
          This one does the same just with an hardcoded css selector. Text is
          red
        </p>
      </div>
    </section>
  );
};
