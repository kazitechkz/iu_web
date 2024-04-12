import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {HottestInformationModel} from "./hottestInformation.model";

const hottest_information_state = createFeatureSelector<ResponseData<HottestInformationModel>>('hottestInformation');

export const hottestInformationSelector = createSelector(hottest_information_state, (state) => {
  return state;
})
