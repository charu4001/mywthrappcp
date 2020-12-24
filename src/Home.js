import React from 'react';
import { connect } from 'react-redux';
import { store } from './index.js';
import fetchWether from './fetchWether';
import { trackPromise } from 'react-promise-tracker';

class Home extends React.Component{
    
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
            console.log('return:',fetchWether(this.state.cityName));
                    
            var tempPromise = Promise.resolve(fetchWether(this.state.cityName));
            
            trackPromise(
                Promise.resolve(fetchWether(this.state.cityName))
            );

            console.log('tempPromise:',tempPromise);

            tempPromise.then(function(val){

                console.log('val:',val);

                if (val != null)
                {
                    store.dispatch({type: 'REQUEST_SENT_RESPONSE_RECEIVED', payload: val});

                    that.setState({temp: val})
                    store.dispatch({ type: 'ADD_TEMP', payload: that.state});

                    document.getElementById('cityName').value = '';

                    //window.location.href="/Info";
                    that.props.history.push('/Info');
                }
                else if (val == null)
                {
                    store.dispatch({type: 'BAD_REQUEST_SENT_ERROR_RESPONSE_RECEIVED', payload: val});

                    that.props.history.push('/ErrorPage');
                }

            })
        }

        // document.getElementById('cityName').value = '';

        // //window.location.href="/Info";
        // that.props.history.push('/Info');
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