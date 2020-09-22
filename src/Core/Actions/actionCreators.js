import ACTIONS from "./actionTypes.js"
import API_CONFIGS from "./../Utils/configs";

const fetchMovieListAsyncRequest = () => ({
    type : ACTIONS.FETCH_MOVIE_LIST_ASYNC_REQUEST,
    payload : {
        isFetching : true
    }
});

const fetchMovieListAsyncResponse = (responseJson, { limit, sortBy, genre }) => ({
    type : ACTIONS.FETCH_MOVIE_LIST_ASYNC_RESPONSE,
    payload : {
        count : limit,
        sortBy : sortBy,
        genre : genre,
        movies : responseJson,
        receivedAt : Date.now(),
        isFetching : false
    }
})

export const fetchMovieListAsync = (limit) => (dispatch) =>
{
    dispatch(fetchMovieListAsyncRequest())
    return fetch(API_CONFIGS.MOVIE_API_MOVIES_URL +'?limit='+limit)
    .then(response => response.json())
    .then(json => dispatch(fetchMovieListAsyncResponse(json, { limit : limit })))
}

export const selectMovie = (movieId) => ({
    type : ACTIONS.SELECT_MOVIE,
    payload : {
        movieId : movieId
    }
})

export const fetchMovieListByGenreAsync = (g, l) => (dispatch) =>
{
    dispatch(fetchMovieListAsyncRequest())
    return fetch(API_CONFIGS.MOVIE_API_MOVIES_URL +'?searchBy=genres&filter='+g+'&limit='+l)
    .then(response => response.json())
    .then(json => dispatch(fetchMovieListAsyncResponse(json, { limit : l, genre : g })))
}

export const fetchSortedMovieListAsync = (sortBy, limit) => (dispatch) =>
{
    dispatch(fetchMovieListAsyncRequest())
    return fetch(API_CONFIGS.MOVIE_API_MOVIES_URL +'?sortBy='+sortBy+'&sortOrder=desc&limit='+limit)
    .then(response => response.json())
    .then(json => dispatch(fetchMovieListAsyncResponse(json, { limit : limit, sortBy : sortBy })))
}

export const fetchMovie = (movieId) => ({
    type : ACTIONS.FETCH_MOVIE,
    payload : {
        movie : fetch(API_CONFIGS.MOVIE_API_MOVIES_URL + '/' + movieId).then(response => response.json())
    }
})



export default fetchMovieListAsync;