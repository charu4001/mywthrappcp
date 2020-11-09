import React from 'react';
import { connect } from 'react-redux';
import { store } from './index.js';
import fetchWether from './fetchWether';

class Home extends React.Component{
    
    //Donot need state as we are conecting to the store, using it to staore current state and push it to store
    state={
        cityName: null,
        temp: null
    }

    handleClick = (e) => {
        e.preventDefault();
        console.log('this.props.temperatures',this.props.temperatures);

        console.log('fetch weather below:');

        var that = this;

        var tempPromise = Promise.resolve(fetchWether(this.state.cityName));

        tempPromise.then(function(val){
            console.log('inside tempPromise.then',val);
            that.setState({temp: val})
            store.dispatch({ type: 'ADD_TEMP', payload: that.state});

        })

        console.log('Charu presents state');
        console.log(store.getState());
        
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    render(){
        console.log('handleClick, printing props from render');
        console.log(this.props.temperatures);
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
    console.log('mapStateToProps'); 
    return{
        temperatures: state.temperatures
    }
}

export default connect(mapStateToProps)(Home);