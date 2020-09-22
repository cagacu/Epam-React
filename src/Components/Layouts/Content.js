import React from "react";
import Menu from "../Utilities/Menu.js";
import MovieContainer from "../Movie/MovieContainer.js";
import ErrorBoundary from "../../Containers/Error/ErrorBoundary.js";

function Content() {
  return (
    <div className="content">
      <Menu />
      <ErrorBoundary>
        <MovieContainer />
      </ErrorBoundary>
    </div>
  );
}

export default Content;
