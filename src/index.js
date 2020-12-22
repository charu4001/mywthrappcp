import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'materialize-css/dist/css/materialize.min.css'
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './roorReducer';
import logger from 'redux-logger';
//import { loadingBarMiddleware } from 'react-redux-loading-bar';
import { usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner';

export const store = createStore(rootReducer, applyMiddleware(logger));//, applyMiddleware(loadingBarMiddleware()) );

const LoadingIndicator = props => {
  
  const { promiseInProgress } = usePromiseTracker();

  return (
    promiseInProgress &&
    <div
      style={{
        width: "100%",
        height: "100",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Loader type="ThreeDots" color="pink" height="100" width="100" />
    </div>
  );  
 }


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    <LoadingIndicator/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
