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
          alt={props.altText}
          onClick={() => props.onMovieSelect(props.movieId)}
        />
        <AddEditModal
          buttonText="Edit Movie"
          modalForm={<MovieForm movieid={props.movieId} />}
          header="Edit Movie"
          isEditModal="true"
        ></AddEditModal>
        <DeleteModal
          buttonText="Delete Movie"
          header="Delete Movie"
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
  movieId: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  movieType: PropTypes.string.isRequired,
  onMovieSelect: PropTypes.func.isRequired
};

MovieCard.defaultProps = {
  altText: "Movie"
};
