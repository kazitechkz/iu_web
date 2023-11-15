import {createReducer, on} from "@ngrx/store";
import {
 findUserByEmailAction, findUserByEmailActionSuccess, findUserByEmailActionFailure,
} from "./findUserByEmail.action";
import {findUserByEmailState} from "./findUserByEmail.state";


const _findUserByEmailReducer = createReducer(
  findUserByEmailState,
  on(findUserByEmailAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(findUserByEmailActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(findUserByEmailActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function findUserByEmailReducer(state: any, action: any) {
  return _findUserByEmailReducer(state, action);
}
