import React from 'react';
import axios from 'axios';

//import { showLoading, hideLoading } from 'react-redux-loading-bar'


async function fetchWether(cityName) {

    //Axios to get data from Open weather API 
    const completeURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&appid=e1a93138d9f69da2b14fec4cd4b09e13';

    console.log('completeURL: ',completeURL);

    var temp = null;

    await axios({
        method:'get',
        url:completeURL,
        responseType: 'stream'
    })
    .then(function (result){

        if(result.status = '200')
        {
            //console.log('success:', result);
            temp = result.data.main.temp;
        }
        // if(result.status = '404')
        // {
        //     console.log('Failure:', result);
        // }

    })
    .catch((message) => { 
        console.log('Error to make API call:', message);
        //window.location.href="/ErrorPage";// state was getting lost 
        //this.props.history.push('/ErrorPage');
    });

    

    return temp;
    
} 

export default fetchWether;