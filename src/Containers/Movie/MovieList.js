import React from "react";
import { connect } from 'react-redux'
import MovieCard from "../../Components/Movie/MovieCard.js";
import { selectMovie } from "../../Core/Actions/actionCreators";

function MovieList(props) {
  const EmptyContainer = () => "There is not any movie right now !";

  const FilledContainer = () =>
    props.movies.map((movie, i) => (
      <MovieCard
        key={i}
        title={movie.title}
        altText = {movie.title}
        imageUrl={movie.poster_path}
        movieType={movie.genres.join(',')}
        year={movie.release_date}
        movieId={movie.id}
        onMovieSelect={props.onMovieSelect}
      />
    ));

  return props.movies.length > 0 ? <FilledContainer /> : <EmptyContainer />;
}

const mapStateToProps = (state) => ({
  movies: state.movieList.movies.data
})

const mapDispatchToProps = dispatch => ({
  onMovieSelect: id => dispatch(selectMovie(id))
})


const VisibleMovieList = connect(mapStateToProps, mapDispatchToProps)(MovieList)

export default VisibleMovieList;
