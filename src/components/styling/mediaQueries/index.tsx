import { container } from "./mediaQueries.css";

export const MediaQueries = () => {
  return (
    <div className={`media-queries-section ${container}`}>
      <h2>Media Queries</h2>
      <p>
        This container will change its width, background and color based on a
        set of media queries ( 0, 768px, 1024px )
      </p>
    </div>
  );
};
