import {createReducer, on} from "@ngrx/store";
import {
  userCheckAction,
  userCheckActionSuccess,
  userCheckActionFailure,
} from "./userCheck.action";
import {userCheckState} from "./userCheck.state";


const _userCheckReducer = createReducer(
    userCheckState,
    on(userCheckAction, (state, action) => {
        return {
            ...state,
          data:null,
        }
    }),
    on(userCheckActionSuccess, (state, action) => {
        return {
            ...state,
            success: true,
            errors: null,
            data: action.responseData.data
        }
    }),
    on(userCheckActionFailure, (state, action) => {
        return {
            ...state,
            success: false,
            errors: action.errors
        }
    })
);

export function userCheckReducer(state: any, action: any) {
    return _userCheckReducer(state, action);

}

