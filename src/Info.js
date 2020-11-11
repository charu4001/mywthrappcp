import React from 'react';
import { store } from './index.js';

class Info extends React.Component {
    render(){
        const tempList = store.getState().temperatures.map( t => {
            return (
                <div className="Temperature" key={t.cityName}>
                    <div>City Name:{t.cityName}</div>
                    <div>Temperature:{t.temp}</div>
                    <div></div>
                </div>
            )
        })

    return(
        <div>
            {tempList}
        </div>
    )
    }
}

export default Info;