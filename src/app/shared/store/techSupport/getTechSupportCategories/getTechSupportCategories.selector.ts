import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {TechSupportCategory} from "../../../models/techSupportCategory.model";

const get_tech_support_categories_state = createFeatureSelector<ResponseData<TechSupportCategory[]>>('getTechSupportCategories');

export const getTechSupportCategoriesSelector = createSelector(get_tech_support_categories_state, (state) => {
  return state;
})
