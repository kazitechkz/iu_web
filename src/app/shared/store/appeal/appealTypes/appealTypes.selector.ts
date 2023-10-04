import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AppealType} from "../../../models/appealType.model";
import {ResponseData} from "../../response_data";

const get_appeal_types_state = createFeatureSelector<ResponseData<AppealType[]>>('appealType');

export const appealTypeSelector = createSelector(get_appeal_types_state, (state) => {
  return state;
})
