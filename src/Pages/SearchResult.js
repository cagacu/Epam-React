import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchSearchedMovieListAsync } from "../Core/Actions/actionCreators"
import apiConfig from "../Core/Utils/configs"
import MovieContainer from "../Components/Movie/MovieContainer.js";
import ErrorBoundary from "../Containers/Error/ErrorBoundary.js";
import { useDispatch, connect } from "react-redux";

function SearchResult(props) {
    const dispatch = useDispatch();
    const { searchQuery } = useParams();

    useEffect(() => {
        dispatch(fetchSearchedMovieListAsync(searchQuery, apiConfig.MAIN_PAGE_MOVIE_LIMIT));
      });

    return (
        <>
        <ErrorBoundary>
            <MovieContainer />
            <Link to="/">Home</Link>
        </ErrorBoundary>
        </>
    );
}

export default connect(null, null)(SearchResult);