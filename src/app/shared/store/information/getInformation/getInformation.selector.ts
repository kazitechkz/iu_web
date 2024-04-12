import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Information} from "../../../models/information.model";

const get_information_state = createFeatureSelector<ResponseData<Information>>('getInformation');

export const getInformationSelector = createSelector(get_information_state, (state) => {
  return state;
})
