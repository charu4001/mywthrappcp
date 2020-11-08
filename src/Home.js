import React from 'react';
import { connect } from 'react-redux';
import { store } from './index.js';


type Props = {
    temperatures:Array<any>
}

//const Home = () => {
class Home extends React.Component{
    
    //Donot need state as we are conecting to the store, using it to staore current state and push it to store
    state={
        cityName: null,
        temp: null
    }

    handleClick = (e) => {
        e.preventDefault();
        console.log(this.props.temperatures);
        console.log('handleClick, printing props');
        console.log('printed props');
        console.log('printed props');
        
        //this.props.addTemp(this.props.temperatures[0].cityName);
        // this.props.addTemp(this.props.payload);

       store.dispatch({ type: 'ADD_TEMP', payload: this.state});

       console.log('abhinav presents state');
        console.log(store.getState());
        console.log('abhinav presented state');
    }

    handleChange = (e) => {
        console.log('handleChange');
        console.log('e:',e.target.id);
        this.setState({
            [e.target.id] : e.target.value
        })
        console.log('this.state1:',this.state);
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log('this.state2:',this.state);
        // console.log('handleSubmit');
    }


    render(){
        console.log('handleClick, printing props from render');
        console.log(this.props.temperatures);
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="cityName">City Name</label>
                    <input type="text" id="cityName" onChange={this.handleChange}/>
                    <label htmlFor="temp">Temperature</label>
                    <input type="text" id="temp" onChange={this.handleChange}/>
                    <button onClick={this.handleClick}>FetchWeather</button>
                </form>
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

const mapDispatchToProps = (dispatch) => {
    return{
        // addTemp : (payload) => {dispatch ({ type: 'ADD_TEMP', payload: {cityName: 'Jodhpur', temp: '30'}}) }
        // addTemp : (payload) => {dispatch ({ type: 'ADD_TEMP', payload: this.state}) }
        //charu
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);