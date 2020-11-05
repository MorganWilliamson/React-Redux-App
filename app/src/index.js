//React
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

//Redux
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { cardReducer } from "./store/reducers";

//Stylesheets
import './index.css';
import App from './App';

const store = createStore(cardReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
