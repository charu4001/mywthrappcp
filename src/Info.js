import React from 'react';
import { store } from './index.js';
import summer from './undraw_sunlight_tn7t.png';
import winter from './undraw_winter_road_mcqj.png';
import fall from './undraw_Fall_is_coming_yl0x.png';
import spring from './undraw_blooming_jtv6.png';


class Info extends React.Component {
    render(){
        const tempList = store.getState().temperatures.map( t => {
            return t.temp < 0 ?
            (   <div className="Temperature" key={t.cityName}>

                    <h5>City : {t.cityName}</h5>
                    <p>Temperature : {t.temp}</p>
                    <img src={winter} alt='Winter' height="200px" width="250px"/>
                </div>
            ):( (t.temp < 10 && t.temp > 0 ) ? (
                <div className="Temperature" key={t.cityName}>
                    <h5>City : {t.cityName}</h5>
                    <p>Temperature : {t.temp}</p>
                    <img src={fall} alt='Fall' height="200px" width="250px"/>
                </div>
                ) : ( (t.temp < 20 && t.temp > 10 ) ? (
                <div className="Temperature" key={t.cityName}>
                    <h5>City : {t.cityName}</h5>
                    <p>Temperature : {t.temp}</p>
                    <img src={spring} alt='Spring' height="200px" width="250px"/>
                </div>   
                    ) : (
                    <div className="Temperature" key={t.cityName}>
                        <h5>City : {t.cityName}</h5>
                        <p>Temperature : {t.temp}</p>
                        <img src={summer} alt='Summer' height="200px" width="250px"/>
                    </div>
                    )
                )
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