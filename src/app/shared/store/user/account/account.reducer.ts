import {createReducer, on} from "@ngrx/store";
import {AccountActionTypes} from "./account.action.types";
import {accountAction, accountActionFailure, accountActionSuccess} from "./account.action";
import {accountState} from "./account.state";


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
