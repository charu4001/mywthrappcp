
import { store } from './index.js';


function WinnerCheck() {
    
    console.log('check store:',  store.getState());

    var result = null;

    if ( (store.getState().chancesA.includes('B1')) && (store.getState().chancesA.includes('B2')) && (store.getState().chancesA.includes('B3')) )
        result = 'Player A, Row 1 Wins';
    else if ( (store.getState().chancesA.includes('B4')) && (store.getState().chancesA.includes('B5')) && (store.getState().chancesA.includes('B6')) )
        result = 'Player A, Row 2 Wins';
    else if ( (store.getState().chancesA.includes('B7')) && (store.getState().chancesA.includes('B8')) && (store.getState().chancesA.includes('B9')) )
        result = 'Player A, Row 3 Wins';
    else if ( (store.getState().chancesA.includes('B1')) && (store.getState().chancesA.includes('B4')) && (store.getState().chancesA.includes('B7')) )
        result = 'Player A, Column 1 Wins';
    else if ( (store.getState().chancesA.includes('B2')) && (store.getState().chancesA.includes('B5')) && (store.getState().chancesA.includes('B8')) )
        result = 'Player A, Column 2 Wins';
    else if ( (store.getState().chancesA.includes('B3')) && (store.getState().chancesA.includes('B6')) && (store.getState().chancesA.includes('B9')) )
        result = 'Player A, Column 3 Wins';
    else if ( (store.getState().chancesA.includes('B1')) && (store.getState().chancesA.includes('B5')) && (store.getState().chancesA.includes('B9')) )
        result = 'Player A, Major Diagonal Wins';
    else if ( (store.getState().chancesA.includes('B3')) && (store.getState().chancesA.includes('B5')) && (store.getState().chancesA.includes('B7')) )
        result = 'Player A, Minor Diagonal Wins';
    
    else if ( (store.getState().chancesB.includes('B1')) && (store.getState().chancesB.includes('B2')) && (store.getState().chancesB.includes('B3')) )
        result = 'Player B, Row 1 Wins';
    else if ( (store.getState().chancesB.includes('B4')) && (store.getState().chancesB.includes('B5')) && (store.getState().chancesB.includes('B6')) )
        result = 'Player B, Row 2 Wins';
    else if ( (store.getState().chancesB.includes('B7')) && (store.getState().chancesB.includes('B8')) && (store.getState().chancesB.includes('B9')) )
        result = 'Player B, Row 3 Wins';
    else if ( (store.getState().chancesB.includes('B1')) && (store.getState().chancesB.includes('B4')) && (store.getState().chancesB.includes('B7')) )
        result = 'Player B, Column 1 Wins';
    else if ( (store.getState().chancesB.includes('B2')) && (store.getState().chancesB.includes('B5')) && (store.getState().chancesB.includes('B8')) )
        result = 'Player B, Column 2 Wins';
    else if ( (store.getState().chancesB.includes('B3')) && (store.getState().chancesB.includes('B6')) && (store.getState().chancesB.includes('B9')) )
        result = 'Player B, Column 3 Wins';
    else if ( (store.getState().chancesB.includes('B1')) && (store.getState().chancesB.includes('B5')) && (store.getState().chancesB.includes('B9')) )
        result = 'Player B, Major Diagonal Wins';
    else if ( (store.getState().chancesB.includes('B3')) && (store.getState().chancesB.includes('B5')) && (store.getState().chancesB.includes('B7')) )
        result = 'Player B, Minor Diagonal Wins';

    else
        result = 'DRAW';
    
    return result;
}

export default WinnerCheck;