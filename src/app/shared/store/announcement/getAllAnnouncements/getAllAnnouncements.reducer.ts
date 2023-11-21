import {createReducer, on} from "@ngrx/store";
import {getAllAnnouncementsState} from "./getAllAnnouncements.state";
import {
  GetAllAnnouncementsAction,
  GetAllAnnouncementsActionFailure,
  GetAllAnnouncementsActionSuccess
} from "./getAllAnnouncements.action";

const _getAllAnnouncementsReducer = createReducer(
    getAllAnnouncementsState,
  on(GetAllAnnouncementsAction, (state, action) => {
    return {
      ...state,
    }
  }),
  on(GetAllAnnouncementsActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(GetAllAnnouncementsActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function getAllAnnouncementsReducer(state: any, action: any) {
  return _getAllAnnouncementsReducer(state, action);
}
