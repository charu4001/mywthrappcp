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

            document.getElementById(e.target.id).innerHTML = 'B';

            res = WinnerCheck();
            console.log('res',res);
            that.setState({player:'A'});
        }
        else if (that.state.player === 'A')
        {   
            store.dispatch({ type: 'RECORD_CHANCE_A', payload: e.target.id});

            document.getElementById(e.target.id).innerHTML = 'A';

            res = WinnerCheck();
            console.log('res',res);
            that.setState({player:'B'});
        }

         if(res.includes('Wins'))
             this.setState({result:res});

    }

    render(){
        return(
            <div className="center">
            <h3>Player : {this.state.player} </h3>
                <div className="row1">
                    <button className="button1" id="B1" onClick={this.handleClick}>B1</button>
                    <button className="button2" id="B2" onClick={this.handleClick}>B2</button>
                    <button className="button3" id="B3" onClick={this.handleClick}>B3</button>
                </div>
                <div className="row2">
                    <button className="button4" id="B4" onClick={this.handleClick}>B4</button>
                    <button className="button5" id="B5" onClick={this.handleClick}>B5</button>
                    <button className="button6" id="B6" onClick={this.handleClick}>B6</button>
                </div>
                <div className="row3">
                    <button className="button7" id="B7" onClick={this.handleClick}>B7</button>
                    <button className="button8" id="B8" onClick={this.handleClick}>B8</button>
                    <button className="button9" id="B9" onClick={this.handleClick}>B9</button>
                </div>
                <h3>Result : {this.state.result} </h3>
            </div>
        )
    }
}

export default Tictactoe;