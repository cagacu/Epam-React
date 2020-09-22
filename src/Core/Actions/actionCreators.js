import ACTIONS from "./actionTypes.js"
import API_CONFIGS from "./../Utils/configs";

const fetchMovieListAsyncRequest = () => ({
    type : ACTIONS.FETCH_MOVIE_LIST_ASYNC_REQUEST,
    payload : {
        isFetching : true
    }
});

const fetchMovieListAsyncResponse = (limit, responseJson) => ({
    type : ACTIONS.FETCH_MOVIE_LIST_ASYNC_RESPONSE,
    payload : {
        count : limit,
        movies : responseJson,
        receivedAt : Date.now(),
        isFetching : false
    }
})

const fetchMovieListAsync = (limit = 8) => (dispatch) =>
{
    dispatch(fetchMovieListAsyncRequest())
    return fetch(API_CONFIGS.MOVIE_API_MOVIES_URL +'?limit='+limit)
    .then(response => response.json())
    .then(json => dispatch(fetchMovieListAsyncResponse(limit, json)))
}

const selectMovie = (movieId) => ({
    type : ACTIONS.SELECT_MOVIE,
    payload : {
        movieId : movieId
    }
})

export { selectMovie };

export default fetchMovieListAsync;