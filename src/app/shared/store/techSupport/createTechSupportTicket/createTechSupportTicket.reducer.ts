import {createReducer, on} from "@ngrx/store";
import {createTechSupportTicketState} from "./createTechSupportTicket.state";
import {
  createTechSupportTicketAction, createTechSupportTicketActionFailure, createTechSupportTicketActionSuccess,

} from "./createTechSupportTicket.action";

const _createTechSupportTicketReducer = createReducer(
  createTechSupportTicketState,
  on(createTechSupportTicketAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(createTechSupportTicketActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(createTechSupportTicketActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function createTechSupportTicketReducer(state: any, action: any) {
  return _createTechSupportTicketReducer(state, action);
}
