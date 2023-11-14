import {createReducer, on} from "@ngrx/store";
import {subCategoryAllState} from "./subCategory.state";
import {
  GetSubCategoriesAction,
  GetSubCategoriesActionFailure,
  GetSubCategoriesActionSuccess
} from "./subCategory.action";

const _subCategoryReducer = createReducer(
  subCategoryAllState,
  on(GetSubCategoriesAction, (state, action) => {
    return {
      ...state,
    }
  }),
  on(GetSubCategoriesActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(GetSubCategoriesActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function subCategoryReducer(state: any, action: any) {
  return _subCategoryReducer(state, action);
}
