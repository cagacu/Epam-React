import React from "react";
import MovieList from "../../Containers/Movie/MovieList.js";
import LoadingContainer from "../../Containers/Loading/LoadingContainer.js";

const MovieListWithLoading = LoadingContainer(MovieList);

function MovieContainer() {
  return (
    <>
      <div className="movieContainer">
        <MovieListWithLoading isLoading />
      </div>
    </>
  );
}

export default MovieContainer;
