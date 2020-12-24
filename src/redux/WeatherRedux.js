// @flow
'use strict';

import axios from 'axios';
import type { WeatherResponse } from '../types/WeatherApiType';
import { NetworkReducer } from './NetworkReducer';
import type { ReduxState } from './reduxState';

const requestPrefix = 'http://api.openweathermap.org/data/2.5/weather?q=';
const requestSuffix = '&units=metric&appid=e1a93138d9f69da2b14fec4cd4b09e13'

export const initialWeatherState = {
  temperature: -273,
  cityName: 'noWhere'
};

export const weatherReducer: NetworkReducer<WeatherResponse> = new NetworkReducer('GET_WEATHER');

export function getWeather(cityName: string) {
  return async (dispatch: (arg: any) => void, getState: () => ReduxState) => {
    const state = getState();
  
    dispatch(weatherReducer.resetAction());
  
    dispatch(weatherReducer.requestAction());
    const completeURL = `${requestPrefix}${cityName}${requestSuffix}`;
  
    try {
      const response = await axios({
          method: 'get',
          url: completeURL,
          responseType: 'stream'
      });
      if (response.status == 200) {
          const weatherInfo = {
            temperature:  response.data.main.temp,
            cityName: response.data.name
          };
          dispatch(weatherReducer.responseAction(weatherInfo));
      }
    } catch (error) {
      dispatch(weatherReducer.errorAction());
    }
  };
}
