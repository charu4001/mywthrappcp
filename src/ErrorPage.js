import React from 'react';
import errorImg from './undraw_page_not_found.png'
import { store } from './index.js';

class ErrorPage extends React.Component {
    render(){
        console.log('error page');
        return(
            <div>
            <p>Request failed with Error:</p>
            <img src={errorImg} alt='errorImg' height="400px" width="650px"/>
            </div>
        )
    }
}

export default ErrorPage;