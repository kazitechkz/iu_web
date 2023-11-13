import {createReducer, on} from "@ngrx/store";
import {categoryAllState} from "./category.state";
import {getCategoriesState} from "./category.selector";
import {GetCategoriesAction, GetCategoriesActionFailure, GetCategoriesActionSuccess} from "./category.action";

const _categoryReducer = createReducer(
  categoryAllState,
  on(GetCategoriesAction, (state, action) => {
    return {
      ...state,
    }
  }),
  on(GetCategoriesActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(GetCategoriesActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function categoryReducer(state: any, action: any) {
  return _categoryReducer(state, action);
}
