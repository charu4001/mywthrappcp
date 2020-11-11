import React from 'react';
import { connect } from 'react-redux';
import { store } from './index.js';
import fetchWether from './fetchWether';

class Home extends React.Component{
    
    state={
        cityName: null,
        temp: null
    }

    handleClick = (e) => {
        e.preventDefault();

        var that = this;

        var tempPromise = Promise.resolve(fetchWether(this.state.cityName));

        tempPromise.then(function(val){
            that.setState({temp: val})
            store.dispatch({ type: 'ADD_TEMP', payload: that.state});

        })

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

export default connect(mapStateToProps)(Home);