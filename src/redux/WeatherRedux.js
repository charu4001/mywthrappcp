// @flow
'use strict';

import axios from 'axios';
import type { WeatherResponse } from '../types/WeatherApiType';
import { NetworkReducer } from './NetworkReducer';
import type { ReduxState } from './reduxState';
import type { RequestReducerAction } from './NetworkReducer';

const requestPrefix = 'http://api.openweathermap.org/data/2.5/weather?q=';
const requestSuffix = '&units=metric&appid=e1a93138d9f69da2b14fec4cd4b09e13'

export const initialWeatherState = {
  temperature: -273,
  cityName: 'noWhere'
};

export type WeatherList = {
  dataList: Array<WeatherResponse>
}

export type TicTacToe ={
  chancesA:Array<any>,
  chancesB:Array<any>
 };

export const initState = {
  chancesA: [],
  chancesB: []
}

export const initialWeatherList = {
  dataList:[]
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
          dispatch(setWeather(weatherInfo));
      }
    } catch (error) {
      dispatch(weatherReducer.errorAction());
    }
  };
}

export function setWeather(weather: WeatherResponse){
  return {
    type: 'SET_WEATHER_LIST',
    payload: weather
  }
}

export function weatherListReducer(state: WeatherList = initialWeatherList , action: RequestReducerAction){
  switch(action.type){
      case 'SET_WEATHER_LIST':      
        return {
              // ...state,
              dataList: [...state.dataList, action.payload]
              };
      default:
        return state;
    }
}

export function recordChance_A(chance_A: string){
  return{
    type: 'RECORD_CHANCE_A',
    payload: chance_A
  }
}

export function recordChance_B(chance_B: string){
  return{
    type: 'RECORD_CHANCE_B',
    payload: chance_B
  }
}


export function ticTacToeReducer(state = initState, action){

  switch (action.type){
    case 'RECORD_CHANCE_A':
      return {
              ...state,
              chancesA: [...state.chancesA, action.payload]
            };
    case 'RECORD_CHANCE_B':
      return {
              ...state,
              chancesB: [...state.chancesB, action.payload]
            };
    default:
      return state;
  }
}