// @flow
'use strict';

import type { WeatherResponse } from '../types/WeatherApiType';
import  {  weatherReducer } from './WeatherRedux';
import type { RequestReducerState } from './NetworkReducer';
import type { TicTacToe } from './WeatherRedux'; 

export type ReduxState = {
  weather: RequestReducerState<WeatherResponse>,
  temperatures: WeatherList,
  ticTacToe: TicTacToe
    }

export const initialState = {
  weather: weatherReducer.getInitialState(),//where is this coming from ? initialWeatherState is present in wethaerreducer
  temperatures: {
    dataList:[]
} ,
 ticTacToe:{
  chancesA:[],
  chancesB:[]
 }
}