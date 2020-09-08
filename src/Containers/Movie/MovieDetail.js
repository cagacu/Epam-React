import React from "react";
import { Search } from "react-bootstrap-icons";

let movies = [
  {
    movieId: "1",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BYmQ5MzFjYWMtMTMwNC00ZGU5LWI3YTQtYzhkMGExNGFlY2Q0XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg",
    title: "District 9",
    movieType: "Action, Sci-Fi, Thriller",
    year: "2009",
    description:
      "Violence ensues after an extraterrestrial race forced to live in slum-like conditions on Earth finds a kindred spirit in a government agent exposed to their biotechnology.",
    rating: "7.9",
    duration: "1h 52min"
  },
  {
    movieId: "2",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
    title: "Inception",
    movieType: "Action, Adventure, Sci-Fi",
    year: "2010",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    rating: "8.8",
    duration: "2h 28min"
  },
  {
    movieId: "3",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    title: "Joker",
    movieType: "Crime, Drame, Thriller",
    year: "2019",
    description:
      "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
    rating: "8.5",
    duration: "2h 2min"
  }
];

function MovieDetail(props) {
  const handleOnClose = () => {
    props.onReset(-1);
  };

  return (
    <div className="headerDetail">
      {movies
        .filter((e) => e.movieId === props.movieId)
        .map((movie) => (
          <>
            <div className="detailImg">
              <img src={movie.imageUrl} alt={movie.title} />
            </div>
            <div className="details">
              <div className="detailsTitle">
                <span className="detailsTitleSpan">{movie.title}</span>
                <span className="detailsRatingSpan">{movie.rating}</span>
              </div>
              <div>
                <span>{movie.year}</span>
                <span>{movie.duration}</span>
              </div>
              <div>
                <span>{movie.description}</span>
              </div>
            </div>
            <div className="detailsExit">
              <button onClick={handleOnClose}>
                <Search />
              </button>
            </div>
          </>
        ))}
    </div>
  );
}

export default MovieDetail;
