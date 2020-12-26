// @flow
'use strict';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import type { ReduxState } from './reduxState';
import { initialState } from './reduxState';
import { weatherReducer } from './WeatherRedux';

const middlewaresToApply =  [ thunk, logger ] ;

const middleware = applyMiddleware(...middlewaresToApply);

export function createReduxStore(data: ReduxState = initialState){
  const appReducer = weatherReducer.getReducer();

  const rootReducer = (state, action) => {
    return appReducer(state, action);
  };

  return createStore(rootReducer,
    data,
    middleware);
}