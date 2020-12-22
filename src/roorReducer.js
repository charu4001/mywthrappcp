
const initState = {
    temperatures: [
        //{ cityName: null , temp: null }
        // { cityName: 'Calgary', temp: 10 },
        // { cityName: 'Jaipur', temp: 20 }
    ],
    chancesA:[],
    chancesB:[]
}

const roorReducer = (state = initState, action) => {

    if(action.type === 'ADD_TEMP')
    {
        state.temperatures.push(action.payload)
    }

    if(action.type === 'RECORD_CHANCE_A')
    {
        state.chancesA.push(action.payload)
    }

    if(action.type === 'RECORD_CHANCE_B')
    {
        state.chancesB.push(action.payload)
    }
    
    return state;
}

export default roorReducer;