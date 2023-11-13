import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Subject} from "../../../models/subject.model";

const get_my_subjects_state = createFeatureSelector<ResponseData<Subject[]>>('getMySubjects');

export const getMySubjectsSelector = createSelector(get_my_subjects_state, (state) => {
  return state;
})
