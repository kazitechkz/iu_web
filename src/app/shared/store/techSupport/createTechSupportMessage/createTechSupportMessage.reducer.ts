import {createReducer, on} from "@ngrx/store";
import {createTechSupportMessageState} from "./createTechSupportMessage.state";
import {
  createTechSupportMessageAction, createTechSupportMessageActionFailure, createTechSupportMessageActionSuccess,

} from "./createTechSupportMessage.action";

const _createTechSupportMessageReducer = createReducer(
  createTechSupportMessageState,
  on(createTechSupportMessageAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(createTechSupportMessageActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(createTechSupportMessageActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function createTechSupportMessageReducer(state: any, action: any) {
  return _createTechSupportMessageReducer(state, action);
}
