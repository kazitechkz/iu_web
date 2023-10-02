import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../response_data";
import {Me} from "../../models/user.model";
import {Subject} from "../../models/subject.model";

const get_subjects_state = createFeatureSelector<ResponseData<Subject[]>>('subjects');

export const getSubjectsState = createSelector(get_subjects_state, (state) => {
  return state;
})
