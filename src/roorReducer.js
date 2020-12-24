
const initState = {
    temperatures: [
        //{ cityName: null , temp: null }
        // { cityName: 'Calgary', temp: 10 },
        // { cityName: 'Jaipur', temp: 20 }
    ],
    chancesA:[],
    chancesB:[],

    requestReducer: [
        // {
        //     responseData: null,
        //     isRequestRefreshing: null,
        //     isRequestError: null,
        //     errorMessage: null
        // }
    ]
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
    
    if(action.type === 'REQUEST_SENT_RESPONSE_RECEIVED')
    {

        state.requestReducer.push({
                                        responseData: action.payload,
                                        isRequestRefreshing: 'No',
                                        isRequestError: 'No',
                                        errorMessage: 'REQUEST_SENT_RESPONSE_RECEIVED: Success'
                                    });

    }

    if(action.type === 'REQUEST_SENT_NO_RESPONSE_RECEIVED')
    {
        state.requestReducer.push({
                                        responseData: action.payload,
                                        isRequestRefreshing: 'No',
                                        isRequestError: 'No',
                                        errorMessage: 'No'
                                    });
        
    }

    if(action.type === 'NO_REQUEST_SENT')
    {
        state.requestReducer.push({
                                        responseData: action.payload,
                                        isRequestRefreshing: null,
                                        isRequestError: null,
                                        errorMessage: 'NO_REQUEST_SENT'
                                    });
    }

    if(action.type === 'BAD_REQUEST_SENT_ERROR_RESPONSE_RECEIVED')
    {
        state.requestReducer.push({
                                        responseData: action.payload,
                                        isRequestRefreshing: 'No',
                                        isRequestError: 'Yes',
                                        errorMessage: 'BAD_REQUEST_SENT_ERROR_RESPONSE_RECEIVED: Error 404'
                                    });
        
    }

    return state;
}

export default roorReducer;