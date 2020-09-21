import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import storeFactory from './Core/Store/storeFactory';
import { Provider } from 'react-redux'
import fetchMovieListAsync from './Core/Actions/actionCreators';

const store = storeFactory();

store.dispatch(fetchMovieListAsync(2));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
