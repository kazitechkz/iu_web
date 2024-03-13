import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {SubStepModel} from "../../../models/subStep.model";

const pass_sub_step_state = createFeatureSelector<ResponseData<SubStepModel[]>>('passSubStepBySubCategory');
export const passSubStepSelector = createSelector(pass_sub_step_state, (state) => {
  return state;
})
