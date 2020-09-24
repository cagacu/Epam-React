import React from "react";
import PropTypes from "prop-types";
import AddEditModal from "../Modals/AddEditModal";
import DeleteModal from "../Modals/DeleteModal";
import MovieForm from "../Movie/Forms/MovieForm";

function MovieCard(props) {
  return (
    <div className="movieCard">
      <div className="movieImg">
        <img
          src={props.imageUrl}
          alt=""
          onClick={ () => props.onMovieSelect(props.movieId) }
          crossOrigin="*"
        />
        <AddEditModal
          buttonText="Edit Movie"
          header="Edit Movie"
          isEditModal="true"
          movieId={props.movieId}
        >
          <MovieForm movieid={props.movieId} />
        </AddEditModal>
        <DeleteModal
          buttonText="Delete Movie"
          header="Delete Movie"
          movieId={props.movieId}
        ></DeleteModal>
      </div>
      <div className="movieDescription">
        <span className="movieTitle">{props.title}</span>
        <span className="movieType">{props.movieType}</span>
      </div>
    </div>
  );
}

export default MovieCard;

MovieCard.propTypes = {
  movieId: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  movieType: PropTypes.string.isRequired,
  onMovieSelect: PropTypes.func.isRequired
};

MovieCard.defaultProps = {
  altText: "Movie"
};
