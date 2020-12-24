// @flow
'use strict';

import type { WeatherResponse } from '../types/WeatherApiType';
import  { initialWeatherState } from './WeatherRedux';

export type ReduxState = {
  weather: WeatherResponse
}

export const initialState = {
  weather: initialWeatherState
}