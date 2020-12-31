import React from 'react';
import { store } from './index.js';
import { didPlayerBWin, didPlayerAWin} from "./WinnerCheck.js";
import { recordChance_A, recordChance_B }  from './redux/WeatherRedux';

const allButtons = ['B1','B2','B3','B4','B5','B6','B7','B8','B9'];

class Tictactoe extends React.Component {

    state={
        player: 'A',
        result: null,
        isButtonDisabled: false,
        buttonsDisabled : []
    }
    
    handleClick = (e) => {
        
        e.preventDefault();

        //Disable the Button After clicked
        e.target.disabled = true;
        //push the disabled Button onto a list
        this.state.buttonsDisabled.push(e.target.id);

        var that = this;

        var res = null;

        console.log('Button CLicked',e.target.id);

        console.log('check player:',that.state);

        if(that.state.player === null || that.state.player === 'B')
        {    
            store.dispatch(recordChance_B(e.target.id));            

            document.getElementById(e.target.id).innerHTML = 'B';

            res = didPlayerBWin();
            console.log('res B',res);
            that.setState({player:'A'});
        }
        else if (that.state.player === 'A')
        {               
            store.dispatch(recordChance_A(e.target.id));

            document.getElementById(e.target.id).innerHTML = 'A';

            res = didPlayerAWin();
            console.log('res A',res);
            that.setState({player:'B'});
        }

         if(res.includes('Wins'))
         {   
             this.setState({result:res});
             this.setState({isButtonDisabled:true});
        
         }

        if( JSON.stringify(allButtons.sort()) === JSON.stringify(this.state.buttonsDisabled.sort()) )
        { 
            this.setState({result:'DRAW'});
            that.setState({player:''});
        }
    }

    render(){
        return(
            <div className="center">
            <h3>Player : {this.state.player} </h3>
                <div className="row1">
                    <button className="button1" id="B1" onClick={this.handleClick} disabled={this.state.isButtonDisabled}>B1</button>
                    <button className="button2" id="B2" onClick={this.handleClick} disabled={this.state.isButtonDisabled}>B2</button>
                    <button className="button3" id="B3" onClick={this.handleClick} disabled={this.state.isButtonDisabled}>B3</button>
                </div>
                <div className="row2">
                    <button className="button4" id="B4" onClick={this.handleClick} disabled={this.state.isButtonDisabled}>B4</button>
                    <button className="button5" id="B5" onClick={this.handleClick} disabled={this.state.isButtonDisabled}>B5</button>
                    <button className="button6" id="B6" onClick={this.handleClick} disabled={this.state.isButtonDisabled}>B6</button>
                </div>
                <div className="row3">
                    <button className="button7" id="B7" onClick={this.handleClick} disabled={this.state.isButtonDisabled}>B7</button>
                    <button className="button8" id="B8" onClick={this.handleClick} disabled={this.state.isButtonDisabled}>B8</button>
                    <button className="button9" id="B9" onClick={this.handleClick} disabled={this.state.isButtonDisabled}>B9</button>
                </div>
                <h3>Result : {this.state.result} </h3>
            </div>
        )
    }
}

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(
//     {
//       recordChance_A,
//       recordChance_B
//     },
//     dispatch
//   );

export default Tictactoe;
// export default connect(
//     (state) => {
//         return{        
//     }
// }
//     ,
//     mapDispatchToProps
//     )(Tictactoe);