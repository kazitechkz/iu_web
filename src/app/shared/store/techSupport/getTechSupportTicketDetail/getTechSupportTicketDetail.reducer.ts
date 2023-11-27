import {createReducer, on} from "@ngrx/store";
import {getTechSupportTicketDetailState} from "./getTechSupportTicketDetail.state";
import {
  getTechSupportTicketDetailAction, getTechSupportTicketDetailActionFailure, getTechSupportTicketDetailActionSuccess,

} from "./getTechSupportTicketDetail.action";

const _getTechSupportTicketDetailReducer = createReducer(
  getTechSupportTicketDetailState,
  on(getTechSupportTicketDetailAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(getTechSupportTicketDetailActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(getTechSupportTicketDetailActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function getTechSupportTicketDetailReducer(state: any, action: any) {
  return _getTechSupportTicketDetailReducer(state, action);
}
