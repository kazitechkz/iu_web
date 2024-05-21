import {createReducer, on} from "@ngrx/store";
import {
  UtmAction,
  UtmSuccess,
  UtmFailure,

} from "./utm.action";
import {utmState} from "./utm.state";


const _utmReducer = createReducer(
  utmState,
  on(UtmAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(UtmSuccess, (state, action) => {
    return {
      ...state,
      status: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(UtmFailure, (state, action) => {
    return {
      ...state,
      status: false,
      errors: action.errors
    }
  })
);

export function utmReducer(state: any, action: any) {
  return _utmReducer(state, action);
}
