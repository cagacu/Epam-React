import React from "react";
import SearchBox from "../Utilities/SearchBox.js";
import AddMoviewButton from "../../Containers/Movie/AddMovie";
import MovieDetail from "../../Containers/Movie/MovieDetail";
import { selectMovie } from "../../Core/Actions/actionCreators"
import { connect } from 'react-redux'

function Header(props) {
  if (!props.selectedMovie) {
    return (
      <>
        <SearchHeader />
      </>
    );
  }
  return (
    <>
      <div className="header">
        <MovieDetail onReset={props.onMovieSelect} selectedMovie={props.selectedMovie} />
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

const mapStateToProps = (state) => ({
  selectedMovie: state.movieList.selectedMovie
})

const mapDispatchToProps = dispatch => ({
  onMovieSelect: id => dispatch(selectMovie(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
