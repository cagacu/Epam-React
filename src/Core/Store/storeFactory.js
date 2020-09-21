import { createStore, applyMiddleware } from 'redux';
import rootReducer from "./Reducers/rootReducer";
import initialState from './initialState';
import thunk from 'redux-thunk';
import logger from './../Utils/logger';

const storeFactory = () => applyMiddleware(thunk, logger)(createStore)(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default storeFactory;