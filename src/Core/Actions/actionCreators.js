import ACTIONS from "./actionTypes.js"


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

const fetchMovieListAsync = (limit) => (dispatch) =>
{
    dispatch(fetchMovieListAsyncRequest())
    return fetch('localhost:4000/movies?limit='+limit)
    .then(response => response.json())
    .then(json => dispatch(fetchMovieListAsyncResponse(limit, json)))
}


// const fetchMovieListAsync = (count) => (dispatch) => ({
//     type : ACTIONS.FETCH_MOVIE_LIST_ASYNC,
//     payload : {
//         count : count
//     }
// })

export default fetchMovieListAsync;