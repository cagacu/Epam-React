
import React from "react";
import { useParams, useLocation } from "react-router-dom";
import MovieDetail from "../Containers/Movie/MovieDetail";
import { useDispatch, connect } from "react-redux";
import {useEffect } from "react";
import { selectMovie } from "../Core/Actions/actionCreators"

const MovieDetailPage = (props) => {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(selectMovie(parseInt(id)));
      });
    
    return (
        <>{(props.selectedMovie)?<MovieDetail selectedMovie={props.selectedMovie} /> : "Loading..."}</>
    );
  }

  const mapStateToProps = (state) => ({
      selectedMovie : state.movieList.selectedMovie
  })
  
export default connect(mapStateToProps, null)(MovieDetailPage);