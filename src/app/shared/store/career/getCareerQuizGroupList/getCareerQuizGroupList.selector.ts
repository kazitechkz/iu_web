import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetCareerQuizGroupListModel} from "./getCareerQuizGroupList.model";

const get_career_quiz_group_list_state = createFeatureSelector<ResponseData<GetCareerQuizGroupListModel>>('getCareerQuizGroupList');

export const getCareerQuizGroupListSelector = createSelector(get_career_quiz_group_list_state, (state) => {
  return state;
})
