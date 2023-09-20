import {createReducer,on} from "@ngrx/store";
import {initialRegisterState, RegisterState} from "./Register.state";
import {RegisterActionTypes} from "./Register.action.types";
import {registerAction, registerActionFailure, registerActionSuccess} from "./Register.action";


const _register_reducer = createReducer(
  initialRegisterState,
  on(registerAction,(state,action)=>{
    return{
      ...state,
      is_loading:true
    }
  }),
  on(registerActionSuccess,(state,action)=>{
    return {
      ...state,
      is_loading:false,
      success:true,
      errors:null
    }
  }),
  on(registerActionFailure,(state,action)=>{
    return {
      ...state,
      is_loading:false,
      success:false,
      errors:action.errors
    }
  })
);

export function registerReducer(state:any, action: any) {
  return _register_reducer(state, action);

}
