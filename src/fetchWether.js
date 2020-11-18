import React from 'react';
import axios from 'axios';

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
        temp = result.data.main.temp
    });

    return temp;
    
} 

export default fetchWether;