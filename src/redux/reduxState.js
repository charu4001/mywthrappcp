// @flow
'use strict';

import type { WeatherResponse } from '../types/WeatherApiType';
import  {  weatherReducer } from './WeatherRedux';
import type { RequestReducerState } from './NetworkReducer';

export type ReduxState = {
  weather: RequestReducerState<WeatherResponse>
}

export const initialState = {
  weather: weatherReducer.getInitialState()
}