import {createFeatureSelector, createSelector} from "@ngrx/store";
import {SubCategoryModel} from "../../../models/subCategory.model";
import {ResponseData} from "../../response_data";

const get_sub_categories_state = createFeatureSelector<ResponseData<SubCategoryModel[]>>('subCategories');

export const getSubCategoriesState = createSelector(get_sub_categories_state, (state) => {
  return state;
})
