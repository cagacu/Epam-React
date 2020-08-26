import React from "react";
import PropTypes from "prop-types";

function MovieCard(props) {
  return (
    <div className="movieCard">
      <div className="movieImg">
        <img src={props.imageUrl} alt={props.altText} />
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
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  movieType: PropTypes.string.isRequired
};

MovieCard.defaultProps = {
  altText: "Movie"
};
