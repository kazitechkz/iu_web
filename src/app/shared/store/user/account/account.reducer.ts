import {createReducer, on} from "@ngrx/store";
import {AccountActionTypes} from "./account.action.types";
import {
  accountAction,
  accountActionFailure,
  accountActionSuccess,
  accountChangeAction, accountChangeActionFailure,
  accountChangeActionSuccess
} from "./account.action";
import {accountState, changeAccountState} from "./account.state";


const _accountReducer = createReducer(
    accountState,
    on(accountAction, (state, action) => {
        return {
            ...state,
          data:null,
        }
    }),
    on(accountActionSuccess, (state, action) => {
        return {
            ...state,
            success: true,
            errors: null,
            data: action.responseData.data
        }
    }),
    on(accountActionFailure, (state, action) => {
        return {
            ...state,
            success: false,
            errors: action.errors
        }
    })
);

export function accountReducer(state: any, action: any) {
    return _accountReducer(state, action);

}

const _changeAccountReducer = createReducer(
    changeAccountState,
    on(accountChangeAction, (state, action) => {
        return {
            ...state
        }
    }),
    on(accountChangeActionSuccess, (state, action) => {
        return {
            ...state,
            success: true,
            errors: null,
            data: action.responseData.data
        }
    }),
    on(accountChangeActionFailure, (state, action) => {
        return {
            ...state,
            success: false,
            errors: action.errors
        }
    })
);

export function changeAccountReducer(state: any, action: any) {
    return _changeAccountReducer(state, action);

}
