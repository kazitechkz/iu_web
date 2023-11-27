import {createReducer, on} from "@ngrx/store";
import {closeTechSupportTicketState} from "./closeTechSupportTicket.state";
import {
  closeTechSupportTicketAction, closeTechSupportTicketActionFailure, closeTechSupportTicketActionSuccess,

} from "./closeTechSupportTicket.action";

const _closeTechSupportTicketReducer = createReducer(
  closeTechSupportTicketState,
  on(closeTechSupportTicketAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(closeTechSupportTicketActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(closeTechSupportTicketActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function closeTechSupportTicketReducer(state: any, action: any) {
  return _closeTechSupportTicketReducer(state, action);
}
