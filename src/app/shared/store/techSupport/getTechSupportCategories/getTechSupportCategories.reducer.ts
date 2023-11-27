import {createReducer, on} from "@ngrx/store";
import {getTechSupportCategoriesState} from "./getTechSupportCategories.state";
import {
  getTechSupportCategoriesAction,
  getTechSupportCategoriesActionSuccess,
  getTechSupportCategoriesActionFailure,

} from "./getTechSupportCategories.action";

const _getTechSupportCategoriesReducer = createReducer(
  getTechSupportCategoriesState,
  on(getTechSupportCategoriesAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(getTechSupportCategoriesActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(getTechSupportCategoriesActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function getTechSupportCategoriesReducer(state: any, action: any) {
  return _getTechSupportCategoriesReducer(state, action);
}
