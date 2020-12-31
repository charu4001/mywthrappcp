// @flow
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { store } from './index.js';
import { getWeather } from './redux/WeatherRedux';

type PropsType = {
  getWeather: () => void
};

class Home extends Component<PropsType> {
    state={
        cityName: null,
        temp: null
    }

    handleClick = (e) => {
        e.preventDefault();

        var that = this;

        if (this.state.cityName == null )
        {
             store.dispatch({type: 'NO_REQUEST_SENT', payload: null});
        }
        else
        {
            this.props.getWeather(this.state.cityName);
         
            this.props.history.push('/Info');
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    render(){
        return(
            <div>  
                    <label htmlFor="cityName">City Name</label>
                    <input type="text" id="cityName" onChange={this.handleChange}/>
                    <button onClick={this.handleClick}>FetchWeather</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        temperatures: state.temperatures
    }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getWeather
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);