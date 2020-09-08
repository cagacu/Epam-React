import React from "react";
import MovieList from "../../Containers/Movie/MovieList.js";
import LoadingContainer from "../../Containers/Loading/LoadingContainer.js";

const MovieListWithLoading = LoadingContainer(MovieList);

function MovieContainer(props) {
  return (
    <>
      <div className="movieContainer">
        <MovieListWithLoading
          isLoading={false}
          onMovieSelect={props.onMovieSelect}
        />
      </div>
    </>
  );
}

export default MovieContainer;
