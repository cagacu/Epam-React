import ACTIONS from "../../Actions/actionTypes";

const movieList = (state =[], action)  => {

    switch (action.type)
    {
        case ACTIONS.FETCH_MOVIE_LIST_ASYNC:
        case ACTIONS.FETCH_MOVIE_LIST_ASYNC_REQUEST:
            return {...state, isFetching : action.payload.isFetching }
        case ACTIONS.FETCH_MOVIE_LIST_ASYNC_RESPONSE:
            return { 
                count : action.payload.count, 
                movies : action.payload.movies,
                receivedAt : action.payload.receivedAt,
                isFetching : action.payload.isFetching
            }
        default:
            return state;
    }
}

export default movieList;
