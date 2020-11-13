const initState = {
    temperatures: [
        //{ cityName: null , temp: null }
        // { cityName: 'Calgary', temp: 10 },
        // { cityName: 'Jaipur', temp: 20 }
    ]
}

const roorReducer = (state = initState, action) => {
    if(action.type === 'ADD_TEMP')
    {
        state.temperatures.push(action.payload)
    }
    return state;
}

export default roorReducer;