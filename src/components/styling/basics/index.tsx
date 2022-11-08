export const Basics = () => {
  return (
    <section className={"basics-section"}>
      <h2>The basics</h2>
      <ul>
        <li>Css properties are camelcase</li>
        <li>
          If a property supports pixel, "px" will be appended automatically to
          number
        </li>
        <li>
          vendor prefixing is not automatic! Write it camelcase and omit initial
          "-"
        </li>
      </ul>
    </section>
  );
};
