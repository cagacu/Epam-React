import React from "react";
import { Search } from "react-bootstrap-icons";

function MovieDetail(props) {
  const handleOnClose = () => {
    props.onReset(-1);
  };

  return (
    <div className="headerDetail">
      {<>
            <div className="detailImg">
              <img src={props.selectedMovie.poster_path} alt={props.selectedMovie.title} />
            </div>
            <div className="details">
              <div className="detailsTitle">
                <span className="detailsTitleSpan">{props.selectedMovie.title}</span>
                <span className="detailsRatingSpan">{props.selectedMovie.vote_average}</span>
              </div>
              <div>
                <span>{props.selectedMovie.release_date}</span>
                <span>{props.selectedMovie.runtime}</span>
              </div>
              <div>
                <span>{props.selectedMovie.overview}</span>
              </div>
            </div>
            <div className="detailsExit">
              <button onClick={handleOnClose}>
                <Search />
              </button>
            </div>
        </>
      }
    </div>
  );
}

export default MovieDetail;
