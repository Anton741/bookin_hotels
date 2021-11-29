import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, compose, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./redux/saga/rootSaga"
import { BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux'
import { connectRouter } from "connected-react-router";
import { rootReducer } from "./redux/rootReducer";



import App from './app';
import reportWebVitals from './reportWebVitals';
import createHistory from "history/createBrowserHistory";
import './index.css';


export const history = createHistory();

const sagaMiddleware = createSagaMiddleware()
const store = createStore(connectRouter(history)(rootReducer), compose(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga)
    ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

