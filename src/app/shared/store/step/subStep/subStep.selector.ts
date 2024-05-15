import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {SubStepModel} from "../../../models/subStep.model";

const get_sub_step_state = createFeatureSelector<ResponseData<SubStepModel[]>>('subSteps');
export const getSubStepState = createSelector(get_sub_step_state, (state) => {
    return state;
})

const get_sub_step_detail_state = createFeatureSelector<ResponseData<SubStepModel>>('subStepDetail');
export const getSubStepDetailState = createSelector(get_sub_step_detail_state, (state) => {
    return state;
})

const get_sub_step_result_state = createFeatureSelector<ResponseData<boolean>>('subStepResult');
export const getSubStepResultState = createSelector(get_sub_step_result_state, (state) => {
    return state;
})

const content_appeal_state = createFeatureSelector<ResponseData<boolean>>('contentAppeal');
export const contentAppealSelector = createSelector(content_appeal_state, (state) => {
    return state;
})
