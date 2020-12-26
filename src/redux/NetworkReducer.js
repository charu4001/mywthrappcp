// @flow
'use strict';

export type RequestReducerState<T> = {
  data: ?T,
  isRefreshing: boolean,
  error: boolean,
  errorMessage: string
};

export type RequestReducerAction = {
  type: string,
  payload: any
};


export class NetworkReducer<DataType>{
  name: string;
  actionName: string;
  initialState: RequestReducerState<DataType>;

  constructor(name: string){
    this.name = name;
    this.actionName = name.toUpperCase();
    this.initialState={
      data: undefined,
      isRefreshing: false,
      error: false,
      errorMessage:''
    };
  }

  getInitialState(): RequestReducerState<DataType> {
    return this.initialState;
  }

  _requestType(flowName: string): string{
    return `REQUEST_${flowName}`;
  }

  _responseType(flowName: string): string{
    return `RESPONSE_${flowName}`;
  }

  _errorType(flowName: string): string{
    return `ERROR_${flowName}`;
  }


  _resetType(flowName: string): string{
    return `RESET_${flowName}`;
  }

  //Action creators

  requestAction(): RequestReducerAction{
    return {
      type: this._requestType(this.actionName),
      payload: undefined
    };
  }

  responseAction(data: DataType) : RequestReducerAction {
    return {
      type: this._responseType(this.actionName),
      payload: data
    };
  }

  errorAction(message: string): RequestReducerAction {
    return {
      type: this._errorType(this.actionName),
      payload: message
    };
  }

  resetAction(): RequestReducerAction {
    return {
      type: this._resetType(this.actionName),
      payload: undefined
    };
  }

  //Reducers

  _reducer(
    state: RequestReducerState<DataType> = this.initialState,
    action: RequestReducerAction  
  ){
    switch(action.type){
      case this._requestType(this.actionName):
        return {
          ...state,
          isRefreshing: true,
          error: false,
          errorMessage:''
        };
        case this._responseType(this.actionName):
        return {
          ...state,
          data: action.payload,
          isRefreshing: false,
          error: false,
          errorMessage:''
        };
        case this._errorType(this.actionName):
        return {
          ...state,
          isRefreshing: false,
          error: true,
          errorMessage: action.payload
        };
        case this._resetType(this.actionName):
        return this.getInitialState();
      default:
        return state;
    }
  }

  // getReducer returns a function that takes 2 arguments, state and action, and returns an object of RequestReducerState
  getReducer(): (state: RequestReducerState<DataType>, action: RequestReducerAction) => RequestReducerState<DataType> {
    return this._reducer.bind(this);
  }
}