// @flow
'use strict';

import type { WeatherResponse } from '../types/WeatherApiType';
import  {  weatherReducer } from './WeatherRedux';
import type { RequestReducerState } from './NetworkReducer';

export type ReduxState = {
  weather: RequestReducerState<WeatherResponse>,
  //temperatures: [],
  chancesA:[],
  chancesB:[]
    }

export const initialState = {
  weather: weatherReducer.getInitialState(),//where is this coming from ? initialWeatherState is present in wethaerreducer
  //temperatures: [],
  chancesA:[],
  chancesB:[]
}