// @flow
'use strict';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import type { ReduxState } from './reduxState';
import { initialState } from './reduxState';
import { weatherReducer } from './WeatherRedux';

const middlewaresToApply =  [ thunk, logger ] ;

const middleware = applyMiddleware(...middlewaresToApply);

export function createReduxStore(data: ReduxState = initialState){
  console.log('InitialState',initialState);
  const appReducer = combineReducers({
    weather: weatherReducer.getReducer(),
//    temperatures: (state = {}) => state,
    chancesA: (state = {}) => state,
    chancesB: (state = {}) => state
  });

  const rootReducer = (state, action) => {
    return appReducer(state, action);
  };

  return createStore(rootReducer,
    data,
    middleware);
}