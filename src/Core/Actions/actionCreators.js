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

export const fetchSearchedMovieListAsync = (search, limit) => (dispatch) =>
{
    dispatch(fetchMovieListAsyncRequest())
    return fetch(API_CONFIGS.MOVIE_API_MOVIES_URL +'?search='+search+'&searchBy=title&limit='+limit)
    .then(response => response.json())
    .then(json => dispatch(fetchMovieListAsyncResponse(json, { limit : limit })))
}

export const fetchMovieAsync = (movieId, dispatch, callback) => 
{   
    return fetch(API_CONFIGS.MOVIE_API_MOVIES_URL + '/' + movieId)
    .then(response => response.json())
    .then(json => dispatch(fetchMovieAsyncResponse(json)))
    .then(callback());
}

export const fetchMovieAsyncResponse = (movieJson) => ({
    type : ACTIONS.FETCH_MOVIE_ASYNC_RESPONSE,
    payload : {
        movie : movieJson
    }
})

export const clearFetchedMovie = () => ({
    type : ACTIONS.CLEAR_FETCHED_MOVIE,
})

export const saveMovieAsync = (data, dispatch) => {
    return fetch(API_CONFIGS.MOVIE_API_MOVIES_URL, 
        { 
            method: data.isUpdate ? 'PUT' : 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id : data.isUpdate ? data.movieId : undefined,
                title : data.title,
                release_date : data.date,
                poster_path : data.imgUrl,
                runtime : parseInt(data.runtime),
                overview : data.overview,
                genres : new Array(data.genre)
            })        
        })
        .then(response => response.json())
        .then(json => dispatch(saveMovieResponseAsync(json)));
}

export const saveMovieResponseAsync = (data) => ({
    type : ACTIONS.SAVE_MOVIE_ASYNC_RESPONSE,
    payload : {
        result : data
    }
})

export const deleteMovieAsync = (data, dispatch) => {
    return fetch(API_CONFIGS.MOVIE_API_MOVIES_URL + '/' + data.movieId, 
        { 
            method: 'DELETE'
        })
        .then(dispatch(fetchMovieListAsync(API_CONFIGS.MAIN_PAGE_MOVIE_LIMIT)))
        .then(dispatch(deleteMovieResponseAsync(data.movieId + ' is deleted.')));
        
}

export const deleteMovieResponseAsync = (data) =>
({
    type : ACTIONS.DELETE_MOVIE_ASYNC_RESPONSE,
    payload : {
        result : data
    }
})

export default fetchMovieListAsync;