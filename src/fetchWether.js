import React from 'react';
import axios from 'axios';

//import { showLoading, hideLoading } from 'react-redux-loading-bar'


async function fetchWether(cityName) {

    //Axios to get data from Open weather API 
    const completeURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&appid=e1a93138d9f69da2b14fec4cd4b09e13';

    console.log('completeURL: ', completeURL);

    var temp = null;
    try {
        let response = await axios({
            method: 'get',
            url: completeURL,
            responseType: 'stream'
        });

        if (response.status == 200) {
            temp = response.data.main.temp;
        }
    } catch (error) {
        console.log('Error to make API call:', error);
    }

    return temp;

}

export default fetchWether;