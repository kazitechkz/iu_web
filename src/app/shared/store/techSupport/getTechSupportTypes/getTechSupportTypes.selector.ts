import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {TechSupportType} from "../../../models/techSupportType.model";

const get_tech_support_types_state = createFeatureSelector<ResponseData<TechSupportType[]>>('getTechSupportTypes');

export const getTechSupportTypesSelector = createSelector(get_tech_support_types_state, (state) => {
  return state;
})
