//React
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

//Redux
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { cardReducer } from "./store/reducers";

//Stylesheets
import './index.css';
import App from './App';

const store = createStore(cardReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
