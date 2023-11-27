import {createReducer, on} from "@ngrx/store";
import {statDashboardState} from "./dashboard.state";
import {StatDashboardAction, StatDashboardFailure, StatDashboardSuccess} from "./dashboard.action";


const _statDashboardReducer = createReducer(
    statDashboardState,
    on(StatDashboardAction, (state, action) => {
        return {
            ...state,
          data: null
        }
    }),
    on(StatDashboardSuccess, (state, action) => {
        return {
            ...state,
            success: true,
            errors: null,
            data: action.responseData.data
        }
    }),
    on(StatDashboardFailure, (state, action) => {
        return {
            ...state,
            success: false,
            errors: action.errors
        }
    })
);

export function statDashboardReducer(state: any, action: any) {
    return _statDashboardReducer(state, action);
}
