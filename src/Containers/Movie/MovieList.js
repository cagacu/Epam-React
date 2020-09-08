import React from "react";
import MovieCard from "../../Components/Movie/MovieCard.js";

let movies = [
  {
    movieId: "1",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BYmQ5MzFjYWMtMTMwNC00ZGU5LWI3YTQtYzhkMGExNGFlY2Q0XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg",
    title: "District 9",
    movieType: "Action, Sci-Fi, Thriller",
    year: "2009"
  },
  {
    movieId: "2",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
    title: "Inception",
    movieType: "Action, Adventure, Sci-Fi",
    year: "2010"
  },
  {
    movieId: "3",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    title: "Joker",
    movieType: "Crime, Drame, Thriller",
    year: "2019"
  },
  {
    movieId: "4",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    title: "Avengers : Endgame",
    movieType: "Action, Adventure, Drama",
    year: "2019"
  },
  {
    movieId: "5",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    title: "Ready Player One",
    movieType: "Action, Adventure, Sci-Fi",
    year: "2018"
  },
  {
    movieId: "6",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,665,1000_AL_.jpg",
    title: "Matrix",
    movieType: "Action, Adventure, Sci-Fi",
    year: "1999"
  },
  {
    movieId: "7",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_.jpg",
    title: "Oldboy",
    movieType: "Action, Drama, Mystery",
    year: "2003"
  },
  {
    movieId: "8",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY3NzIyNTA2NV5BMl5BanBnXkFtZTcwNzE2NjI4Nw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    title: "Prometheus",
    movieType: "Adventure, Mystery, Sci-Fi",
    year: "2012"
  }
];

function MovieList(props) {
  const EmptyContainer = () => "There is not any movie right now !";

  const FilledContainer = () =>
    movies.map((movie, i) => (
      <MovieCard
        key={i}
        title={movie.title}
        imageUrl={movie.imageUrl}
        movieType={movie.movieType}
        year={movie.year}
        movieId={movie.movieId}
        onMovieSelect={props.onMovieSelect}
      />
    ));

  return movies.length > 0 ? <FilledContainer /> : <EmptyContainer />;
}

export default MovieList;
