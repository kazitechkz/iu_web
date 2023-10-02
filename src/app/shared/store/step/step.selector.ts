import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../response_data";
import {StepModel} from "../../models/step.model";

const get_step_state = createFeatureSelector<ResponseData<StepModel[]>>('steps');

export const getStepState = createSelector(get_step_state, (state) => {
    return state;
})
