import { combineReducers } from 'redux'
import movieList from "./movieReducers";

const rootReducer = combineReducers({
    movieList
    }
)

export default rootReducer;