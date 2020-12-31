
import { store } from './index.js';

export function didPlayerBWin(){    
    let wc = getWinningConditions();
    console.log(typeof wc);
    console.log(wc);
    let ar = store.getState().ticTacToe.chancesB;
    let out = false;
    
    var res = 'DRAW';
    getWinningConditions().forEach(element => {
        debugger;
        if(!out && element.every(v => ar.includes(v))){
            res = 'Player B Wins'
        }
    });
    
    return res;
}

export function didPlayerAWin(){    
    let wc = getWinningConditions();
    console.log(typeof wc);
    console.log(wc);
    let ar = store.getState().ticTacToe.chancesA;
    let out = false;
    var res = 'DRAW';
    getWinningConditions().forEach(element => {
        debugger;
        if(!out && element.every(v => ar.includes(v))){
            res = 'Player A Wins'
        }
    });
    return res;
}

export function getWinningConditions(): Array<Array<string>>{

    const winningConditions = [];

    winningConditions.push(['B1','B2','B3']);
    winningConditions.push(['B4','B5','B6']);
    winningConditions.push(['B7','B8','B9']);
    
    winningConditions.push(['B1','B4','B7']);
    winningConditions.push(['B2','B5','B8']);
    winningConditions.push(['B3','B6','B9']);
  
    winningConditions.push(['B1','B5','B9']);
    winningConditions.push(['B3','B5','B7']);

    return winningConditions;
}