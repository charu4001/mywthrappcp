// @flow
'use strict';

import { NetworkReducer } from './NetworkReducer';
import type { WeatherResponse } from '../types/WeatherApiType';
import type { ReduxState } from './reduxState';
import axios from 'axios';

export const initialWeatherState = {
  data: -273
};

export const weatherReducer: NetworkReducer<WeatherResponse> = new NetworkReducer('GET_WEATHER');

export function getWeather(cityName: string) {
  return async (dispatch: (arg: any) => void, getState: () => ReduxState) => {
    const state = getState();
  
    dispatch(weatherReducer.resetAction());
  
    dispatch(weatherReducer.requestAction());
    const completeURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&appid=e1a93138d9f69da2b14fec4cd4b09e13';
  
    try {
      const response = await axios({
          method: 'get',
          url: completeURL,
          responseType: 'stream'
      });
      debugger;
      if (response.status == 200) {
          let temp = response.data.main.temp;
          debugger;
          dispatch(weatherReducer.responseAction(temp));
      }
    } catch (error) {
      console.log('Error to make API call:', error);
      dispatch(weatherReducer.errorAction());
    }
  };
}
