import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Loader from 'react-loader-spinner';
import { usePromiseTracker } from "react-promise-tracker";
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import { createReduxStore } from './redux/reduxStore';
import reportWebVitals from './reportWebVitals';

// export const store = createStore(rootReducer, applyMiddleware(logger));
export const store = createReduxStore();

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
      <LoadingIndicator />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
