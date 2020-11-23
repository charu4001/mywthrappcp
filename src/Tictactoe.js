import React from 'react';
import { store } from './index.js';
import WinnerCheck from "./WinnerCheck.js";

class Tictactoe extends React.Component {

    state={
        player: 'A',
        result: null
    }
    
    handleClick = (e) => {
        
        e.preventDefault();

        var that = this;

        var res = null;

        console.log('Button CLicked',e.target.id);

        console.log('check player:',that.state);

        if(that.state.player === null || that.state.player === 'B')
        {    
            store.dispatch({ type: 'RECORD_CHANCE_B', payload: e.target.id});
            res = WinnerCheck();
            console.log('res',res);
            that.setState({player:'A'});
        }
        else if (that.state.player === 'A')
        {   
            store.dispatch({ type: 'RECORD_CHANCE_A', payload: e.target.id});
            res = WinnerCheck();
            console.log('res',res);
            that.setState({player:'B'});
        }

         if(res.includes('Wins'))
             this.setState({result:res});

    }

    render(){
        return(
            <div className="center_">
            <h3>Player : {this.state.player} </h3>
                <div className="row1_">
                    <button id="B1" onClick={this.handleClick}>B1</button>
                    <button id="B2" onClick={this.handleClick}>B2</button>
                    <button id="B3" onClick={this.handleClick}>B3</button>
                </div>
                <div className="row2_">
                    <button id="B4" onClick={this.handleClick}>B4</button>
                    <button id="B5" onClick={this.handleClick}>B5</button>
                    <button id="B6" onClick={this.handleClick}>B6</button>
                </div>
                <div className="row3_">
                    <button id="B7" onClick={this.handleClick}>B7</button>
                    <button id="B8" onClick={this.handleClick}>B8</button>
                    <button id="B9" onClick={this.handleClick}>B9</button>
                </div>
                <h3>Result : {this.state.result} </h3>
            </div>
        )
    }
}

export default Tictactoe;