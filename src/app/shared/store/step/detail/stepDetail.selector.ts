import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {StepModel, Steps} from "../../../models/step.model";

const get_step_detail_state = createFeatureSelector<ResponseData<Steps[]>>('stepDetail');

export const getStepDetailState = createSelector(get_step_detail_state, (state) => {
    return state;
})
