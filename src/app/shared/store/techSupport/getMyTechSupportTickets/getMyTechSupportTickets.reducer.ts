import {createReducer, on} from "@ngrx/store";
import {getMyTechSupportTicketsState} from "./getMyTechSupportTickets.state";
import {
  getMyTechSupportTicketsAction,
  getMyTechSupportTicketsActionSuccess,
  getMyTechSupportTicketsActionFailure,

} from "./getMyTechSupportTickets.action";

const _getMyTechSupportTicketsReducer = createReducer(
  getMyTechSupportTicketsState,
  on(getMyTechSupportTicketsAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(getMyTechSupportTicketsActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(getMyTechSupportTicketsActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function getMyTechSupportTicketsReducer(state: any, action: any) {
  return _getMyTechSupportTicketsReducer(state, action);
}
