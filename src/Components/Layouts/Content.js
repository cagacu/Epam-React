import React,{ useEffect } from "react";
import Menu from "../Utilities/Menu.js";
import MovieContainer from "../Movie/MovieContainer.js";
import ErrorBoundary from "../../Containers/Error/ErrorBoundary.js";
import { useDispatch, connect } from "react-redux";
import fetchMovieListAsync from "../../Core/Actions/actionCreators"
import apiConfig from "../../Core/Utils/configs"

function Content() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieListAsync(apiConfig.MAIN_PAGE_MOVIE_LIMIT));
  });

  return (
    <div className="content">
      <Menu />
      <ErrorBoundary>
        <MovieContainer />
      </ErrorBoundary>
    </div>
  );
}

export default connect(null, null)(Content);
