import React, { useState, useEffect } from "react";
import SearchBox from "../Utilities/SearchBox.js";
import AddMoviewButton from "../../Containers/Movie/AddMovie";
import MovieDetail from "../../Containers/Movie/MovieDetail";

function Header({ onMovieSelectCallBack, onMovieSelect }) {
  const [movieId, setMovieId] = useState(-1);

  useEffect(() => {
    let selectedMovieId = onMovieSelectCallBack();
    setMovieId(selectedMovieId);
  }, [onMovieSelectCallBack]);

  if (movieId <= -1) {
    return (
      <>
        <SearchHeader />
      </>
    );
  }
  return (
    <>
      <div className="header">
        <MovieDetail onReset={onMovieSelect} movieId={movieId} />
      </div>
    </>
  );
}

function SearchHeader(props) {
  return (
    <div className="header">
      <AddMoviewButton />
      <SearchBox IsHeader="true" />
    </div>
  );
}

export default Header;
