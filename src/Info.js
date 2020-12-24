import React from 'react';
import { connect } from 'react-redux';
import type { RequestReducerState } from './redux/NetworkReducer.js';
import type { ReduxState } from './redux/reduxState.js';
import { initialWeatherState, weatherReducer } from './redux/WeatherRedux.js';
import type { WeatherResponse } from './types/WeatherApiType.js';
import spring from './undraw_blooming_jtv6.png';
import fall from './undraw_Fall_is_coming_yl0x.png';
import summer from './undraw_sunlight_tn7t.png';
import winter from './undraw_winter_road_mcqj.png';

type Props = {
  weather: RequestReducerState<WeatherResponse>
}

class Info extends React.Component<Props> {
    render(){
        debugger;
      if(this.props.weather.isRefreshing){
        return (
          <div>
          {'Refreshing at the moment'}       
          </div>
      )
      }
      const weatherData = this.props.weather.data;
      
      return this.getResultScreen(weatherData);  
    }
    
    getResultScreen(weatherData: WeatherResponse){
      if(this.isObjectEmpty(weatherData)){
        return (
          <div>
          {'No data at the moment. Go request some first'}
          </div>
        )
      }
      const { temperature, cityName } = weatherData;  
      if(temperature < 0 ){
          return (
            <div className="Temperature" key={cityName}>
                        <h5>City : {cityName}</h5>
                      <p>Temperature : {temperature}</p>
                      <img src={winter} alt='Winter' height="200px" width="250px"/>
                  </div>
              );
        }

        if(temperature < 10 && temperature > 0 ){
          return (
            <div className="Temperature" key={cityName}>
                        <h5>City : {cityName}</h5>
                        <p>Temperature : {temperature}</p>
                        <img src={fall} alt='Fall' height="200px" width="250px"/>
                    </div>
          );
        }

        if(temperature < 20 && temperature > 10 ){
            return (
            <div className="Temperature" key={cityName}>
                        <h5>City : {cityName}</h5>
                        <p>Temperature : {temperature}</p>
                        <img src={spring} alt='Spring' height="200px" width="250px"/>
                    </div>  
            ); 
        }

        return (
          <div className="Temperature" key={cityName}>
                          <h5>City : {cityName}</h5>
                          <p>Temperature : {temperature}</p>
                          <img src={summer} alt='Summer' height="200px" width="250px"/>
                      </div>
        );
    }

    isObjectEmpty(obj: ?Object): boolean %checks {
      return obj === null || obj === undefined || (Object.keys(obj).length === 0 && obj.constructor === Object);
    }
    
}

export default connect(
  (state: ReduxState) => ({
    weather: state
  })
)(Info);