export const More = () => {
  return (
    <section className={"more-section"}>
      <h2>And More in the docs</h2>
      <p>
        This features cover cases that are not that common so i won't dive into
        it
      </p>
      <p>Just mentioning them</p>
      <ul>
        <li>
          <a
            href={
              "https://vanilla-extract.style/documentation/styling/#container-queries"
            }
            target={"_blank"}
          >
            Container Queries
          </a>
        </li>
        <li>
          <a
            href={
              "https://vanilla-extract.style/documentation/styling/#supports-queries"
            }
            target={"_blank"}
          >
            Supports Queries
          </a>
        </li>
        <li>
          <a
            href={
              "https://vanilla-extract.style/documentation/styling/#fallback-styles"
            }
            target={"_blank"}
          >
            Fallback Styles
          </a>
        </li>
      </ul>
    </section>
  );
};
