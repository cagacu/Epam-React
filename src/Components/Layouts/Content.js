import React from "react";
import Menu from "../Utilities/Menu.js";
import MovieContainer from "../Movie/MovieContainer.js";
import ErrorBoundary from "../../Containers/Error/ErrorBoundary.js";

function Content(props) {
  return (
    <div className="content">
      <Menu />
      <ErrorBoundary>
        <MovieContainer onMovieSelect={props.onMovieSelect} />
      </ErrorBoundary>
    </div>
  );
}

export default Content;
