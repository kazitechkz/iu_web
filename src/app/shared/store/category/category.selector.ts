import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../response_data";
import {CategoryModel} from "../../models/category.model";

const get_categories_state = createFeatureSelector<ResponseData<CategoryModel[]>>('categories');

export const getCategoriesState = createSelector(get_categories_state, (state) => {
  return state;
})
